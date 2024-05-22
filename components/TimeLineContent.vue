<template>
    <v-divider  class="border-opacity-75 mt-12" color="white" thickness="2"></v-divider>
    <v-row class="align-start">
      <v-col :class="`d-flex flex-column ${widthControl>500 ? 'justify-center' : 'justify-left'} `">
        <v-container>
          <v-container class="text-h4 text-center pb-7 pl-0">Как мы работаем?</v-container>
            <v-timeline side="end">
              <v-timeline-item
                v-for="(item, i) in dataContent"
                :key="i"
                :dot-color="item.color"
                size="large"
                fill-dot
                :icon="item.icon"
                
                class="time-line-content-how"
              >
                <template v-if="widthControl>600" v-slot:opposite>
                  <div
                    :class="`pt-1 headline font-weight-bold`"
                    v-text="item.step"
                  ></div>
                </template>

                  <v-expansion-panels >
                    <v-expansion-panel>
                      <v-expansion-panel-title :class="`${ widthControl<500 ? 'text-h6' : 'text-h5'}`"> {{ item.titleContent }}</v-expansion-panel-title>
                      <v-expansion-panel-text>{{ item.content }}</v-expansion-panel-text>
                    </v-expansion-panel>
                  </v-expansion-panels>

              </v-timeline-item>
            </v-timeline>
        </v-container>
        

      </v-col>
      
    </v-row>
    
</template>

<script setup>
    import { ref } from 'vue';
    import { useDisplay } from 'vuetify'
    const { width } = useDisplay()

    const widthControl = ref(width)

    const dataContent = [
        {
            step: 'Шаг 1',
            titleContent: 'Консультация',
            content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.',
            color: 'green-lighten-1',
            icon: 'mdi-account-tie'
        },
        {
            step: 'Шаг 2',
            titleContent: 'Заявка',
            content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.',
            color: 'green-darken-1',
            icon: 'mdi-file-document-edit'
        },
        {
            step: 'Шаг 3',
            titleContent: 'Сбор документов',
            content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.',
            color: 'green-darken-2',
            icon: 'mdi-file-document'
        },
        {
            step: 'Шаг 4',
            titleContent: 'Съёмка и обработка',
            content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.',
            color: 'green-darken-3',
            icon: 'mdi-axis-arrow'
        },
        {
            step: 'Шаг 5',
            titleContent: 'Регистрация',
            content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.',
            color: 'green-darken-4',
            icon: 'mdi-book-search'
        },
        {
            step: 'Шаг 6',
            titleContent: 'Оплата',
            content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.',
            color: 'green-darken-4',
            icon: 'mdi-cash'
        },

    ]



</script>

<style lang="scss">
.v-timeline{
  justify-content: center;
}
.time-line-content-sheet-question{
  background: inherit;
  gap: 1rem;
}
.v-timeline-divider{

  padding-right: 1rem;
  @media (min-width: 500) and (max-width: 100vw) {
    padding-top: 4rem;
  }
}
.time-line-content-how{
  .v-timeline-item__body{
    max-width: 270px;
    @media (min-width: 768px) and (max-width: 100vw) {
      max-width: 500px;
    }
  }
}
.v-timeline-item__body{
    padding-inline-start: 0px !important;
    padding-block-start: 0px;
    width: 100%;
    @media (min-width: 500px) and (max-width: 1023px) {
      min-width: 320px;
    }
    @media (min-width: 1024px) and (max-width: 100vw) {
      min-width: 220px;
    }

}
.v-timeline--vertical.v-timeline{
    height: auto;
    grid-template-columns: min-content min-content max-content;
}
.v-timeline-item__body{

}
.v-timeline-item__opposite{
  display: none;
  @media (min-width: 500px) and (max-width: 100vw) {
    display: block;
    min-width: 70px;
  }
}
.v-expansion-panel {
  width: auto;
    @media (min-width: 500px) and (max-width: 100vw) {
      width: 500px;
    }
}
</style>