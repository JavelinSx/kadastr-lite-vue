<template>
    <v-divider  class="border-opacity-75 mt-12" color="white" thickness="2"></v-divider>
    <v-row>
      <v-col :class="`pl-0 d-flex flex-column ${widthControl>500 ? 'justify-center' : 'justify-left'} `">
        <v-container class="">
          <v-container class="text-h4 text-center pb-7 pl-0">Как мы работаем?</v-container>
            <v-timeline side="end">
              <v-timeline-item
                v-for="(item, i) in dataContent"
                :key="i"
                :dot-color="item.color"
                size="large"
                fill-dot
                :icon="item.icon"
                :width="widthControl<600 ? '250' : '500'"
                class="time-line-content-how"
              >
                <template v-if="widthControl>600" v-slot:opposite>
                  <div
                    :class="`pt-1 headline font-weight-bold`"
                    v-text="item.step"
                  ></div>
                </template>

                  <v-expansion-panels>
                    <v-expansion-panel>
                      <v-expansion-panel-title :class="`${ widthControl<500 ? 'text-h6' : 'text-h5'}`"> {{ item.titleContent }}</v-expansion-panel-title>
                      <v-expansion-panel-text>{{ item.content }}</v-expansion-panel-text>
                    </v-expansion-panel>
                  </v-expansion-panels>

              </v-timeline-item>
            </v-timeline>
        </v-container>
        

      </v-col>
      <v-col >
        <v-container >
          <v-container class="text-h4 text-center pb-13">Часто задаваемые вопросы?</v-container>
          <v-container>
            <v-sheet
              v-for="(item, i) in dataQuestion"
              :key="i"
              class="pb-5 time-line-content-sheet-question"
            >
              <v-expansion-panels>
                  <v-expansion-panel>
                    <v-expansion-panel-title :class="`${ widthControl<500 ? 'text-h6' : 'text-h5'}`"> {{ item.title }}</v-expansion-panel-title>
                    <v-expansion-panel-text>{{ item.content }}</v-expansion-panel-text>
                  </v-expansion-panel>
              </v-expansion-panels>
            </v-sheet>
          </v-container>
          
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
    const dataQuestion = [
        {
            title: 'Зачем нужно межевание?',
            content: 'Бывают случаи, когда собственник не знает, проводилось ли межевание его земельного участка или нет. Например, участок был куплен недавно, и данный вопрос не обсуждался при купле-продаже. Также многие ошибочно принимают выезд землеустроителя из местной администрации за межевание. Чтобы точно узнать, соответствуют ли границы участка требованиям законодательства, необходимо получить сведения из единого государственного реестра недвижимости (ЕГРН). Это можно сделать в Кадастровой палате или в МФЦ. Также Вы можете воспользоваться публичной кадастровой картой. Однако, нужно учесть, что земельные участки, границы которых установлены с недостаточной точностью (т. н. “декларированный участок”), также отображаются на публичной кадастровой карте. Данные участки также требуют уточнения! Вы в любое время можете обратиться к нам за получением бесплатной консультации.',
        },
        {
            title: 'Как увеличить участок?',
            content: 'Можно узаконить большую площадь, чем по документу, но не более, чем на предельный минимальный размер для соответствующего разрешенного использования либо на 10%. Это возможно, если границы земельного участка сложились более 15 лет назад. За получением более конкретной информации можете обратиться к нам за бесплатной консультацией.',
        },
        {
            title: 'Кто может быть заказчиком межевания?',
            content: 'Да, заказчиком межевания может быть любое лицо, с которым заключается договор подряда на выполнение кадастровых работ. Но заявление на государственный кадастровый учет и регистрацию прав подает правообладатель объекта недвижимости. Т.е. межевой план в кадастровую палату либо в МФЦ сдает собственник или его представитель по доверенности.',
        },
        {
            title: '',
            content: '',
        },
    ]
</script>

<style lang="scss">
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
    max-width: 240px;
  }
}
.v-timeline-item__body{
    padding-inline-start: 0px !important;
    padding-block-start: 0px;
    width: 100%;
    @media (min-width: 500) and (max-width: 100vw) {
      max-width: 270px;
    }

}
.v-timeline--vertical.v-timeline{
    height: auto;
}
.v-timeline-item__body{

}
.v-expansion-panels {

}
</style>