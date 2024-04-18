<template>
    <h1 class="text-center pa-8 text-h4">Как мы работаем с клиентами</h1>
    <v-timeline side="end" align="center">
      <v-timeline-item
        v-for="(item, i) in dataContent"
        :key="i"
        :dot-color="item.color"
        size="small"
      >
        <!-- <template v-slot:opposite>
          <div
            :class="`pt-1 headline font-weight-bold text-${item.color}`"
            v-text="item.step"
          ></div>
        </template> -->
        <div>
          <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${item.color}`">
            {{ item.titleContent }}
          </h2>
          <div>
            {{ item.content }}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
</template>

<script setup>
    const dataContent = [
        {
            step: 'Шаг 1',
            titleContent: 'Консультация',
            content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.',
            color: 'green-lighten-1'
        },
        {
            step: 'Шаг 2',
            titleContent: 'Заявка',
            content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.',
            color: 'green-darken-1'
        },
        {
            step: 'Шаг 3',
            titleContent: 'Сбор документов',
            content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.',
            color: 'green-darken-2'
        },
        {
            step: 'Шаг 4',
            titleContent: 'Съёмка и обработка',
            content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.',
            color: 'green-darken-3'
        },
        {
            step: 'Шаг 5',
            titleContent: 'Регистрация',
            content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.',
            color: 'green-darken-4'
        },
        {
            step: 'Шаг 6',
            titleContent: 'Оплата',
            content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.',
            color: 'green-darken-4'
        },

    ]

</script>

<style lang="scss">

</style>