<template>
    <v-container class="bg-cyan-lighten-4">
        <v-row class="pa-3 ma-3">
            <v-col justify="start">
                <AvatarComponent  :toyNumber='1' :size="60" rounded="50" group="1" id="avatarShadow" />
            </v-col>
            <v-col justify="end">
                <h3 text-align="center" class="ma-7">
                    User information
                </h3>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>

import AvatarComponent from './AvatarComponent.vue'
export default {
    components: { AvatarComponent },
    props: {
        data: () => {
            return {
                
            }
        },
        methods: {
        },
    }
};
</script>
<style>
#avatarShadow {
    box-shadow: 10px 10px 12px 1px #6c35ba8b;
}
</style>