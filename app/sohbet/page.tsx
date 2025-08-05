"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Confetti from 'react-confetti'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send, Moon, Sun, Settings } from "lucide-react"
import { subjectsData, curriculumData, SubjectKey, GradeKey } from "@/app/lib/data";
import { explanations } from "@/app/lib/explanations";

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatPage() {
    const router = useRouter();
    const [userName, setUserName] = useState<string | null>(null);
    const [grade, setGrade] = useState<GradeKey | null>(null);
    const [subject, setSubject] = useState<SubjectKey | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [points, setPoints] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const savedName = localStorage.getItem('chatbot_user_name');
        const savedGrade = localStorage.getItem('chatbot_user_grade');
        const savedSubject = localStorage.getItem('chatbot_user_subject');

        if (!savedName || !savedGrade || !savedSubject) {
            router.push('/');
            return;
        }

        const currentGrade = parseInt(savedGrade) as GradeKey;
        const currentSubject = savedSubject as SubjectKey;

        if (!(currentSubject in subjectsData) || !(currentGrade in (subjectsData[currentSubject].grades || {}))) {
            router.push('/');
            return;
        }

        setUserName(savedName);
        setGrade(currentGrade);
        setSubject(currentSubject);
        setMounted(true);

        if (messages.length === 0 && currentGrade && currentSubject) {
            const subjectName = subjectsData[currentSubject].name;
            const gradeCurriculum = curriculumData[currentGrade];
            let topics: readonly string[] = [];
            if (subjectName in gradeCurriculum) {
                topics = gradeCurriculum[subjectName as keyof typeof gradeCurriculum];
            }
            let topicList = topics.length > 0 ? topics.map(topic => `- ${topic}`).join('\n') : "";
            const initialContent = `Harika! **${subjectName}** dersindeyiz. Bu derste öğrenebileceğin bazı konular şunlar:\n\n${topicList}\n\nHangi konudan başlamak istersin?`;

            setMessages([{ id: 'initial-prompt', role: 'assistant', content: initialContent }]);
        }
    }, [router, messages.length]); 
    
    useEffect(() => {
        const viewport = scrollAreaRef.current?.children[0];
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !userName || !grade || !subject) return;

        const subjectName = subjectsData[subject].name;
        const topicName = input.trim();
        
        const gradeExplanations = explanations[grade as keyof typeof explanations];
        const subjectExplanations = gradeExplanations ? gradeExplanations[subjectName as keyof typeof gradeExplanations] : undefined;
        const knowledgeText = subjectExplanations ? subjectExplanations[topicName as keyof typeof subjectExplanations] : null;

        let sessionId = localStorage.getItem('chatbot_session_id');
        if (!sessionId) {
            sessionId = 'user_session_' + Date.now() + Math.random();
            localStorage.setItem('chatbot_session_id', sessionId);
        }
        const userMessage: Message = { id: Date.now().toString(), role: 'user', content: topicName };
        setMessages(prev => [...prev, userMessage]);
        setIsLoading(true);
        setInput('');

        try {
            const response = await fetch('/api/python-chatbot', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: topicName,
                    session_id: sessionId,
                    user_name: userName,
                    grade: grade,
                    subject: subjectName,
                    knowledge_text: knowledgeText
                })
            });
            if (!response.ok) throw new Error(`API isteği başarısız oldu: ${response.status}`);
            const data = await response.json();
            const botMessage: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: data.reply };
            setMessages(prev => [...prev, botMessage]);
            setPoints(data.points);
            if (data.new_badge_won) {
                setShowConfetti(true);
                setTimeout(() => setShowConfetti(false), 5000);
            }
        } catch (error) {
            console.error("Hata:", error);
            const errorMessage: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: "Üzgünüm, bir hata oluştu. Lütfen tekrar dene." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };
    
    if (!mounted || !subject || !grade) {
        return <div className="min-h-screen bg-gray-100 dark:bg-gray-900"></div>;
    }
    
    const subjectInfo = subjectsData[subject];
    const gradeInfo = subjectInfo.grades[grade as keyof typeof subjectInfo.grades];

    return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-purple-950 dark:to-violet-950 transition-all duration-500">
        {showConfetti && <Confetti recycle={false} onConfettiComplete={() => setShowConfetti(false)} />}
        <header className="border-b bg-white/80 backdrop-blur-xl dark:bg-gray-900/80 z-10 shadow-lg">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold">{grade}. Sınıf - {subjectInfo.name}</h1>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" onClick={() => router.push('/')} className="rounded-lg flex items-center gap-2 text-base px-3"><Settings className="w-5 h-5" /><span>Ayarlar</span></Button>
                        <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="rounded-full">{theme === "dark" ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-purple-600" />}</Button>
                    </div>
                </div>
            </div>
        </header>
        <main className="flex-1 container mx-auto px-4 w-full max-w-5xl flex flex-col gap-4 py-4 overflow-hidden">
            <Card className="flex-1 shadow-2xl border-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl overflow-hidden">
                <ScrollArea className="h-full p-6" ref={scrollAreaRef}>
                    <div className="space-y-8">
                        <div className="p-4 border rounded-2xl shadow-lg bg-gray-50 dark:bg-gray-800/50 flex justify-center items-center max-w-sm mx-auto">
                           <Image src={gradeInfo?.image || ""} alt={`${grade}. Sınıf ${subjectInfo.name} Ders Haritası`} width={800} height={400} className="rounded-lg object-contain" />
                        </div>
                        {messages.map((message) => (
                           <div key={message.id} className={`flex gap-4 ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                               <Avatar className={`w-10 h-10 shadow-lg ${message.role === "user" ? "bg-gradient-to-r from-green-500 to-emerald-600" : "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"}`}>
                                   <AvatarFallback className="text-white text-xs">{message.role === "user" ? userName?.substring(0, 2) : "AI"}</AvatarFallback>
                               </Avatar>
                               <div className={`flex-1 max-w-[75%]`}>
                                   <div className={`inline-block p-4 rounded-2xl shadow-md ${message.role === "user" ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-br-lg" : "bg-white dark:bg-gray-800 rounded-bl-lg"}`}>
                                       <p className="whitespace-pre-wrap leading-relaxed text-sm">{message.content}</p>
                                   </div>
                               </div>
                           </div>
                        ))}
                        {isLoading && (
                           <div className="flex gap-4">
                               <Avatar className="w-10 h-10 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 shadow-lg"><AvatarFallback className="text-white text-xs">AI</AvatarFallback></Avatar>
                               <div className="inline-block p-4 rounded-2xl rounded-bl-lg bg-white dark:bg-gray-800 shadow-md">
                                   <div className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" /><span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-150" /><span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-300" /></div>
                               </div>
                           </div>
                        )}
                    </div>
                </ScrollArea>
            </Card>
            <Card className="p-4 shadow-2xl border-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl">
                <form onSubmit={handleSubmit}>
                    <div className="flex gap-3">
                       <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder={`${userName}, merak ettiğin konuyu yaz...`} className="rounded-full flex-1" disabled={isLoading} />
                       <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="rounded-full">{isLoading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <Send className="w-5 h-5" />}</Button>
                    </div>
                </form>
            </Card>
        </main>
    </div>
  )
}