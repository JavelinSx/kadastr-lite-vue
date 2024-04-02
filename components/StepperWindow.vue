<template>
    <v-stepper-window >
        <v-stepper-window-item value="1">
                <v-banner-text class="text-h6">Какой вид работ необходим?</v-banner-text>
                <div class="d-flex align-center flex-column ga-5">
                    <v-card 
                        variant="tonal"
                        v-for="(item) in itemsForStepperService"
                        :key="item.id"
                        :class=" selectedStepperService.includes(item.id) ? 'w-100 index-card-checkbox index-checkbox-verify' : 'w-100 index-card-checkbox' "
                    >
                        <v-img :src="item.img"/>
                        <v-checkbox
                            :label="item.label"
                            @click.stop="toggleStepperService(item.id)"
                        >  
                        </v-checkbox>
                    </v-card>
                </div>
        </v-stepper-window-item>
        <v-stepper-window-item value="2">
            <v-card title="lorem2">
                <v-card-text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, nam!</v-card-text>
            </v-card>
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
import {inject} from 'vue'
import {itemsForStepperService} from '../utils/data'

const selectedStepperService = inject('selectedStepperService')
const isNextDisabled = inject('isNextDisabled')
const totalStep = inject('totalStep')

const toggleStepperService = (id) => {
    const index = selectedStepperService.value.indexOf(id)
    if(index > -1){
        selectedStepperService.value.splice(index, 1)
    } else {
        selectedStepperService.value.push(id)
    }
    if(selectedStepperService.value.length>0){
        isNextDisabled.value=false
    } else {
        isNextDisabled.value=true
    }
}
</script>

<style lang="scss">
.index-card-checkbox{
    border: 2px solid transparent;
    transition: .5s ease-in-out;
}
.index-checkbox-verify{
    border: 2px #8fee69 solid;
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