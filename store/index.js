import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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