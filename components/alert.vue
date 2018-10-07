<template lang="pug">
  div(:class="['mb-4', 'alert', 'alert-'+aCls]" role='alert' v-if="aCls")
    | {{msg}}
</template>
<script>
export default {
  props: [ 'aCls', 'msg' ]
}
</script>