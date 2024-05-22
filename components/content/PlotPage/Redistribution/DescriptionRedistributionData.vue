<template>
    <v-container class="redistribution-forming-container">
        <v-img :src="redistributionPlot" width="100%" class="rounded"></v-img>
        <div>
            <p>
                Это изменение границ смежных участков с согласия собственников для установления новой границы. Суммарная площадь двух участков при этом не меняется.
            </p>
            <p>
                По сути происходит образование нового земельного участка путем перераспределения, а существование старого прекращается.
            </p>
            <p>
                Перераспределение бывает двух типов, с сохранением площади исходных участков или с изменением, но общий контур двух участков не меняется.
            </p>
        </div>

    </v-container>

</template>
<script setup>
import redistributionPlot from '../images/services/landPlot/redistribution.jpg'
</script>
<style scoped>
p{
    padding-bottom: 20px;
    text-indent: 20px;
}
.redistribution-forming-container{
    display: grid;
    align-content: center;
    @media (min-width: 550px) and (max-width: 100vw){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        gap: 20px;
    }
}
.redistribution-forming-img{
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