# T.c. Kimlik Numarası Doğrulama Projesi

## Nasıl kurulur

Proje dosyalarını indirdikten sonra terminal ekranından ilgili klasöre erişip **#npm install** komutu yardımı ile kurulumu tamamlayıp **#npm run dev** ile geliştirici modda projenizi çalıştırabilirsiniz.

## Projenin Amacı

Nuxt Kullanarak sunucu tarafında uygulama çalıştırmak ve uygulamaya doğrudan erişimin sağlanamaması.

###  Projenin İşleyişi

nuxt.config.js dosyasında tanımlanan serverMiddleware ile backend tarafında express.roter yardımı ile aynı sunucu içinde api sunucusu ayağa kaldırarak express yardımı ile doğrudan erişimlerin kısıtlanması ve soap modulü ile dışarı sorgu yapılıp axios ile tanımlanan apiye istek gönderip dönen jsona göre client tarafından görünmesi.

### Kullanılan Modüller

* nuxt
* express
* axios
* vue
* vuex
* soap
* body-parser
* bootstrap
* pug
