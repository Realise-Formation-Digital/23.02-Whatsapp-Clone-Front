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
                    {{ todayFormattedDate_FullDateWellLongAndFullTime (ts) }}
                </v-chip>
            </div>
        </div>
    </div>

</template>

<script>
import dayjsMixins from '../mixins/dayjs';
    export default {
        name: "SingleMessage",
        mixins: [dayjsMixins],
        data: () => {
            return{
                
            }
        },
        props: {
            body: {
                type: String,
<<<<<<< HEAD
                default: 'piou piou !',
                requaired: false
=======
                default: 'Hikfsdklfjsdkljfsdjfklsdjklfsfsdfsdfsdfs_messageCodé?',
                required: false
>>>>>>> origin/develop
            },
            sender: {
                type: String,
                default: '',
                required: false
            },
            ts: {
                type: Number,
                default: new Date().getTime(),
                required: false
            }
        }
    }
</script>
<style scoped> 
.messageFitContent {
    width: fit-content;}
</style>