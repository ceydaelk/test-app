# test-app

## Özellikler

- Metin girişi için kullanıcı dostu arayüz
- Anlık metin tersine çevirme
- 100 karakter sınırı kontrolü
- Özel karakter desteği
- Temizleme fonksiyonu
- Kapsamlı test senaryoları

## Teknolojiler

- React Native
- Expo
- Jest
- React Native Testing Library

## Kurulum

1. Projeyi klonlayın:

```bash
git clone [repo-url]
cd test-app
```

2. Bağımlılıkları yükleyin:

```bash
npm install --legacy-peer-deps
```

3. Uygulamayı başlatın:

```bash
npm start
```

## Testler

Uygulamanın test senaryolarını çalıştırmak için:

```bash
npm test
```

### Test Senaryoları

1. Normal metin tersine çevirme
2. Boş metin kontrolü
3. Özel karakterlerin doğru işlenmesi
4. Karakter sınırı kontrolü (100 karakter)
5. Temizleme işlevi kontrolü

## Proje Yapısı

```
test-app/
├── src/
│   ├── components/
│   │   ├── TextInputComponent.tsx
│   │   └── ButtonComponent.tsx
├── tests/
│   └── App.test.js
├── App.tsx
├── package.json
└── README.md
```

## Kullanım

1. Metin giriş alanına istediğiniz metni yazın
2. "Tersine Çevir" butonuna tıklayarak metni tersine çevirin
3. Sonuç ekranda görüntülenecektir
4. "Temizle" butonu ile tüm alanları temizleyebilirsiniz

## Sınırlamalar

- Maksimum 100 karakter giriş yapılabilir
- Boş metin girildiğinde boş sonuç döner

## Geliştirme

1. Yeni özellik eklemek için:

   - İlgili komponenti `src/components` altında oluşturun
   - Gerekli testleri `tests` dizini altında ekleyin
   - Ana uygulamaya (`App.tsx`) entegre edin

2. Test eklemek için:
   - `tests` dizini altında ilgili test dosyasını oluşturun
   - Jest ve React Native Testing Library kullanarak testleri yazın
