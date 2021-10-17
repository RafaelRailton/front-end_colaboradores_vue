<template>
<div>  
    <div id="nav">
      <Navbar/>
    </div>
    <div>
      
      <Card/>
    </div>
</div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Card from './components/Card.vue'
export default {
  components:{
    Navbar,
    Card
  }
}
</script>
<style lang="scss">

</style>
