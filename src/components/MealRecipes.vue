<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12 sm6 md6 lg4 v-for="(item, idx) in recipes" :key="idx">
                <v-card>
                    <v-responsive>
                        <v-img :src="item.recipe.image"></v-img>
                    </v-responsive>

                    <v-card-text>
                        <div class="title my-5">{{item.recipe.label}}</div>

                        <div class="subheading">Ingredients</div>
                        <ul>
                            <li v-for="(ingredient, i) in item.recipe.ingredientLines" :key="i">{{ingredient}}</li>
                        </ul>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="green" dark @click="orderRecipe(item.recipe)">Order</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'MealRecipes',
    computed: {
        recipes() {
            return this.$store.state.recipes;
        },
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        orderRecipe(item) {
            if (this.isAuthenticated) {
                this.$store.dispatch('addRecipe', item);
            } else {
                this.$router.push('/sign-in');
            }
        }
    }
};
</script>

<style scoped>
</style>
