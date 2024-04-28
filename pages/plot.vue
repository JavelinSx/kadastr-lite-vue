<template>
    <v-container class="position-relative d-flex flex-column align-center">
        <h1 class="text-h4 pa-8">Межевание или Уточнение границ</h1>
        <v-container class="d-flex flex-column align-center ga-3">
            <h3>Межевание — это процесс юридического оформления границ земельного участка, который включает в себя полное определение границ участка на местности. Этот процесс важен при первоначальном определении границ, при изменении границ участков или при формировании новых участков. Он включает:</h3>
            <v-container :class="`${smAndDown ? 'flex-column' : 'flex-row'} d-flex  ga-5`">
                <v-card
                    v-for="(item, index) in headerListItem.plotList"
                    :key="index"
                >
                    <v-card-title class="gradient-animation title-plot-card">
                        {{ index+1 }}
                    </v-card-title>
                    <v-card-text>
                        {{ item }}
                    </v-card-text>
                </v-card>
            </v-container>
        </v-container>
        <v-container class="d-flex flex-column align-center ga-3">
            <h3>Уточнение границ — это процесс корректировки уже зарегистрированных в кадастре границ. Эта процедура может потребоваться в случаях, когда существующие записи о границах не точны или устарели. Это включает:</h3>
            <v-container :class="`${smAndDown ? 'flex-column' : 'flex-row'} d-flex  ga-5`">
                <v-card
                    v-for="(item, index) in headerListItem.borderList"
                    :key="index"
                >
                    <v-card-title class="gradient-animation title-plot-card">
                        {{ index+1 }}
                    </v-card-title>
                    <v-card-text>
                        {{ item }}
                    </v-card-text>
                </v-card>
            </v-container>
        </v-container>
        <v-container :class="`${smAndDown ? 'flex-column' : 'flex-column'} d-flex ga-5`">
                <h3 class="text-h4 ma-3 text-center">Что мы получаем в итоге?</h3>
                <v-container :class="`d-flex ${smAndDown ? 'flex-column' : 'flex-row'} align-center ga-1`" >
                    <v-card
                        v-for="(item,index) in dataPlotWhy"
                        :key="index"
                        variant="flat"
                        class="ma-2"
                        width="300"
                    >
                        <v-img
                            :src="item.image"
                            height="200"
                        ></v-img>
                        <v-card-title>
                            {{ item.title }}
                        </v-card-title>
                        <v-card-text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam corrupti, repellat quasi praesentium neque provident.
                        </v-card-text>
                    </v-card>
                </v-container>
                <h3 class="text-h4 ma-3 text-center">Какие документы необходимы?</h3>
                <v-container :class="`d-flex ${smAndDown ? 'flex-column' : 'flex-row'} align-center ga-5`">
                    <v-card
                        v-for="(item,index) in dataPlotWhat"
                        :key="index"
                        variant="flat"
                        width="300"
                    >
                        <v-img
                            class="plot-img"
                            :src="item.image"
                            height="200"
                        ></v-img>
                        <v-card-title>
                            {{ item.title }}
                        </v-card-title>
                        <v-card-text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam corrupti, repellat quasi praesentium neque provident.
                        </v-card-text>
                    </v-card>
                </v-container>
                <v-container>
                    <h3 class="text-h4">Все этапы работ</h3>
                <v-timeline density="compact" side="end">
                    <v-timeline-item
                        v-for="(item,index) in dataPlotHow"
                        :key="index"
                        size="large"
                    >
                        <v-expansion-panels>
                            <v-expansion-panel
                                :title="item.title"
                                :text="item.content"
                            >
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-timeline-item>
                </v-timeline>
                </v-container>
        </v-container>
        
    </v-container>
    
</template>

<script setup>
    import why1 from '../images/content/why1.jpg'
    import why2 from '../images/content/why2.jpg'
    import why3 from '../images/content/why3.jpg'
    import what1 from '../images/content/what1.jpg'
    import what2 from '../images/content/what2.webp'
    import what3 from '../images/content/what3.jpeg'

    import { ref } from 'vue';
    import { useDisplay } from 'vuetify'
    const { width, smAndDown } = useDisplay()

    const widthControl = ref(width)

    const headerListItem = {
        plotList: [
            'Проведение геодезических работ: Определение точных координат границ на местности.',
            'Создание межевого плана: Разработка документа, который содержит точное описание границ участка.',
            'Регистрация границ в ЕГРН: Официальное закрепление границ в государственном реестре.'
        ],
        borderList: [
            'Проверку документов и измерений: Анализ текущих записей и физического состояния границ на местности.',
            'Корректировка кадастровых данных: Внесение изменений в кадастр, если найдены расхождения или ошибки.',
            'Согласование изменений с соседями: Уведомление и согласование изменений с собственниками смежных участков, если это необходимо.',
            'Регистрация границ в ЕГРН: Официальное закрепление границ в государственном реестре.'
        ]
    }
    const dataPlotHow = [
    {
        title: 'Подготовка документов',
        content: `Сбор необходимых документов: правоустанавливающие документы на землю (свидетельство о собственности), план территории, кадастровый паспорт, технический паспорт объектов недвижимости, доверенность в случае действия через представителя.`,
        image: '/path/to/image1.jpg'
    },
    {
        title: 'Обращение к кадастровому инженеру',
        content: 'Выбор квалифицированного кадастрового инженера для подготовки необходимой технической документации и выполнения полевых работ. Заключение договора на проведение кадастровых работ.',
        image: '/path/to/image2.jpg'
    },
    {
        title: 'Полевые работы',
        content: 'Кадастровый инженер выполняет полевые измерения для уточнения границ земельного участка. Использование геодезического оборудования для точного замера.',
        image: '/path/to/image3.jpg'
    },
    {
        title: 'Обработка данных и формирование документов',
        content: 'Кадастровый инженер обрабатывает полученные данные и формирует пакет документов для регистрации изменений в кадастре. Подготовка акта об уточнении границ, схемы расположения земельного участка.',
        image: '/path/to/image4.jpg'
    },
    {
        title: 'Регистрация изменений в Росреестре',
        content: 'Подача акта об уточнении границ и сопутствующих документов в Росреестр для официальной регистрации изменений границ земельного участка.',
        image: '/path/to/image5.jpg'
    }
    ];
    const dataPlotWhy = [
        {
            title: 'Защита имущества',
            content: '',
            image: why1
        },
        {
            title: 'Точное определение границ',
            content: '',
            image: why2
        },
        {
            title: 'Регистрация и занесение сведений в ЕГРН',
            content: '',
            image: why3
        },  
    ]
    const dataPlotWhat = [
        {
            title: 'Свидетельство о праве собственности на земельный участок',
            image: what1
        },
        {
            title: 'Паспорт собственника(ов)',
            image: what2
        },
        {
            title: 'СНИЛС собственника',
            image: what3
        },
        {
            title: 'План земельного участка (при наличии)',
            image: why2
        },

    ]

</script>

<style lang="scss">
.title-plot-card{
    height: 50px !important;
}
.v-card-title{
    height: 80px;
    display: flex;
    align-items: center;
    line-height: 1.5rem !important;
}
.v-timeline--vertical.v-timeline{
    height: auto;
}
.v-img{
    .v-img__img{
        object-fit: cover !important;
    }

}
.v-timeline-item__body{
    width: 100%;
}
</style>