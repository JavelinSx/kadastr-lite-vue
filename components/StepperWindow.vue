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
            <div class="d-flex align-center flex-column ga-5">
                <v-card 
                    variant="tonal"
                    v-for="item in itemsService[selectStepOne-1]"
                    :key="item.id"
                    :class="{'index-card-checkbox-verify': stepperStore.checkSelectOptionStepTwo(item.id), 'w-100 index-card-checkbox': true}"
                >
                    <v-img :src="item.img"/>
                    <v-checkbox
                        v-model="item.defaultValue"
                        :label="item.label"
                        @change="toggleStepperTwo(item.id, item)"
                    >
                    </v-checkbox>
                </v-card>
            </div>
        </v-stepper-window-item>
        <v-stepper-window-item value="3">
            <v-card title="lorem3">
                <v-card-text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, nam!</v-card-text>
            </v-card>
        </v-stepper-window-item>
        <v-stepper-window-item value="4">
            <v-card title="lorem4">
                <v-card-text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, nam!</v-card-text>
            </v-card>
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
    stepValue
} = storeToRefs(stepperStore)

const toggleStepperTwo = (id) => {
    const index = selectStepTwo.value.indexOf(id);
    if (index > -1) {
        selectStepTwo.value.splice(index, 1);
    } else {
        selectStepTwo.value.push(id);
    }
    itemsService.value[id-1].defaultValue = !itemsService.value[id-1].defaultValue

}

watch(selectStepOne, () => {
    stepperStore.toggleButtonNext()
})
</script>

<style lang="scss">

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