<template lang="pug">
    .container.mt-5.p-5
      .row
        form(@:submit.prevent)
          alert(:msg="$store.state.alert.message" :aCls="$store.state.alert.alertClass")
          .form-row
            .col-md-12.mb-3
              h1.h3.mb-3.font-weiget-normal T.C. Kimlik Doğrulama
            .col-md-6.mb-3
              input.form-control(type='text', placeholder='Adınız' v-model="$store.state.data.Ad" required autofocus)
            .col-md-6.mb-3
              input.form-control(type='text', placeholder='Soyadınız' v-model="$store.state.data.Soyad" required)
            .col-md-12.mb-3
              input(type='text' placeholder="T.C Kimlik Numaranız" v-model="$store.state.data.TCKimlikNo" required).form-control
            .col-md-12.mb-3
              input(type='text' placeholder="Doğum Tarihiniz" v-model="$store.state.data.DogumYili" required).form-control
            .col-md-12.mb-3
              button.btn.btn-primary.btn-lg.btn-block(type='button' @click="tcKimlikDogrula") Tc Kimlik Doğrula
</template>

<script>
import alert from '~/components/alert.vue'
export default {
  components:{
    alert
  },
  methods:{
   tcKimlikDogrula(){
    this.$store.dispatch('sorgu');
    }
  }
}
</script>

<style>

</style>