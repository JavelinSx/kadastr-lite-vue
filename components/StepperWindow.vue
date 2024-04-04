<template>
    <v-stepper-window :model-value="stepValue">
        <v-stepper-window-item value="1">
                <v-banner-text class="text-h6">Какой вид работ необходим?</v-banner-text>
                    <v-radio-group v-model="selectStepOne" class="d-flex align-center flex-column">
                        <v-card 
                            variant="tonal"
                            v-for="item in itemsForStepperService"
                            :key="item.id"
                            :class=" selectStepOne===item.id ? 'w-100 stepper-card index-card-checkbox index-card-checkbox-verify' : 'w-100 index-card-checkbox' "
                        >
                            <v-img class="stepper-img":src="item.img"/>
                            <v-radio
                                @click.stop="stepperStore.updateSelectStepOne(selectStepOne)"
                                :value="item.id"
                                :label="item.label"
                            >  
                            </v-radio>
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
                        variant="tonal"
                        :class=" selectStepTwo===item.id ? 'w-100 stepper-card index-card-checkbox index-card-checkbox-verify' : 'w-100 index-card-checkbox' "
                    >
                        <v-img :src="item.img"/>
                        <v-radio
                            :value="item.id"
                            :label="item.label"
                            @click.stop="stepperStore.updateSelectStepTwo(selectStepTwo)"
                        >
                        </v-radio>
                    </v-card>
                </v-radio-group>
                </v-col>
            </v-row>
        </v-stepper-window-item>

        <v-stepper-window-item value="3">

            <v-autocomplete
                v-model="selectStepThree"
                :items="itemsArea"
                label="Населённый пункт"
                @update:search="stepperStore.searchArea"
            ></v-autocomplete>

        </v-stepper-window-item>
        <v-stepper-window-item value="4">
            
        </v-stepper-window-item>
        <v-stepper-window-item value="5">
            <v-card title="lorem5">
                <v-card-text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, nam!</v-card-text>
            </v-card>
        </v-stepper-window-item>
    </v-stepper-window>
</template>

<script setup>
import {watch} from 'vue'
import { useStepperStore } from '@/stores/stepperStore';
import { storeToRefs } from 'pinia';
const stepperStore = useStepperStore();
const {
    selectStepOne, 
    selectStepTwo,
    selectStepThree,
    selectStepFour,
    itemsForStepperService,
    itemsService,
    itemsArea,
    stepValue,
    stepThreeInput
} = storeToRefs(stepperStore)
const test = (v) => console.log(v)
watch(selectStepThree, () => {
    console.log(selectStepThree.value)
})
watch(selectStepOne, () => {
    stepperStore.toggleButtonNext()
})
</script>

<style lang="scss">
.v-window{
    .v-col{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}
.v-selection-control__wrapper{
    padding-right: 0.5rem;
}
.stepper-img{
    max-height: 300px;
}
.stepper-card{
    margin-bottom: .5rem;
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
}
.v-selection-control-group{
    gap: .5rem;
}
.v-banner-text{
    text-align: center;
    padding-inline-end: 0;
    margin-bottom: 1.5rem;
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
</style>