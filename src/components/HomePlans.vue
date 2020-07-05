<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
                >Available Meal Plans</v-flex
            >
        </v-layout>
        <v-layout row wrap class="meal-plans">
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://res.cloudinary.com/unitech-global-resource/image/upload/v1593909056/Ewa-agoyin_vyq1kx.jpg"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >Ewa Goin</span >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Ewa AGoin</h3>
                            <div>
                            Growing up, the combination of Ewa Agoyin and the Ewa Agoyin sauce served with it had to be the best thing that ever happened to my beans diet. 
                            Remember how I used to listen out for the hawkers every weekend, food bowl at the ready….good times?.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn
                            outline
                            block
                            color="green"
                            @click="showRecipes('keto')"
                            data-cy="plansKetoBtn"
                        >
                            Select This Plan</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://res.cloudinary.com/unitech-global-resource/image/upload/v1593909441/download_1_ijax9a.jpg"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >Okro Soup</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Okro Soup</h3>
                            <div>
                            Unlike ogbono soup and Ewedu soup, Okro soup has a viscous texture and tatse which makes it one of my favorite soups. It is a thick delicious, 
                            and hearty soup made from the Wild mango seeds, and it has a ton of nutritional benefits.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn
                            outline
                            block
                            color="green"
                            @click="showRecipes('paleo')"
                            data-cy="plansPaleoBtn"
                        >
                            Select This Plan</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://res.cloudinary.com/unitech-global-resource/image/upload/v1593909476/Nigerian-Chicken-Stew-Red-Tomato-Stew-4_1_jhtlzd.jpg"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >Rice and Stew</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Rice and Stew</h3>
                            <div>
                            The Nigerian White Rice and Stew is a popular Nigerian rice recipe because it lets you eat rice with any stew or sauce of your choice. 
                            This rice recipe is usually eaten with Beef and/or Chicken Stew
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn
                            outline
                            block
                            color="green"
                            @click="showRecipes('vegan')"
                            data-cy="plansVeganBtn"
                        >
                            Select This Plan</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomePlans',
    methods: {
        showRecipes(plan) {
            this.$store.dispatch('getRecipes', plan);
        }
    }
};
</script>

<style scoped></style>
