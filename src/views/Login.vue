<template>
   <div class="container">
    <Login/>
   </div>
    

</template>

<script>
import Login from '../components/Login.vue'
export default { 
     components: {
    Login
  }
}
</script>

<style>
  .container {
    padding: 1rem;
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: linear-gradient(to left, #5ecddc, #668ae4, #9c54e9, #d63af5);
  }
  @media screen and (min-width: 1216px){
    .container:not(.is-max-desktop) {
    max-width: 100%;
  }
  }

</style>