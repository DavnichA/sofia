<template>
    <v-dialog v-model="status_search" scrollable absolute @click:outside="status_search = false" width="560" height="700">
        <v-card>

            <!-- 👻 Header modal 👻 -->
            <v-card-title class="d-flex bg-primary align-center py-4">
                <span>Search</span>
                <div class="flex-grow-1"/>
                <v-btn icon="mdi-close" variant="text" size="x-small" @click.prevent="status_search = false"/>
            </v-card-title>

            <!-- 👻 Input Search 👻 -->
            <v-text-field v-model="search_text"
                prepend-inner-icon="mdi-magnify" 
                placeholder="Looking for..." 
                hide-details 
                variant="solo" 
                single-line density="comfortable"
                style="br-0"
                class="flex-grow-0 br-input"/>
            <v-divider></v-divider>
            
            <!-- 👻 List Search 👻 -->
            <v-card-text style="height: 300px;" class="pa-4">

                <!-- 👻 Empty list search 👻 -->
                <div v-if="result_search.length === 0" class="mt-16 pt-16 text-center">
                    <v-icon icon="mdi-text-box-search-outline" class="mb-6 mx-auto" size="x-large" style="font-size: 150px; height: 150px"></v-icon>
                    <br>

                    <v-list-subheader class="d-inline-flex">Your search results will appear here</v-list-subheader>
                    
                </div>

                <!-- 👻 List search items 👻 -->
                <div v-else>
                    <v-list lines="one" >
                        <v-list-item :title="'Item'" 
                            :subtitle="'slkcmlmcldscldsmcl'" 
                            :link="true">
                        </v-list-item>
                    </v-list>
                </div>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>

export default {
    name: 'SearchModal',

    data() {
        return {
            search_text: null,
            result_search: []
        }
    },

    computed: {
        status_search: {
            get() {return this.$store.state.auth.search_modal_status},
            set(value) {this.$store.commit('SET_SEARCH_MODAL_STATUS', value)}
        },
    },
    

    methods: {

    }
}
</script>

<style>
    .br-input .v-field {
        border-radius: 0;
    }
</style>

