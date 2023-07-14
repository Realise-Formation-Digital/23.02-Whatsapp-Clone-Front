<template>
    <v-container class="bg-cyan-lighten-4">
        <v-row cols=12 class="ma-3">
            <v-col justify="start" cols="4">
                <AvatarComponent toyNumber:='1' :size="70" rounded="28" group="1"
                    id="avatarShadow" />
            </v-col>
            <v-col cols="8" justify="end">
                User information
            </v-col>
        </v-row>
    </v-container>
</template>
<script>

import AvatarComponent from './AvatarComponent.vue'


export default {
    components: { AvatarComponent },
    props: {
    },
    data: () => {
        return {
            avatarStyleList: [
                {
                    rows: 3,
                    cols: 6,
                    img: "url('https://user-images.githubusercontent.com/58827166/184355357-0b278997-c163-45cf-a575-19f532b07864.jpg')",
                },
                {
                    rows: 3,
                    cols: 6,
                    img: "url('https://user-images.githubusercontent.com/58827166/184355612-a8b12e00-a815-4456-8892-30836b4d1c2c.jpg')",
                },
            ]

        }
    },
    methods: {


    }
};
</script>
<style>
#avatarShadow {
    box-shadow: 10px 10px 12px 1px #0f1fff8b;
}
</style>