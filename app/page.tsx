"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { subjectsData } from "@/app/lib/data";
import Image from "next/image"; // Image bileşenini import etmeyi unutmuyoruz

export default function SettingsPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [grade, setGrade] = useState<number | null>(null);
    const [subject, setSubject] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleContinue = () => {
        if (!name.trim() || !grade || !subject) {
            setError("Sohbete başlamadan önce lütfen tüm alanları doldur.");
            return;
        }
        const formattedName = name.trim().charAt(0).toUpperCase() + name.trim().slice(1);
        localStorage.setItem('chatbot_user_name', formattedName);
        localStorage.setItem('chatbot_user_grade', grade.toString());
        localStorage.setItem('chatbot_user_subject', subject);
        localStorage.removeItem('chatbot_session_id');
        router.push('/sohbet');
    };

    useEffect(() => {
        const savedName = localStorage.getItem('chatbot_user_name');
        const savedGrade = localStorage.getItem('chatbot_user_grade');
        const savedSubject = localStorage.getItem('chatbot_user_subject');
        if (savedName) setName(savedName);
        if (savedGrade) setGrade(parseInt(savedGrade));
        if (savedSubject) setSubject(savedSubject);
    }, []);

    return (
        // GÜNCELLEME: Ana konteyner 3 sütunlu Flexbox yapısına dönüştürüldü
        <div className="h-screen flex flex-row items-stretch bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-purple-950 dark:to-violet-950">
            
            {/* Sol Sütun (Resim) */}
            <div className="flex-1 relative hidden lg:block">
                <Image
                    src="/resimler/1.1.png"
                    alt="Dekoratif Astronot"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-40 dark:opacity-20"
                />
            </div>
            
            {/* Orta Sütun (Ayarlar Kartı) */}
            <div className="w-full max-w-2xl mx-auto flex items-center justify-center p-4">
                <Card className="w-full shadow-2xl p-6 animate-in fade-in zoom-in-95 duration-500">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                            EMS-AI Öğrenim Asistanına Hoş Geldin!
                        </CardTitle>
                        <CardDescription className="text-lg">
                            Başlamadan önce seni tanıyalım.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8 mt-4">
                        <div className="space-y-2">
                            <h3 className="font-semibold text-xl">1. Adın ne?</h3>
                            <Input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Adını buraya yaz..."
                                className="text-lg p-6 rounded-lg"
                            />
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-semibold text-xl">2. Hangi sınıftasın?</h3>
                            <div className="flex gap-4">
                                {[2, 3, 4].map((g) => (
                                    <Button
                                        key={g}
                                        onClick={() => setGrade(g)}
                                        variant={grade === g ? "default" : "outline"}
                                        className="rounded-lg text-lg flex-1 py-6"
                                    >
                                        {g}. Sınıf
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-semibold text-xl">3. Hangi dersi çalışmak istersin?</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {Object.entries(subjectsData).map(([key, value]) => {
                                    const IconComponent = value.icon;
                                    // Sadece 2, 3, 4. sınıflarda olan dersleri göster
                                    if (grade && value.grades[grade as keyof typeof value.grades]) {
                                        return (
                                            <button
                                                key={key}
                                                onClick={() => setSubject(key)}
                                                className={`flex flex-col items-center justify-center gap-2 p-4 border-2 rounded-xl hover:border-purple-500 transition-all duration-200 aspect-square ${subject === key ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/50' : 'border-dashed'}`}
                                            >
                                                <div className="text-purple-500">
                                                    <IconComponent className="w-8 h-8" />
                                                </div>
                                                <span className="font-semibold text-center">{value.name}</span>
                                            </button>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </div>
                        {error && (
                            <Alert variant="destructive">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Uyarı</AlertTitle>
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}
                        <Button onClick={handleContinue} size="lg" className="w-full text-xl py-7 rounded-lg">
                            Sohbete Başla!
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Sağ Sütun (Resim) */}
            <div className="flex-1 relative hidden lg:block">
                <Image
                    src="/resimler/1.2.png"
                    alt="Dekoratif Şekiller"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-40 dark:opacity-20"
                />
            </div>
        </div>
    );
}