<template>
    <v-expansion-panel>
        <v-expansion-panel-title>Какой порядок и процедура перераспределения земель</v-expansion-panel-title>
        <v-expansion-panel-text>
            <v-container>
                <ul class="reditribution-order-outer">
                    <li>
                        Вы встречаетесь с собственником участка, с каким хотите изменить границу. Договаривайтесь об изменении границ и составляете соглашение.
                        <p class="pt-6 pb-0">В соглашении указывайте:</p>
                        <v-container>
                            <ul class="reditribution-order-inner">
                                <li>
                                    Паспортные данные. Если собственник юридическое лицо, тогда данные из правоустанавливающих документов.
                                </li>
                                <li>
                                    Кадастровые номера участков, площадь, вид, сведения свидетельства права собственности.
                                </li>
                            </ul>
                        </v-container>

                    </li>
                    <li>
                        Формируйте пакет документов:
                        <v-container>
                            <ul class="reditribution-order-inner">
                                <li>
                                    Выписка ЕГРН, договор купи-продаж или договор дарения.
                                </li>
                                <li>
                                    Документы на постройки расположенные на участке.
                                </li>
                            </ul>
                        </v-container>
                    </li>
                    <li>
                        Обращайтесь к кадастровому инженеру за составлением нового межевого плана.
                    </li>
                    <li>
                        Обращайтесь в Росреестр. Возьмите с собой:
                        <v-container>
                            <ul class="reditribution-order-inner">
                                <li>
                                    Межевой план
                                </li>
                                <li>
                                    Соглашение между собственниками
                                </li>
                            </ul>
                        </v-container>
                    </li>
                </ul>
                <p>
                    В Росреестре напишите заявление о постановки на учёт и регистрации права.
                </p>
                <p>
                    Основанием для перераспределения земельного участка является Соглашение между собственниками земельных участков
                </p>
                <p>
                    Через две недели вы получите выписку из ЕГРН. Выписка подтвердит право собственности и узаконит перераспределение.
                </p>
            </v-container>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>
<style scoped>
p{
    padding-bottom: 10px;
}
.reditribution-order-outer{
    list-style-type: decimal;
}
.reditribution-order-inner{
    list-style-type: circle;
}
</style>