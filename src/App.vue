<template>
<div>  
    <div id="nav">
      <Navbar/>
        <router-view></router-view>
    </div>
</div>
</template>
<script>
import Navbar from './components/Navbar.vue'


export default {
  components:{
    Navbar }
}
</script>
<style lang="scss">

</style>
