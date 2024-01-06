# MekanBul 

Website : https://mekanbul-fe-kadir-yalcin.vercel.app

## Uygulama Açıklaması

Süleyman Demirel Üniversitesi Bilgisayar Mühendisliği 3.Sınıf 1. Dönem Web Teknolojileri dersi kapsamında geliştirilen bu mekanbul projesi civardaki mekanları bulup listeleyen, kullanıcıların bu mekanları yorumlamasını ve puanlamasını sağlayan bir web sitesidir. Bu web sitesi aynı zamanda bir admin paneli bulunduruyor ve admin panel sayesinde mekanları güncelleyip,silebilir ya da yeni mekan ekleyebiliriz. 

## Kullanılan Teknolojiler
1. Css
2. Javascript
3. Express.js
4. NodeJs
5. MongoDb
6. Mongoose
7. JWT
8. PassportJs

## API istek Yönetimi

http_common.jsx dosyasındaki baseUrl linki: https://mekanbul-api-kadir-yalcin.vercel.app/api bu link sayesinde kod tekrarı yapmadan http istek linklerimizi verebiliriz.

- ListAllVenues => "/admin" (GET) => listedeki tüm elemanları getirir.
- nearbyVenues => "/venues?lat={a}&long={b}" (GET) => listedeki elemanları belirli bir enlem boylama göre getirir.
- getVenue => "/venues/{id}" (GET) => spesifik bir mekanın id'si biliniyor ise o id ye göre veri getirilir.
- addVenue => "/venues" (POST) => link üzerinden değil body üzerinden ekleyeceğimiz yeni mekanın verilerini iletiriz bu sayede  yeni mekanımız veritabanına eklenir.
- updateVenue => "/venues/{id}" (PUT) => bir mekana ait hem yeni veriler body üzerinden iletilmeli aynı zamanda ise güncellenecek olan mekanın id'si verilmelidir bu sayede mekan güncellenir.
- removeVenue => "/venues/{id}" (DELETE) => body kısmında herhangi bir veri iletmemize gerek yoktur id'si bilinen mekan DELETE requesti ile veri tabanından silinir.
- login => "/login" (POST) => kullanıcı emaili ile şifresini alıp sistemde bu kullanıcı var ise bir saatlik jwt oluşturur. Bu token sayesinde sistemde belli erişim izinleri verilir.
- register => "/register" (POST) => kullanıcıdan bilgilerini alıp sisteme kayıt eden istek
