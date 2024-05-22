<template>
    <v-container class="plot-forming-container">
        <v-img :src="formingImg" width="100%" class="rounded"></v-img>
        <div>
            <p class="text-body-1 ">
                Образование земельных участков согласно действующему законодательству
                подразумевает постановку этих участков на государственный кадастровый учет.
            </p>
            <p class="text-body-1 ">
                В результате кадастровых работ образуется земельный участок (земельные участки) 
                и части земельного участка (земельных участков). Кадастровый учет подтверждает существование земельного участка 
                с присущими ему свойствами и характеристиками, предоставляющие возможность определить его как индивидуально-определенную вещь.
            </p>
        </div>


        <div class="plot-forming-subdescription">
            <p class="text-body-1 ">
              Характеристики, указанные при формировании земельного участка, в дальнейшем определят его судьбу, 
              налогообложение и разрешенные действия применительно к землепользованию (строительство, прописка). 
              
            </p>
            <p class="text-body-1 ">
                Основные характеристики земельного участка необходимые при образовании земельного участка:
            </p>

            <ul class="pa-4 text-body-1 plot-forming-description-list">
                <li>категория земель</li>
                <li>разрешенное использование</li>
                <li>площадь</li>
                <li>координаты</li>
            </ul>
        </div>

    </v-container>
</template>
<script setup>
import formingImg from '../images/services/landPlot/forming.jpg'

</script>
<style scoped>
p{
    padding-bottom: 20px;
    text-indent: 20px;
    text-align: justify;
    &:last-of-type{
      padding-bottom: 0px;
    }
    @media (min-width:550px) and (max-width:100vw){
      text-align: left;
    }
}
.plot-forming-subdescription{
  grid-column-start: 1;
  grid-column-end: 3;
}
.plot-forming-container{
    display: grid;
    align-content: center;
    @media (min-width: 550px) and (max-width: 100vw){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        gap: 20px;
    }
}
.plot-forming-description{
    text-indent: 40px;
}
.plot-forming-description-list{
    list-style-type: circle;
}
.plot-forming-img{
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