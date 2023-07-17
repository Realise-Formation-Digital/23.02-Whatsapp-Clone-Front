<template>
    <div :class="sender == ''  ? 'd-flex justify-end' : 'd-flex justify-start'">
        <div class="border rounded-xl rounded-be-0 messageFitContent" >
            <h5 class="pa-3">
                Sender: {{ sender }}
            </h5>
            <div class="px-3">
                {{ body }}
            </div>
            <div class="pa-3 d-flex justify-end">
                <v-chip>
                    {{ ts }}
                </v-chip>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "SingleMessage",
        data: () => {
            return{
                
            }
        },
        props: {
            body: {
                type: String,
                default: 'Hikfsdklfjsdkljfsdjfklsdjklfsfsdfsdfsdfs',
                requaired: false
            },
            sender: {
                type: String,
                default: '',
                requaired: false
            },
            ts: {
                type: Number,
                default: new Date().getTime(),
                requaired: false
            }
        }
    }
</script>
<style scoped> 
.messageFitContent {
    width: fit-content;}
</style>