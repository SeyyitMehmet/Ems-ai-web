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
    "Türkçe": [ "Metnin Konusu", "Ne, Kim, Nerede?", "Başlık Belirleme", "Görsel Okuma", "Metinle İlgili Soruları Yanıtlama", "Metin Türleri", "Hikâye Unsurları", "Cümle Oluşturma", "Cümle Tamamlama", "Olayların Oluş Sırası", "Büyük Harflerin Kullanımı", "Noktalama İşaretleri", "Harfler, Sözcükler ve Cümleler Arasında Uygun Boşluk Bırakma", "Soru Ekinin Yazımı", "Sözcüğün Anlamı", "Eş Anlamlı Sözcükler", "Zıt Anlamlı Sözcükler", "Harf ve Hece Bilgisi" ],
    "Matematik": [ "Nesnelerin Sayısı", "Sayıları Onluk ve Birlik Gruplara Ayırma", "Nesne Sayısını Tahmin Etme", "Basamak Adları ve Basamak Değerleri", "İleri ve Geriye Doğru Sayma", "Sayı Örüntüleri", "Sayıları Karşılaştırma ve Sıralama", "Onluğa Yuvarlama", "Eldeli ve Eldesiz Toplama İşlemi", "Onluk Bozmadan ve Onluk Bozarak Çıkarma İşlemi", "Zihinden Çıkarma İşlemi", "Verilmeyen Toplananı Bulma", "Toplamını Tahmin Etme", "Zihinden Toplama İşlemi", "Toplama İşlemiyle Problem Çözelim", "Çıkarma İşleminin Sonucunu Tahmin Etme", "Toplama ve Çıkarma İşlemleri Arasındaki İlişki", "Eşit İşareti", "Çıkarma İşlemiyle Problem Çözelim", "Sıvı Ölçme", "Şekillerin Kenar ve Köşe Sayıları", "Süslemeler", "Geometrik Cisimlerin Modelleri", "Geometrik Cisimler", "Uzamsal İlişkiler", "Simetrik Şekiller", "Geometrik Örüntüler", "Toplama İşleminden Çarpma İşlelemine", "Çarpma İşlemi", "Çarpma İşlemiyle Problem Çözelim", "Çıkarma İşleminden Bölme İşlemine", "Bölme İşlemi", "Kesirler", "Zaman Ölçme", "Zaman Ölçü Birimleriyle İlgili Problemler", "Paralarımız", "Paralarımızla İlgili Problem Çözelim", "Şekil ve Nesne Grafiği", "Uzunluk Ölçme", "Uzunlukları Ölçmeyle İlgili Problem Çözelim", "Tartma" ],
    "Hayat Bilgisi": [ "Özelliklerim", "Bireysel Farklılıklar", "Planlı Olalım", "Karar Alma Süreçleri", "Okulum", "Özen Gösterelim", "Grup Çalışma Kuralları", "İletişim Kuralım", "Oyun Kuralları", "Paramı Doğru Harcıyorum", "Yakın Akrabalarımız", "Adresimizi Öğrenelim", "Benim Görev ve Sorumluluklarım", "Ailemizde Karar Alma Süreçleri", "Kaynakları Bilinçli Tüketmeliyiz", "Duyarlı Olalım", "Planlı İşlerim", "İstek ve İhtiyaçlarımız", "Sağlıklı Büyüme ve Gelişme", "Dengeli Beslenme", "Görgü Kuralları", "Çevremizi Temiz Tutalım", "Sağlıkla İlgili Kurumlar ve Meslekler", "Mevsimine Uygun Sebze ve Meyve", "Mevsime Göre Giyinelim", "Ulaşım Türleri ve Araçları", "Ulaşım Araçlarıyla Yolculuk", "Trafikte Yardımlaşalım", "Acil Durumlar", "Teknolojik Araç ve Gereçler", "Oyun Oynarken Dikkat Edelim", "Ülkemizin Yeri", "Bayrağımız ve İstiklal Marşımız", "Atatürk de Çocuktu", "Millî Bayramlarımız", "Dinî Bayramlarımız", "Kültürel Miras Ögeleri", "Farklı Kültür ve Yaşam Şekilleri", "Üretim Faaliyetleri", "Bitki ve Hayvanlar", "Hayvanları Sevelim, Bitki Yetiştirelim", "Doğal Unsurlar", "Geri Dönüşüm", "Doğa Olayları", "Doğal Afetler ve Alınacak Önlemler", "Yönler", "Dünya'nın Şekli ve Hareketleri" ],
    "İngilizce": [ "Telling people what we know (Vocabulary)", "Asking someone’s name (What's your name?)", "Greeting and meeting people - 1 (Greetings)", "Greeting and meeting people - 2 (How are you?)", "Giving simple directions (Please)", "Giving and responding to simple instructions - 1 (Imperatives 1)", "Giving and responding to simple instructions - 2 (Imperatives 2)", "Asking for clarification (I'm sorry)", "Expressing and responding to thanks (Thank you)", "Naming numbers (Numbers)", "Naming classroom objects (Vocabulary)", "Expressing quantity - 1 (How many …?)", "Expressing quantity - 2 (There is / There are)", "Making simple inquiries (How old are you?)", "Naming colours - 1 (Colours - 1)", "Naming colours - 2 (Colours - 2)", "Making simple inquiries (What colour is it?)", "Expressing likes and dislikes (Like / Don't like)", "Making simple inquiries (Do you …?)", "Making simple suggestions (Let's …)", "Talking about possessions (My / your)", "Making simple inquiries (What is this?)", "Telling someone what to do (Imperatives)", "Talking about locations of things (Prepositions)", "Making simple inquiries (Where is …?)", "Expressing likes and dislikes - 1 (Vocabulary)", "Expressing likes and dislikes - 2 (Do you …?)", "Telling someone what to do (Imperatives - 1)", "Giving and responding to simple instructions (Imperatives - 2)", "Expressing abilities (Can / Can't)", "Making simple inquiries (Can you …?)" ]
  },
  3: {
    "Türkçe": [ "Harfler Ve Özellikleri", "Anlam Bilgisi", "Adlar (İsimler)", "Ön Adlar (Sıfat)", "Adıllar (Zamir)", "Eylem (Fiil)", "Eylem Kipleri", "Haber Kipleri", "Yapılarına Göre Eylemler", "Cümle Çeşitleri Ve Cümle Yapısı", "Büyük Harflerin Kullanıldığı Yerler", "Noktalama İşaretleri", "Metin Türleri Ve Metinler" ],
    "Matematik": [ "Doğal Sayılar", "Doğal Sayılarla Toplama İşlemi", "Doğal Sayılarla Çıkarma İşlemi", "Veri Toplama ve Değerlendirme", "Doğal Sayılarla Çarpma İşlemi", "Doğal Sayılarla Bölme İşlemi", "Kesirler", "Zaman Ölçme", "Paralarımız", "Tartma", "Geometrik Cisimler ve Şekiller", "Geometrik Örüntüler", "Geometride Temel Kavramlar", "Uzamsal İlişkiler", "Uzunluk Ölçme", "Çevre Ölçme", "Alan Ölçme", "Sıvı Ölçme" ],
    "Hayat Bilgisi": [ "Okulumuzda Hayat", "Evimizde Hayat", "Sağlıklı Hayat", "Güvenli Hayat", "Ülkemizde Hayat", "Doğada Hayat" ],
    "İngilizce": [ "Greeting", "My Family", "People I Love", "Feelings", "Toys and Games", "My House", "In My City", "Transportation", "Weather", "Nature" ],
    "Fen Bilimleri": [ "Dünya’nın Şekli", "Dünya’nın Yapısı", "Duyu Organları Ve Görevleri", "Varlıkların Hareket Özellikleri", "Cisimleri Hareket Ettirme Ve Durdurma", "Maddeyi Niteleyen Özellikler", "Maddenin Hâlleri", "Işığın Görmedeki Rolü", "Işık Kaynakları", "Çevremizdeki Sesler", "Sesin İşitmede ki Rolü", "Çevremizdeki Varlıkları Tanıyalım", "Elektrikli Araç Gereçler", "Elektrik Kaynakları", "Elektriğin Güvenli Kullanımı" ]
  },
  4: {
    "Türkçe": [ "Metnin Konusu", "Ana Fikir/Ana Duygu", "5N 1K", "Başlık Belirleme", "Görsel Okuma", "Metinle İlgili Sorular Sorma ve Soruları Cevaplama", "Hikâye Unsurları", "Metin Türleri", "Metnin Bölümleri", "Gerçek ve Hayal Unsurları", "Karşılaştırma Yapma", "Neden-Sonuç Cümleleri", "Benzetme Cümleleri", "Örneklendirme Cümleleri", "Olayların Oluş Sırası", "Büyük Harflerin Kullanımı", "Kısaltmaların Yazımı", "Sayıların Yazımı ve Romen Rakamları", "'De' ve 'Ki' Bağlaçlarının Yazımı", "Pekiştirmeli Sözcüklerin Yazımı", "Noktalama İşaretleri", "Eş Anlamlı Sözcükler", "Zıt Anlamlı Sözcükler", "Eş Sesli Sözcükler", "Gerçek Mecaz ve Terim Anlam", "Sözcüklerin ve Sözcük Gruplarının Anlamı", "Yabancı Sözcüklerin Yerine Türkçelerini Kullanma", "Deyimler ve Atasözleri" ],
    "Matematik": [ "Doğal Sayılar", "Yüzer ve Biner Sayma", "Bölük, Basamak ve Çözümleme", "Doğal Sayıları Yuvarlama", "Doğal Sayıları Sıralama", "Sayı Örüntüleri", "Toplama İşlemi", "Çıkarma İşlemi", "Zihinden Çıkarma İşlemi", "Toplama İşleminde Tahmin", "Zihinden Toplama", "Toplama İşlemiyle Problem Çözelim", "Çıkarma İşleminde Tahmin", "Çıkarma İşlemiyle Problem Çözelim", "Çarpma İşlemi", "Çarpma İşleminde Çarpanların Sırası", "Zihinden Çarpma", "Çarpma İşleminde Tahmin", "Çarpma İşlemiyle Problem Çözelim", "Bölme İşlemi", "Kısa Yoldan Bölme", "Bölme İşleminde Tahmin", "Çarpma ile Bölme Arasındaki İlşki", "Bölme İşlemiyle Problem Çözelim", "Matematiksel İfadeler", "Basit, Bileşik ve Tam Sayılı Kesir", "Birim Kesir", "Bir Çokluğun Kesir Kadarını Bulma", "Kesirleri Karşılaştırma", "Kesirlerle Toplama ve Çıkarma İşlemi", "Kesir İşlemleriyle Problem Çözelim", "Zamanı Ölçme Birimleri", "Zamanı Ölçme İle İlgili Problem Çözelim", "Sütun Grafiği", "Verilerin Farklı Gösterimi", "Veri Problemleri", "Üçgen, Kare ve Dikdörtgen", "Üçgenlerin Kenar Uzunlukları", "Küp", "Düzlem", "Açılar", "Simetri", "Uzunluk Ölçme", "Uzunlukları Ölçme İle İlgili Problem Çözelim", "Çevre Uzunlukları", "Şekillerin Çevre Uzunluk Problemleri", "Şekillerin Alanı", "Kare ve Dikdörtgenin Alanı", "Kilogram ve Gram", "Ton ve Miligram", "Tartma Birimleri Arasındaki İlişkiler", "Litre ve Mililitre", "Litre ve Mililitre Problemleri" ],
    "Fen Bilimleri": [ "Yer Kabuğunun Yapısı", "Dünya'mızın Hareketleri", "Besinler ve Özellikleri", "Sağlıklı Yaşam", "Kuvvetin Cisimler Üzerindeki Etkileri", "Mıknatısların Uyguladığı Kuvvet", "Maddeyi Niteleyen Özellikler", "Maddenin Ölçülebilir Özellikleri", "Maddenin Hâlleri", "Maddenin Isı Etkisiyle Değişimi", "Saf Madde ve Karışım", "Aydınlatma Teknolojileri", "Geçmişten Günümüze Ses Teknolojileri", "Bilinçli Tüketici", "Basit Elektrik Devreleri" ],
    "Sosyal Bilgiler": [ "Resmî Kimlik Belgemiz", "Yaşadıklarımızın Kronolojik Sıralaması", "Bireysel İlgi, İhtiyaç ve Yetenekler", "Farklılıklarımız", "Aile Tarihimiz", "Millî Kültürümüz", "Geleneksel Çocuk Oyunları", "Millî Mücadele", "Herhangi Bir Yerin Konumu", "Krokinin Hayatımızdaki Yeri", "Doğal ve Beşerî Unsurlar", "Hava Olayları", "Yaşadığımız Yerin Coğrafi Özellikleri", "Doğal Afetler ve Korunma Yolları", "Hayatımızda Teknoloji", "Teknolojik Ürünlerin Mucitleri", "Teknolojik Ürünlerin Zaman İçinde Gelişimi", "Teknolojik Ürünleri Kullanalım", "İstek ve İhtiyaçlarımız", "Ekonomik Faaliyetler", "Bilinçli Tüketici", "Kaynakları Bilinçli Kullanalım", "Çocuk Olarak Haklarımız", "Sorumluluk Alalım", "Sosyal Kulüpler", "Bireysel Özgürlük", "Ülkeleri Tanıyalım", "Türkiye'nin Komşuları ve Türk Cumhuriyetleri", "Kültürel Unsurlar" ],
    "İngilizce": [ "Naming numbers (Numbers 1-50)", "Asking for permission (Can I ...? / May I ...?)", "Making simple requests (Imperatives - 1)", "Telling someone what to do (Imperatives - 2)", "Identifying countries and nationalities (Countries and Nationalities)", "Making simple inquiries (Where are you from?)", "Talking about locations of cities (Where is ...?)", "Expressing ability and inability - 1 (Can / Can't)", "Expressing ability and inability - 2 (Can you ...?)", "Talking about possessions (Possessive adjectives)", "Expressing likes and dislikes (Like / Dislike)", "Making simple inquiries (Do you like ...?)", "Asking for clarification (Asking for clarification)", "Talking about daily routines (Simple Present Tense)", "Making simple inquiries (Questions in Simple Present)", "Telling the time and days (Time and days of the week)", "Giving and responding to simple instructions - 1 (Vocabulary)", "Giving and responding to simple instructions - 2 (Imperatives)", "Making simple inquiries (What is ...?)", "Talking about locations (Prepositions)", "Describing what people do regularly (Jobs)", "Making simple inquiries (Where do you work?)", "Clothes", "Describing the weather - 1 (Weather conditions)", "Describing the weather - 2 (What's the weather like?)", "Expressing basic needs (Needs)", "Making simple requests (May I ...? / Can I ...?)", "Naming the seasons of the year (Seasons)", "Describing people (Descriptions)", "Making simple inquiries (What is he like?)", "Talking about possessions (Have got / Has got)", "Making offers - 1 (Offers)", "Making offers - 2 (Requests)", "Expressing basic needs and feelings - 1 (Foods)", "Expressing basic needs and feelings - 2 (Feelings)", "Making simple inquiries (Are you hungry?)" ],
    "Din Kültürü ve Ahlak Bilgisi": [ "Günlük Hayattaki Dinî İfadeler", "Tekbir ve Salavat", "Sübhâneke Duası ve Anlamı", "İslam'ın İnanç Esasları", "İslam'ın Şartları", "Kur'an-ı Kerim'in İç Düzeni", "Âmentü Duası ve Anlamı", "Güzel Ahlak", "Sevgi ve Saygı", "Fâtiha Suresi ve Anlamı", "Hz. Muhammed'in Doğduğu Çevreyi Tanıyalım", "Hz. Muhammed'in Aile Büyüklerini Tanıyalım", "Hz. Muhammed'in Doğumu, Çocukluk ve Gençlik Yılları", "Hz. Muhammed'in Mekke ve Medine Yılları", "Salli ve Barik Duaları ve Anlamları", "Dinim Temiz Olmamı İstiyor", "Bedenimi ve Elbiselerimi Temiz Tutarım" ]
  }
} as const;

export type SubjectKey = keyof typeof subjectsData;
export type GradeKey = keyof typeof curriculumData;