<template>
    <v-container >
        <v-layout column>
            <h1 class="title my-3">My Recipes</h1>
            <div v-for="(item, idx) in userRecipes" class="subheading mb-2" :key="idx">
                {{item}}
            </div>
            <v-flex mt-4>
                <v-btn color="primary" to="/menu">Go To Menu</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'About',
    computed: {
        userRecipes() {
            return this.$store.state.userRecipes;
        }
    },
    mounted() {
        this.getRecipes();
    },
    methods: {
        getRecipes() {
            this.$store.dispatch('getUserRecipes');
        }
    }
};
</script>

<style scoped>
</style>
