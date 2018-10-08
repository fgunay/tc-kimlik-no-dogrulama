import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function uppercase(v) {
    const letters = { "i": "İ", "ş": "Ş", "ğ": "Ğ", "ü": "Ü", "ö": "Ö", "ç": "Ç", "ı": "I" };
    v = v.replace(/(([iışğüçö]))/g, function(letter){ return letters[letter]; })
    return v.toUpperCase();
}

const store = () => {
    return new Vuex.Store({
      state: () => ({
        alert: {
            message: "",
            alertClass: ""
        },
        data : {
            Ad: '',
            Soyad: '',
            TCKimlikNo: '',
            DogumYili: ''
        }
      }),
      actions:{
        async sorgu(){
            
            this.state.data.Ad = uppercase(this.state.data.Ad);
            this.state.data.Soyad = uppercase(this.state.data.Soyad);

            if(!(this.state.data.Ad == '') && !(this.state.data.Soyad == '') && !(this.state.data.TCKimlikNo == '') && !(this.state.data.DogumYili == '')){
                this.$axios.$post('http://127.0.0.1:3000/api/kimlik-sorgu-api', 
                this.state.data ).then( result => {
                    console.log(result)
                    if(result.result.statusCode===500){
                        this.state.alert.alertClass = "warning"
                        this.state.alert.message = "Lütfen Formu Boş Göndermeyiniz.."     
                    }else if (result.result.TCKimlikNoDogrulaResult==false){
                        this.state.alert.alertClass = "danger"
                        this.state.alert.message = "T.C. Kimlik Numaranız Hatalı"
                    }else if (result.result.TCKimlikNoDogrulaResult==true){
                        this.state.alert.alertClass = "success"
                        this.state.alert.message = "T.C. Kimlik Numaranız Doğru"
                    }
                }).catch(e => console.log(e));
            }else{
                this.state.alert.alertClass = "warning"
                this.state.alert.message = "Lütfen Tüm Alanları Doldurunuz"     
            }
          }
      }
    })
  }
  export default store
