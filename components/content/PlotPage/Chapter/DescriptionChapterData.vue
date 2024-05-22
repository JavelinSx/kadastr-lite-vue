<template>
    <v-container class="plot-chapter-container">

    </v-container>
</template>
<script>

</script>
<style>
.plot-chapter-container{
    display: grid;
    align-content: center;
    @media (min-width: 550px) and (max-width: 100vw){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        gap: 20px;
    }
}
.plot-chapter-img{
  padding-bottom: 20px;
  max-width: 340px;
  @media (min-width: 550px) and (max-width: 768px){
    min-width: 340px;
  }
  @media (min-width: 769px) and (max-width: 100vw){
    float: left; 
    margin: 0 15px 15px 0; 
    max-width: 80%; 
    min-width: 440px;
  }

}
</style>