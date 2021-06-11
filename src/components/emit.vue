<template>
  <div>
    <button @click="de">按钮</button>
  </div>
</template>

<script>
export default {
data(){
  return{

  }
},
methods:{
  de(){
    this.$emit('btnClick',"123")
  }
},
}
</script>

<style>

</style>