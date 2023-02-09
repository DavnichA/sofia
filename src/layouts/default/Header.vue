<template>
    <v-app-bar class="px-4">

        <!-- 👻 Logo 👻 -->
        <div class="pa-4 pl-1" v-show="!status_nav">
            <div class="logo">
                <router-link to="/">
                    <img :src="local_logo" style="height: 51px">
                </router-link>
            </div>
        </div>
        
        <!-- 👻 Open/close menu 👻 -->
        <v-app-bar-nav-icon @click="status_nav = !status_nav"/>
        
        <!-- 👻 Search button (open modal) 👻 -->
        <v-btn icon="mdi-magnify" @click="status_search = true" :flat="true"/>

        <div class="flex-grow-1" style="text-align: center; font-weight: 600">
            {{page_name}}
        </div>
        
        <!-- 👻 Chat 👻 -->
        <v-btn icon :flat="true">
            <v-badge color="error" dot>
                <v-icon icon="mdi-chat-outline"/>
            </v-badge>
        </v-btn>

        <!-- 👻 Notification 👻 -->
        <v-btn icon :flat="true">
            <v-badge color="error" dot>
                <v-icon icon="mdi-bell-outline"/>
            </v-badge>
        </v-btn>

        <!-- 👻 User menu 👻 -->
        <v-menu  min-width="200px" rounded>

            <!-- 👻 User avatar 👻 -->
            <template v-slot:activator="{ props }">
                <v-btn icon  v-bind="props" variant="text" class=" pa-0 px-1" style="margin-inline-end: 0px;" :flat="true" :selected-class="'selected-menu'"> 
                    <v-avatar color="brown" size="40">
                        <span>{{ user.initials }}</span>
                    </v-avatar>
                </v-btn>
            </template>

            <v-card>
                <v-card-text>
                    <div class="mx-auto text-center">
                        <v-avatar color="brown">
                            <span>{{ user.initials }}</span>
                        </v-avatar>
                        <h3>{{ user.fullName }}</h3>
                        <p class="text-caption mt-1">
                            {{ user.email }}
                        </p>
                        <v-divider class="my-3"/>
                        <v-btn rounded variant="text"> Edit Account</v-btn>
                        <v-divider class="my-3"/>
                        <v-btn rounded  variant="text"> Disconnect</v-btn>
                    </div>
                </v-card-text>
            </v-card>
        </v-menu>
        
    </v-app-bar>

    <SearchModal v-if="status_search"/>
</template>

<script>
import {mapGetters} from 'vuex';
import SearchModal from '@/components/SearchModal'
import logo from '@/assets/logo.png'

export default {
    name: 'Header',

    components: {
        SearchModal
    },

    data() {
        return {
            local_logo: logo,
        }
    },

    computed: {
        ...mapGetters({
            user: 'USER_DATA'
        }),

        status_nav: {
            get() {return this.$store.state.auth.nav_menu_status},
            set(value) {this.$store.commit('SET_STATUS_NAV', value)}
        },

        status_search: {
            get() {return this.$store.state.auth.search_modal_status},
            set(value) {this.$store.commit('SET_SEARCH_MODAL_STATUS', value)}
        },

        page_name() {
            return this.$route.meta.name
        }
    },


}
</script>

<style scoped>
    
</style>
