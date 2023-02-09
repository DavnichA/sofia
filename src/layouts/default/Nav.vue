<template>
    <v-navigation-drawer :rail="status_nav" 
        :rail-width="75" 
        :floating="true" 
        style="background-color: rgb(29, 34, 40);" 
        class="text-white"
        :class="!status_nav ? 'active-mobile-nav' : ''">

        <div class="links-wrap">
            <v-list class="pa-3" :nav="true" :links="true" >
                <v-list-item v-for="(item, i) in list_data" :key="'list-item-'+i" 
                    :to="item.href" 
                    class="mb-1 rounded-lg" 
                    :active-class="'v-list-item--active'" 
                    :active="activeLink(item.href)"
                    :active-color="'#fff'">

                    <template v-slot:prepend>
                        <v-icon :icon="item.icon" v-if="!status_nav"/>
                        <v-tooltip :text="item.text" v-else>
                            <template v-slot:activator="{ props }">
                                <v-icon v-bind="props" :icon="item.icon"></v-icon>
                            </template>
                        </v-tooltip>
                    </template>

                    <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
            </v-list>
        </div>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'Nav',

    
    data () {
        return {
            list_data: [
                { text: 'Dashboard', icon: 'mdi-view-dashboard' , href: '/'},
                { text: 'Customers', icon: 'mdi-account-multiple' , href: '/customers'},
                { text: 'Orders', icon: 'mdi-shopping', href: '/orders' },
                { text: 'Content', icon: 'mdi-table-of-contents', href: '/content' },
                { text: 'Settings', icon: 'mdi-cog', href: '/settings' },
            ]
        }
    },

    computed: {
        status_nav: {
            get() {return this.$store.state.auth.nav_menu_status},
            set(value) {this.$store.commit('SET_STATUS_NAV', value)}
        },
    },

    methods: {
        activeLink(link) {
            return this.$route.href === link
        }
    }
}
</script>
<style>
    .v-navigation-drawer--temporary.active-mobile-nav {
        transform: translateX(0%) !important;
        width: 275px !important;
    }
</style>
<style scoped>
    .links-wrap {
        position: relative;
        height: calc(100vh - 100px);
        overflow: hidden!important;
        overflow-anchor: none;
        -ms-overflow-style: none;
        touch-action: auto;
        -ms-touch-action: auto;
    }

    .links-wrap .v-list--one-line .v-list-item {
        padding-inline-start: 12px!important;
        padding-left: 12px;
        opacity: .6;
    }

    .links-wrap .v-list--one-line .v-list-item:hover {
        opacity: 1;
    }

    .links-wrap .v-list--one-line .v-list-item--active {
        border-left: 3px solid rgb(var(--v-theme-primary));
        background: transparent;
        opacity: 1;
        padding-left: 5px;
        padding-inline-start: 9px!important;
    }
</style>
