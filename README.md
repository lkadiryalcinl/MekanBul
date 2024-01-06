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
- login => "/login" (POST) => kullanıcı emaili ile şifresini body aracılığı ile alıp sistemde bu kullanıcı var ise bir saatlik jwt oluşturur. Bu token sayesinde sistemde belli erişim izinleri verilir.
- register => "/signup" (POST) => kullanıcıdan bilgilerini body aracışığı ile alıp sisteme kayıt eden istek


## Anasayfa
![image](https://github.com/lkadiryalcinl/MekanBul/assets/96176339/2ae48563-dccf-4c34-9992-44cba637c42f)

## Mekan Detayı 
![image](https://github.com/lkadiryalcinl/MekanBul/assets/96176339/8888b978-a38d-4e2c-8f73-29f952dbdb89)

## Giriş Yap Sayfası
![image](https://github.com/lkadiryalcinl/MekanBul/assets/96176339/6611a795-e9d6-41c2-aef0-452bbc3e6291)

## Kayıt Ol Sayfası
![image](https://github.com/lkadiryalcinl/MekanBul/assets/96176339/1e2b1cb7-8c84-42b1-b0ce-7788368c0e97)

## Admin Sayfası
![image](https://github.com/lkadiryalcinl/MekanBul/assets/96176339/4360130b-1a31-4571-aa15-2318bda319ca)

## Admin - Güncelle Sayfası
![image](https://github.com/lkadiryalcinl/MekanBul/assets/96176339/b790e197-c899-4f9f-a071-099a279ef6c9)

## Admin - Yeni Mekan Ekle Sayfası 
![image](https://github.com/lkadiryalcinl/MekanBul/assets/96176339/9e811311-3d3d-4386-a82c-f65ee2919ea4)

