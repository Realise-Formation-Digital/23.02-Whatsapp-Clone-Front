<template>
    <v-container fluid align="center" class="Degr">
        <v-row>
            <v-col>
                <router-link to="/" id="titleFont"
                    class="ma-15 pa-15 text-teal-accent-2 text-decoration-none font-weight-thin">Home</router-link>
            </v-col>
            <v-col>
                <router-link to="/login" id="titleFont"
                    class="ma-15 pa-15 text-teal-accent-2 text-decoration-none font-weight-thin">Login</router-link>
            </v-col>
            <v-col>
                <router-link to="/messages" id="titleFont"
                    class="ma-15 pa-15 text-teal-accent-2 text-decoration-none font-weight-thin">Messages</router-link>
            </v-col>
        </v-row>
        <router-view>
        </router-view>
    </v-container>
</template>

<script>
</script>

<style>
.Degr {
    background: radial-gradient(#86f3fffb, #712089ad);
};

#titleFont {
    font-family: 'Poppins', sans-serif;
    font-size: 50px;
};
</style>
