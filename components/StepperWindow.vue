<template>
    <v-stepper-window :model-value="stepValue">
        <v-stepper-window-item value="1">
                <v-banner-text class="text-h6">Какой вид работ необходим?</v-banner-text>
                    <v-radio-group v-model="selectStepOne" class="d-flex align-center flex-column">
                        <v-card 
                            hover
                            elevation="10"
                            variant="tonal"
                            v-for="item in itemsForStepperService"
                            :key="item.id"
                            class="w-100"
                        >
                            <v-img class="stepper-img":src="item.img"/>
                            <v-radio
                                @click.stop="stepperStore.updateSelectStepOne(selectStepOne)"
                                :value="item.id"
                                :label="item.label"
                                :class="selectStepOne===item.id ? 'index-card-checkbox' : '' "
                            >  
                            </v-radio>
                            <v-btn class="rounded-t-0 rounded-b" color="#43A047">Подробнее</v-btn>
                        </v-card>
                    </v-radio-group>
        </v-stepper-window-item>
        <v-stepper-window-item value="2">
            <v-row>
                <v-col>
                <v-radio-group v-model="selectStepTwo" class="d-flex align-center flex-column">
                    <v-card 
                        v-for="item in itemsService[selectStepOne-1]"
                        :key="item.id"
                        hover
                        elevation="10"
                        variant="tonal"
                        class="w-100"
                    >
                        <v-img :src="item.img"/>
                        <v-radio
                            :value="item.id"
                            :label="item.label"
                            @click.stop="stepperStore.updateSelectStepTwo(selectStepTwo)"
                            :class="selectStepTwo===item.id ? 'index-card-checkbox' : '' "
                        >
                        </v-radio>
                        <v-btn class="rounded-t-0 rounded-b" color="#43A047">Подробнее</v-btn>
                    </v-card>
                </v-radio-group>
                </v-col>
            </v-row>
        </v-stepper-window-item>
        <v-stepper-window-item value="3">
            <v-container>
                <v-banner-text>Мы работаем по всему Плесецкому району (от Самодеда до Кенозеро)</v-banner-text>
                <v-autocomplete
                    v-model="selectStepThree.city"
                    :items="itemsArea"
                    label="Населённый пункт"
                    hide-no-data
                    @update:search="(event) => stepperStore.listArea(event)"
                ></v-autocomplete>
                <v-text-field
                    v-model="selectStepThree.street"
                    label="Адрес: улица, дом (кв.)"
                >
                </v-text-field>
                <v-banner-text class="stepper-caption text-caption">Удалённость от Плесецка влияет на стоимость</v-banner-text>
            </v-container>


        </v-stepper-window-item>
        <v-stepper-window-item value="4">
            <v-container>
                <div v-if="loading" class="v-loading-progress">
                    <v-progress-circular
                        indeterminate
                        color="primary"
                    ></v-progress-circular>
                </div>

                <InputPhone></InputPhone>

                <v-text-field
                    label="Как к вам обращаться?"
                    placeholder="Иванов Иван Иванович"
                    type="text"
                    v-model="selectStepFour.fullName"
                >
                    
                </v-text-field>

                <v-banner-text>
                    Нажимая на кнопку "Отправить", вы соглашаетесь с  <NuxtLink to="/privacy">политикой конфидициальности.</NuxtLink> 
                </v-banner-text>
            </v-container>

        </v-stepper-window-item>
    </v-stepper-window>
</template>

<script setup>
import { useStepperStore } from '@/stores/stepperStore';
import { storeToRefs } from 'pinia';

const stepperStore = useStepperStore();
const {
    loading,
    selectStepOne, 
    selectStepTwo,
    selectStepThree,
    selectStepFour,
    itemsForStepperService,
    itemsService,
    itemsArea,
    stepValue,
} = storeToRefs(stepperStore)

</script>

<style lang="scss">
.v-loading-progress{
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 100;
    opacity: .4;
}
.v-container{
    position:relative;
}
.stepper-caption{
    padding: 0 !important;
}
.index-card-checkbox{
    .v-selection-control__input{
        color: green;
    }
}
.v-stepper-window{
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    margin: 0;
}
.v-window{
    .v-col{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}
.v-window__container{
    width: 100%;
}
.v-input__control{
    width: 100%;
    align-items: center;
}
.v-card{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 280px;
    .v-responsive{
        max-height: 180px;
    }
}
.v-img__img--contain{
    object-fit: cover;
}
.v-selection-control__wrapper{
    padding-right: 0.5rem;
}
.stepper-img{
    max-height: 220px;
}
.index-card-checkbox{
    border: 2px solid transparent;
    transition: .5s ease-in-out;
}
.index-card-checkbox-verify{
    border: 2px #8fee69 solid;
}
.v-selection-control{
    padding: .5rem;
    min-height: 60px;
    .v-label{
        font-size: 12px;
        width: 100%;
    }
}
.v-selection-control-group{
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
}
.v-banner-text{
    text-align: center;
    padding-inline-end: 0;
    padding-top: 1rem;
}
.v-label{
    opacity: 1;
}
.v-window-item{
    .v-card-title{
        font-size: 1.2rem;
        white-space: normal;
        text-align: center;
    }
    .v-input__control{
        padding-top: 22px;
    }
}
@media (min-width: 450px) and (max-width: 100vw){
    .v-selection-control-group{
        flex-direction: row;
    }
}
</style>