// app/lib/explanations.ts
// Bu dosya, 2., 3. ve 4. sınıf ders konularının müfredata uygun açıklamalarını içerir.
// Bot, bir konuyu anlatırken buradaki metinleri kaynak olarak kullanacaktır.

export const explanations = {
  2: {
    "Türkçe": {
      "Metnin Konusu": "Metnin konusu, bir hikâyenin veya yazının kalbi gibidir. O olmadan hikâye yaşayamaz. Konuyu bulmak için kendimize şu sihirli soruyu sorarız: 'Bu yazı en çok kimden veya neden bahsediyor?'. Tıpkı bir dedektif gibi metindeki ipuçlarını takip ederek metnin konusunu bulabiliriz.",
      "Hikâye Unsurları": "Her hikâye sihirli bir tarif gibidir ve 5 ana malzemesi vardır: Karakterler (Hikâyedeki kişiler kimler?), Yer (Hikâye nerede geçiyor?), Zaman (Macera ne zaman yaşanıyor?), ve Olay (Karakterlerin başından geçen macera nedir?). Bu 5 malzeme bir araya gelince harika bir hikâye ortaya çıkar!",
      "Başlık Belirleme": "Başlık, hikâyenin kapısındaki isim tabelası gibidir. Bize içeride ne olduğunu kısaca anlatır. Konuyu bulduktan sonra, 'Bu hikâyeye en uygun isim ne olurdu?' diye düşünerek ona en yakışan başlığı bulabiliriz.",
      "Görsel Okuma": "Bazen resimler de bize bir hikâye anlatır. Resimdeki insanların yüz ifadelerine, nerede olduklarına ve ne yaptıklarına bakarak, yazıları okumadan bile orada ne olduğunu anlayabiliriz. Bu, resimlerin dilini çözmektir.",
      "Büyük Harflerin Kullanımı": "Büyük harfler, kelimelerin 'özel' ve 'önemli' olduğunu gösteren bir taç gibidir! Her cümlenin ilk harfi, özel isimler (Zeynep, Ankara, Türkiye gibi), hayvanlara verdiğimiz özel isimler (Karabaş gibi) ve bayram isimleri her zaman büyük harfle başlar.",
      "Noktalama İşaretleri": "Noktalama işaretleri, cümlelere duygu ve anlam katan sihirli yardımcılardır. Nokta cümlenin bittiğini, soru işareti merak ettiğimizi, ünlem ise heyecanımızı gösterir. Virgül kısa bir mola, kesme işareti ise özel isimlerin korumasıdır.",
      "Soru Ekinin Yazımı": "Soru sormamızı sağlayan 'mı, mi, mu, mü' ekleri biraz utangaçtır ve kendilerinden önceki kelimeye asla yapışmazlar, her zaman ayrı dururlar. 'Oyun bitti mi?' derken 'mi' ayrı yazılır.",
      "Eş Anlamlı Sözcükler": "Eş anlamlı sözcükler, farklı kıyafetler giymiş ama aslında aynı kişi olan kelimelerdir. Yazılışları farklıdır ama anlamları tıpatıp aynıdır! Örneğin, 'öğrenci' ile 'talebe', 'hediye' ile 'armağan' gibi.",
      "Zıt Anlamlı Sözcükler": "Zıt anlamlı sözcükler, birbirine tamamen karşıt olan, sanki hiç anlaşamayan kelimelerdir. Biri 'evet' derken diğeri 'hayır' der. 'Sıcak' ile 'soğuk', 'uzun' ile 'kısa' gibi."
    },
    "Matematik": {
      "Onluk ve Birlik Gruplara Ayırma": "Sayıların iki odalı bir evi olur: 'Birlikler Evi' ve 'Onluklar Evi'. Örneğin 34 sayısında, Birlikler Evi'nde 4 tane birlik yaşar. Onluklar Evi'nde ise 3 tane onluk grubu yaşar. Onluklar evindeki 3'ün değeri aslında 30'dur!",
      "Onluğa Yuvarlama": "Onluğa yuvarlama, bir sayının hangi onluk arkadaşına (10, 20, 30...) daha yakın olduğunu bulma oyunudur. Sayının birler basamağı 5'ten küçükse geriye, 5 veya 5'ten büyükse ileriye, bir sonraki onluğa yuvarlanır. Örneğin 23, 20'ye yuvarlanırken; 27, 30'a yuvarlanır.",
      "Sayıları Karşılaştırma ve Sıralama": "Sayıları karşılaştırırken bize 'Aç Timsah' yardım eder. Bu timsah ağzını (< veya > işaretleri) her zaman daha büyük olan sayıya doğru açar çünkü daha çok yemek ister! 45 > 35 gibi. Sayılar eşitse timsah ağzını kapatır (=).",
      "Sayı Örüntüleri": "Sayı örüntüleri, gizli bir kuralı olan sihirli sayı dizileridir. Görevin, bu gizli kuralı keşfeden bir ajan olmak! Mesela 2, 4, 6, 8,... dizisinin gizli kuralı 'ikişer ikişer ileri saymak'tır. Bir sonraki sayı 10 olmalı!",
      "Eldeli Toplama": "Toplama yaparken Birlikler evinde sonuç 10'u geçerse, 10 kişilik bir grup 'onluk paketi' olup yandaki Onluklar Evi'ne misafirliğe gider. İşte bu misafire 'elde var 1 onluk' deriz ve onluklarla beraber toplarız.",
      "Onluk Bozarak Çıkarma": "Çıkarma yaparken birlikler yetmezse, komşu Onluklar Evi'nin kapısını çalar ve bir onluk ödünç isteriz. O bir onluk bizim eve gelince 10 tane birliğe dönüşür ve sayımız büyür. Komşumuzun sayısı ise bir azalır. Buna 'onluk bozma' denir.",
      "Zihinden Toplama": "Zihinden toplama, aklımızla süper hızlı hesap yapmaktır! Mesela 38+7 işlemi için, 38'e 7'den 2 alıp vererek onu 40 yaparız. Geriye 5 kalır. 40+5=45. Ne kadar kolay!",
      "Çarpma İşlemi": "Çarpma, toplamanın hızlı ve havalı yoludur. 4 tane 5'i toplamak yerine (5+5+5+5), '4 kere 5' diyerek aynı sonuca çok daha hızlı ulaşırız.",
      "Bölme İşlemi": "Bölme işlemi, en adil paylaştırma oyunudur! Elimizdeki 12 kurabiyeyi 3 arkadaşımıza eşit olarak paylaştırmaktır. Her birine kaç kurabiye düşeceğini bulmaya bölme denir.",
      "Kesirler": "Bir bütün elmayı iki eş parçaya böldüğümüzde, her bir parçaya 'yarım' deriz. Dört eş parçaya böldüğümüzde ise her birine 'çeyrek' deriz. Kesirler, bir bütünün eş parçalarını gösterir."
    },
    "Hayat Bilgisi": {
      "Bireysel Farklılıklar": "Sınıfımız ve dünyamız rengarenk bir çiçek bahçesi gibidir. Her birimiz farklı bir çiçeğiz. Bazılarımız çok iyi resim çizer, bazılarımız çok hızlı koşar. Bu farklılıklarımız aslında bizim süper güçlerimizdir ve bizi özel yaparlar. Bu yüzden farklılıklara saygı duymalıyız.",
      "Planlı Olalım": "Günü planlamak, o gün için bir hazine haritası çizmeye benzer. Haritamızda 'Ders Çalışma Adası', 'Oyun Oynama Ormanı' ve 'Uyku Dağı' gibi yerler olur. Haritayı takip edersen, günün sonunda tüm görevlerini tamamlamış ve bolca eğlenmiş olursun!",
      "Görgü Kuralları": "Görgü kuralları, insanları mutlu eden sihirli sözcükler ve davranışlardır. 'Lütfen', 'teşekkür ederim', 'özür dilerim' demek, konuşan birinin sözünü kesmemek gibi sihirler kullandığımızda etrafımızdaki herkes kendini daha değerli hisseder.",
      "Kaynakları Bilinçli Tüketmeliyiz": "Dişini fırçalarken suyu kapatmak veya odadan çıkarken ışığı söndürmek, dünyamızın kaynaklarını korumak için yapabileceğimiz kahramanlıklardır.",
      "Acil Durumlar": "Yangın, deprem gibi beklenmedik durumlarda sakin kalmalı ve tek bir sihirli numarayı bilmeliyiz: 112. Bu numarayı aradığında, sana yardım edecek polis, itfaiye veya ambulans hemen yola çıkar."
    },
    "İngilizce": {
      "What's your name?": "Biriyle tanışırken şu diyaloğu kullanırız:\nA: Hello! What's your name? (Merhaba! Senin adın ne?)\nB: My name is Ayşe. (Benim adım Ayşe.)",
      "Imperatives": "Sınıfta bazen basit komutlar duyarız:\nStand up, please. (Lütfen ayağa kalk.)\nSit down, please. (Lütfen otur.)\nOpen your book. (Kitabını aç.)",
      "Numbers and Colours": "Renkleri ve sayıları soralım:\n(Kırmızı bir kalem gösterilir) 'What colour is it?' (Bu ne renk?) -> 'It's red!' (O kırmızı!)\n(Beş parmak gösterilir) 'How many fingers?' (Kaç parmak?) -> 'Five!' (Beş!)",
      "Body Parts": "Vücudumuzun bölümlerini öğrenelim: Touch your head. (Kafana dokun). Touch your shoulders. (Omuzlarına dokun). Point to your nose. (Burnunu göster).",
      "Pets": "Evcil hayvanlar hakkında konuşalım: 'This is a cat.' (Bu bir kedidir). 'Where is the cat?' (Kedi nerede?) 'It is on the table.' (O, masanın üstünde.)",
      "Fruits": "Meyveler hakkında konuşalım: 'This is an apple.' (Bu bir elmadır). 'I like apples.' (Elmaları severim). 'I don't like bananas.' (Muzları sevmem).",
      "At the Playground": "Oyun parkında birini oyuna davet edelim: A: Let's play hide and seek! (Hadi saklambaç oynayalım!) B: Okay! (Tamam!). Veya fikrini soralım: A: Do you like to swing? (Sallanmayı sever misin?) B: Yes, I do. (Evet, severim.)",
      "Can / Can't": "Yapabildiklerimizi ve yapamadıklarımızı söyleyelim: 'I can run.' (Koşabilirim.) 'I can't fly.' (Uçamam.) Soru soralım: 'Can you swim?' (Yüzebilir misin?) Cevap: 'Yes, I can.' veya 'No, I can't.'"
    }
  },
  3: {
    "Türkçe": {
      "Ad (İsim)": "Adlar (isimler), çevremizdeki varlıkları, kişileri ve yerleri tanımamızı sağlayan kelimelerdir. Her şeyin bir adı vardır: 'kedi', 'masa', 'Ayşe', 'park' gibi.",
      "Sıfat (Ön Ad)": "Sıfatlar, isimlerin önüne gelerek onların rengini, durumunu veya şeklini anlatan kelimelerdir. Varlıkları süslerler! 'Kırmızı araba' cümlesindeki 'kırmızı' kelimesi bir sıfattır.",
      "Zamir (Adıl)": "Zamirler, isimlerin yerine geçen kelimelerdir. 'Ali okula gitti' yerine 'O okula gitti' dediğimizde, 'O' kelimesi Ali'nin yerini tutan bir zamirdir.",
      "Eylem (Fiil)": "Eylemler (fiiller), bir iş, oluş veya hareket bildiren kelimelerdir. Cümleyi hareket ettirirler! 'Koşmak', 'zıplamak', 'uyumak', 'okumak' birer eylemdir."
    },
    "Matematik": {
      "Kesirler": "Kesirler, bir bütünün eş parçalara ayrıldığını gösterir. Bir pizzayı 4 eş parçaya ayırıp bir dilimini aldığında, sen pizzanın 1/4'ünü, yani çeyreğini almış olursun.",
      "Zaman Ölçme": "Zamanı ölçmek, planlı olmamıza yardım eder. Bir saatte 60 dakika, bir günde 24 saat vardır. Zamanı bilmek, ne zaman oyun oynayacağımızı, ne zaman uyuyacağımızı planlamamızı sağlar.",
      "Paralarımız": "Para, ihtiyaçlarımızı ve isteklerimizi almak için kullandığımız bir araçtır. Alışveriş yaparken ürünlerin fiyatını toplayıp ne kadar ödeyeceğimizi ve ne kadar para üstü alacağımızı hesaplamayı öğreniriz."
    },
    "Fen Bilimleri": {
      "Dünya’nın Yapısı": "Gezegenimiz Dünya, katmanlardan oluşur. Tıpkı bir şeftali gibi! Şeftalinin çekirdeği Dünya'nın merkezi (Ağır Küre), etli kısmı magma (Ateş Küre) ve ince kabuğu da bizim yaşadığımız yer kabuğudur (Taş Küre).",
      "Beş Duyumuz": "Etrafımızdaki dünyayı beş duyu organımızla anlarız: Gözlerimizle görür, kulaklarımızla duyar, burnumuzla koklar, dilimizle tadar ve derimizle dokunuruz.",
      "Maddenin Halleri": "Maddenin üç hali vardır: katı, sıvı ve gaz. Buz katıdır, eriyince su olur yani sıvılaşır, kaynayınca da buhar olur yani gaz haline geçer. Bu suyun serüveni gibidir!",
      "Basit Elektrik Devreleri": "Bir ampulü yakmak için elektriğin kesintisiz bir yol izlemesi gerekir. Pil (güç kaynağı), kablo (yol) ve ampul bir araya gelerek bu yolu, yani devreyi oluşturur. Anahtar ise bu yolu açıp kapayan bir köprü gibidir."
    },
    "Hayat Bilgisi": {
        "Görev ve Sorumluluklarım": "Evde ve okulda hepimizin görevleri vardır. Odanı toplamak, okul çantanı hazırlamak gibi. Sorumluluklarımızı yerine getirmek, hem kendimize hem de ailemize yardımcı olmaktır ve bizi büyütür.",
        "Güvenli Hayat": "Trafik, kuralları olan büyük bir oyundur. Kırmızı ışık 'DUR', yeşil ışık 'GEÇ' demektir. Her zaman yaya geçidini kullanmalı ve büyüklerimizin elini bırakmamalıyız."
    },
    "İngilizce": {
        "Feelings": "Duygularımızı ifade edelim: 'I am happy' (Mutluyum). 'I am sad' (Üzgünüm). 'Are you happy?' (Mutlu musun?) 'Yes, I am' (Evet, mutluyum).",
        "Weather": "Hava durumunu soralım: 'What's the weather like today?' (Bugün hava nasıl?). Cevap verelim: 'It's sunny' (Hava güneşli). 'It's rainy' (Hava yağmurlu)."
    }
  },
  4: {
    "Türkçe": {
      "5N 1K": "Bir metni tam olarak anlamak için dedektif gibi 5N 1K sorularını sorarız: Kim, Ne, Nerede, Ne zaman, Nasıl ve Neden? Bu soruların cevapları, metnin tüm sırlarını ve iskeletini ortaya çıkarır.",
      "Gerçek ve Hayal Unsurları": "Gerçek unsurlar, dünyamızda olabilecek şeylerdir, örneğin 'Kuşlar ilkbaharda yuva yapar'. Hayal unsurları ise sadece hayal gücümüzde olan şeylerdir, örneğin 'Bulutlar pamuk şekerden yapılmıştı'.",
      "'De' ve 'Ki' Bağlaçlarının Yazımı": "Bu eklerin ayrı mı bitişik mi yazılacağını anlamanın kolay bir yolu var. Cümleden çıkardığımızda anlam bozulmuyorsa, o bir bağlaçtır ve ayrı yazılır. 'Ben de geldim' cümlesinden 'de'yi çıkarınca 'Ben geldim' kalır ve anlamlıdır, demek ki ayrı yazılmalı.",
      "Deyimler ve Atasözleri": "Deyimler ve atasözleri, dilimizin zenginlikleridir. 'Etekleri zil çalmak' dediğimizde, gerçekten eteğinde zil olduğunu değil, birinin çok sevindiğini anlarız. Bu sözler, kısa yoldan derin anlamlar ifade eder."
    },
    "Matematik": {
      "Bölük ve Basamak": "Çok büyük sayıları okumak için onları bölüklere ayırırız. Tıpkı bir apartman gibi! Sağdan başlayarak her üç basamak bir bölüktür: 'Birler Bölüğü', 'Binler Bölüğü' gibi. Bu, 125.468 gibi büyük bir sayıyı okumamızı kolaylaştırır.",
      "Sayı Örüntüleri": "Sayı örüntüleri, gizli bir kuralı olan sayı dizileridir. Görevimiz, bu gizli kuralı keşfetmektir! 27, 31, 35,... dizisinin kuralı '+4'tür. Bu kuralı bilmek, bir sonraki sayının ne olacağını tahmin etmemizi sağlar.",
      "Kesirlerle İşlemler": "Kesirler, bir bütünün parçalarıdır. Tıpkı bir pizzanın dilimleri gibi. Kesirlerle toplama ve çıkarma yapmak, bu dilimleri birleştirmek veya ayırmak gibidir. 'Pizzanın 1/4'ünü yedim, sonra 1/4'ünü daha yedim' demek, toplamda 2/4'ünü, yani yarısını yediğin anlamına gelir."
    },
    "Fen Bilimleri": {
      "Mıknatısların Kuvveti": "Mıknatısların görünmez bir gücü vardır! Zıt kutupları (N-S) birbirini çekerken, aynı kutupları (N-N, S-S) birbirini iter. Mıknatıslar sadece demir gibi belirli maddeleri çekerler, tahtayı veya plastiği çekmezler.",
      "Saf Madde ve Karışım": "Saf madde tek bir şeyden oluşur, su veya tuz gibi. Karışım ise birden fazla maddenin bir araya gelmesidir. Bir salata karışımdır, çünkü içindeki domatesi, salatalığı görebilir ve ayırabilirsin. Şekerli su da bir karışımdır ama şeker suda çözündüğü için göremezsin.",
      "Basit Elektrik Devreleri": "Basit bir elektrik devresi; pil, ampul, kablo ve anahtardan oluşur. Elektriğin akması ve ampulün yanması için devrenin kapalı, yani kesintisiz bir yol olması gerekir. Anahtar bu yolu açıp kapatır."
    },
    "Sosyal Bilgiler": {
      "Sözlü Tarih": "Tarih sadece kitaplarda yazmaz, büyüklerimizin anılarında da yaşar. Dedemizle veya ninemizle onların çocuklukları hakkında konuşmak, yani sözlü tarih çalışması yapmak, geçmişi onların gözünden öğrenmektir.",
      "Kroki": "Kroki, bir yerin kuşbakışı, yani tepeden görünüşünün ölçüsüz çizimidir. Okulumuzun krokisini çizmek, odaların, koridorların yerini basit sembollerle bir harita gibi göstermektir.",
      "Doğal Afetler": "Doğal afetler, deprem, sel gibi doğa olaylarıdır. Bunlara karşı hazırlıklı olmak çok önemlidir. İçinde su, fener, düdük ve ilk yardım malzemeleri olan bir 'Afet ve Acil Durum Çantası' hazırlamak, bu hazırlığın en önemli adımıdır."
    },
    "İngilizce": {
        "Classroom Rules": "Sınıfta kibarca izin isteyelim: 'Can I open the window, please?' (Pencereyi açabilir miyim, lütfen?). 'May I go to the toilet?' (Tuvalete gidebilir miyim?).",
        "Free Time": "Boş zaman aktivitelerini sevmeyi veya sevmemeyi ifade edelim: 'Do you like reading books?' (Kitap okumayı sever misin?). 'Yes, I do' (Evet, severim) veya 'No, I don't' (Hayır, sevmem).",
        "My Friends": "Arkadaşlarımızı tarif edelim: 'He is tall.' (O, uzundur). 'She has got short, curly hair and green eyes.' (Onun kısa, kıvırcık saçları ve yeşil gözleri var).",
        "My Clothes": "Hava durumuna göre ne giydiğimizi söyleyelim: 'What's the weather like?' (Hava nasıl?). 'It's a snowy day. Zeynep is wearing a pink hat and a blue coat.' (Bugün karlı bir gün. Zeynep pembe bir şapka ve mavi bir mont giyiyor)."
    },
    "Din Kültürü ve Ahlak Bilgisi": {
        "Günlük Hayattaki Dinî İfadeler": "Günlük hayatta bazı ifadeler kullanırız. Yemeğe başlarken 'Bismillah', güzel bir şey gördüğümüzde 'Maşallah', bir işi yapmayı umduğumuzda 'İnşallah' deriz.",
        "İslam'ın Şartları": "İslam'ın beş şartı vardır: Kelime-i Şehadet getirmek, Namaz kılmak, Oruç tutmak, Zekât vermek ve Hacca gitmek. Bunları elimizin beş parmağı gibi düşünebiliriz.",
        "Güzel Ahlak": "Güzel ahlak, dürüst, güvenilir, merhametli ve saygılı olmaktır. Peygamberimiz Hz. Muhammed, güvenilir olduğu için 'el-Emin' olarak tanınırdı."
    }
  }
} as const;