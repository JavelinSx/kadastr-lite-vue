import { useDisplay } from 'vuetify'
const { width } = useDisplay()

export const widthControl = ref(width)
