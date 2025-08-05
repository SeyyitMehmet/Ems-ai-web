import { BookOpen, Calculator, Globe, Languages, FlaskConical, Users, HandHeart } from "lucide-react";

export const subjectsData = {
  "Matematik": {
    name: "Matematik",
    icon: Calculator,
    grades: {
      2: { image: "/resimler/ikinci_sinif/2-mat.png" },
      3: { image: "/resimler/ucuncu_sinif/3-mat.png" },
      4: { image: "/resimler/dorduncu_sinif/4-mat.png" },
    },
  },
  "Hayat Bilgisi": {
    name: "Hayat Bilgisi",
    icon: Globe,
    grades: {
      2: { image: "/resimler/ikinci_sinif/2-hayat.png" },
      3: { image: "/resimler/ucuncu_sinif/3-hayat.png" },
      4: { image: "/resimler/dorduncu_sinif/4-hayat.png" },
    },
  },
  "Türkçe": {
    name: "Türkçe",
    icon: BookOpen,
    grades: {
      2: { image: "/resimler/ikinci_sinif/2-turkce.png" },
      3: { image: "/resimler/ucuncu_sinif/3-turkce.png" },
      4: { image: "/resimler/dorduncu_sinif/4-turkce.png" },
    },
  },
  "İngilizce": {
    name: "İngilizce",
    icon: Languages,
    grades: {
      2: { image: "/resimler/ikinci_sinif/2-ingilizce.png" },
      3: { image: "/resimler/ucuncu_sinif/3-ingilizce.png" },
      4: { image: "/resimler/dorduncu_sinif/4-ingilizce.png" },
    },
  },
  "Fen Bilimleri": {
    name: "Fen Bilimleri",
    icon: FlaskConical,
    grades: {
      3: { image: "/resimler/ucuncu_sinif/3-fen.png" },
      4: { image: "/resimler/dorduncu_sinif/4-fen.png" },
    },
  },
   
  "Din Kültürü ve Ahlak Bilgisi": {
    name: "Din Kültürü ve Ahlak Bilgisi",
    icon: HandHeart,
    grades: {
         4: { image: "/resimler/dorduncu_sinif/4-din.png" },
    },
  },
} as const; // DÜZELTME: Tipleri sabitlemek için 'as const' eklendi.

export const curriculumData = {
  2: {
    "Türkçe": [ "Metnin Konusu", "Ne, Kim, Nerede?", "Başlık Belirleme", "Görsel Okuma", "Metinle İlgili Soruları Yanıtlama", "Metin Türleri", "Hikâye Unsurları", "Cümle Oluşturma", "Cümle Tamamlama", "Olayların Oluş Sırası", "Büyük Harflerin Kullanımı", "Noktalama İşaretleri", "Soru Ekinin Yazımı", "Sözcüğün Anlamı", "Eş Anlamlı Sözcükler", "Zıt Anlamlı Sözcükler", "Harf ve Hece Bilgisi" ],
    "Matematik": [ "Nesnelerin Sayısı", "Sayıları Onluk ve Birlik Gruplara Ayırma", "Nesne Sayısını Tahmin Etme", "Basamak Adları ve Basamak Değerleri", "İleri ve Geriye Doğru Sayma", "Sayı Örüntüleri", "Sayıları Karşılaştırma ve Sıralama", "Onluğa Yuvarlama", "Toplama İşlemi", "Çıkarma İşlemi", "Verilmeyen Toplananı Bulma", "Toplamını Tahmin Etme", "Zihinden Toplama", "Toplama Problemleri", "Çıkarma Problemleri", "Sıvı Ölçme", "Geometrik Cisimler ve Şekiller", "Simetrik Şekiller", "Geometrik Örüntüler", "Çarpma İşlemi", "Bölme İşlemi", "Kesirler", "Zaman Ölçme", "Paralarımız", "Veri Toplama ve Değerlendirme", "Uzunluk Ölçme", "Tartma" ],
    "Hayat Bilgisi": [ "Okulumuzda Hayat", "Evimizde Hayat", "Sağlıklı Hayat", "Güvenli Hayat", "Ülkemizde Hayat", "Doğada Hayat" ],
    "İngilizce": [ "Words", "Friends", "In the Classroom", "Numbers", "Colours", "At the Playground", "Body Parts", "Pets", "Fruits", "Animals" ]
  },
  3: {
    "Türkçe": [ "Harfler Ve Özellikleri", "Anlam Bilgisi", "Adlar (İsimler)", "Ön Adlar (Sıfat)", "Adıllar (Zamir)", "Eylem (Fiil)", "Cümle Çeşitleri", "Büyük Harflerin Kullanıldığı Yerler", "Noktalama İşaretleri", "Metin Türleri" ],
    "Matematik": [ "Doğal Sayılar", "Doğal Sayılarla Toplama İşlemi", "Doğal Sayılarla Çıkarma İşlemi", "Veri Toplama ve Değerlendirme", "Doğal Sayılarla Çarpma İşlemi", "Doğal Sayılarla Bölme İşlemi", "Kesirler", "Zaman Ölçme", "Paralarımız", "Tartma", "Geometrik Cisimler ve Şekiller", "Geometrik Örüntüler", "Geometride Temel Kavramlar", "Uzamsal İlişkiler", "Uzunluk Ölçme", "Çevre Ölçme", "Alan Ölçme", "Sıvı Ölçme" ],
    "Hayat Bilgisi": [ "Okulumuzda Hayat", "Evimizde Hayat", "Sağlıklı Hayat", "Güvenli Hayat", "Ülkemizde Hayat", "Doğada Hayat" ],
    "İngilizce": [ "Greeting", "My Family", "People I Love", "Feelings", "Toys and Games", "My House", "In My City", "Transportation", "Weather", "Nature" ],
    "Fen Bilimleri": [ "Gezegenimizi Tanıyalım", "Beş Duyumuz", "Kuvveti Tanıyalım", "Maddeyi Tanıyalım", "Çevremizdeki Işık ve Sesler", "Canlılar Dünyasına Yolculuk", "Elektrikli Araçlar" ]
  },
  4: {
    "Türkçe": [ "Metnin Konusu ve Ana Fikri", "5N 1K", "Görsel Okuma", "Metin Türleri", "Gerçek ve Hayal Unsurları", "Karşılaştırma Cümleleri", "Neden-Sonuç Cümleleri", "Büyük Harflerin Kullanımı", "Kısaltmaların Yazımı", "Sayıların Yazımı", "'De' ve 'Ki' Bağlaçlarının Yazımı", "Noktalama İşaretleri", "Eş Anlamlı Sözcükler", "Zıt Anlamlı Sözcükler", "Eş Sesli Sözcükler", "Gerçek, Mecaz ve Terim Anlam", "Deyimler ve Atasözleri" ],
    "Matematik": [ "Doğal Sayılar", "Toplama İşlemi", "Çıkarma İşlemi", "Çarpma İşlemi", "Bölme İşlemi", "Kesirler", "Kesirlerle İşlemler", "Zaman Ölçme", "Veri Toplama ve Değerlendirme", "Geometrik Cisimler ve Şekiller", "Geometride Temel Kavramlar", "Uzamsal İlişkiler", "Uzunluk Ölçme", "Çevre Ölçme", "Alan Ölçme", "Tartma", "Sıvı Ölçme" ],
    "Fen Bilimleri": [ "Yer Kabuğu ve Dünya'mızın Hareketleri", "Besinlerimiz", "Kuvvetin Etkileri", "Maddenin Özellikleri", "Aydınlatma ve Ses Teknolojileri", "İnsan ve Çevre", "Basit Elektrik Devreleri" ],
    "Sosyal Bilgiler": [ "Birey ve Toplum", "Kültür ve Miras", "İnsanlar, Yerler ve Çevreler", "Bilim, Teknoloji ve Toplum", "Üretim, Dağıtım ve Tüketim", "Etkin Vatandaşlık", "Küresel Bağlantılar" ],
    "İngilizce": [ "Classroom Rules", "Nationality", "Cartoon Characters", "Free Time", "My Day", "Fun with Science", "Jobs", "My Clothes", "My Friends", "Food and Drinks" ],
    "Din Kültürü ve Ahlak Bilgisi": [ "Günlük Hayattaki Dinî İfadeler", "İslam'ı Tanıyalım", "Güzel Ahlak", "Hz. Muhammed'i Tanıyalım", "Din ve Temizlik" ]
  }
} as const; // DÜZELTME: Tipleri sabitlemek için 'as const' eklendi.


export type SubjectKey = keyof typeof subjectsData;
export type GradeKey = keyof typeof curriculumData;