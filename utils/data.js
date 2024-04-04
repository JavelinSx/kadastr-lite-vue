import boundares from '../images/services/boundaries.jpg'
import landPlot from '../images/services/landPlot.jpg'
import geo from '../images/services/geo.jpg'
import techPlan from '../images/services/techPlan.jpg'
import zouit from '../images/services/zouit.jpg'

import selected from '../images/services/landPlot/selected.jpg'
import forming from '../images/services/landPlot/forming.jpg'
import chapter from '../images/services/landPlot/chapter.jpg'
import redistribution from '../images/services/landPlot/redistribution.jpg'
import correction from '../images/services/landPlot/correction.jpg'

import techPlanHouse from '../images/services/techPlan/tachplanhouse.jpg'
import act from '../images/services/techPlan/act.webp'
import garage from '../images/services/techPlan/garage.jpg'
import techPlanConstruction from '../images/services/techPlan/techPlanConstruction.jpg'
import techPlanFlat from '../images/services/techPlan/techplanflat.jpg'
import techPlanPart from '../images/services/techPlan/techPlanPart.jpg'

import topo from '../images/services/geo/topo.webp'
import gaz from '../images/services/geo/gaz.jpg'
import ispol from '../images/services/geo/ispol.jpg'
import points from '../images/services/geo/removing points.jpg'

import protectZone from '../images/services/ZOUIT/protectZone.jpg'
import saveZone from '../images/services/ZOUIT/saveZone.jpg'

export const itemsForStepperServiceI = [
    {
        id:1,
        img: landPlot,
        label: 'Кадастровые работы в отношении земельного участка'
    },
    {
        id:2,
        img: techPlan,
        label: 'Кадастровые работы в отношении дома, здания'
    },
    {
        id:3,
        img: zouit,
        label: 'ЗОУИТ'
    },
    {
        id:4,
        img: geo,
        label: 'Геодезические работы'
    },
]

const itemsForLandPlot = [
    {
        id:1,
        img: correction,
        label: 'Уточнение границ земельного участка'
    },
    {
        id:2,
        img: redistribution,
        label: 'Перераспределение земельного участка'
    },
    {
        id:3,
        img: chapter,
        label: 'Раздел, объединение земельных участков'
    },
    {
        id:4,
        img: forming,
        label: 'Формирование земельного участка'
    },
    {
        id:5,
        img: selected,
        label: 'Выдел земельной доли'
    },
]

const itemsForTechPlan = [
    {
        id:1,
        img: techPlanHouse,
        label: 'Технический план дома'
    },
    {
        id:2,
        img: techPlanFlat,
        label: 'Технический план квартиры'
    },
    {
        id:3,
        img: techPlanPart,
        label: 'Технический план части здания'
    },
    {
        id:4,
        img: techPlanConstruction,
        label: 'Технический план сооружения'
    },
    {
        id:5,
        img: garage,
        label: 'Оформление гаража'
    },
    {
        id:6,
        img: act,
        label: 'Акт обследования'
    },

]

const itemsForGeo = [
    {
        id:1,
        img: topo,
        label: 'Топографическая съемка'
    },
    {
        id:2,
        img: ispol,
        label: 'Исполнительная съемка'
    },
    {
        id:3,
        img: points,
        label: 'Вынос точек в натуру'
    },
    {
        id:4,
        img: gaz,
        label: 'Бесплатная газификация'
    }
]

const itemsForZOUIT = [
    {
        id:1,
        img: protectZone,
        label: 'Санитарно-защитные зоны'
    },
    {
        id:2,
        img: saveZone,
        label: 'Охранные зоны'
    },

]

export const itemsAreaI = [
    {
        id: 1,
        name: 'Кенозеро',
    },
    {
        id: 2,
        name: 'Тарасово(Подволочье)',
    },
    {
        id: 3,
        name: 'Конево',
    },
    {
        id: 4,
        name: 'Плесецк',
    },
    {
        id: 5,
        name: 'Савинский',
    },
    {
        id: 6,
        name: 'Мирный',
    },
    {
        id: 7,
        name: 'Обозерская',
    },
    {
        id: 8,
        name: 'Другое',
    },
]

export const itemsServiceI = [ itemsForLandPlot, itemsForTechPlan, itemsForZOUIT, itemsForGeo ]

export const geoFetch = (value) => fetch(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=ebe70017-e91e-47de-820a-8796868cd3e5&geocode=Архангельская+область,+${value}`)
  .then(response => response.json())