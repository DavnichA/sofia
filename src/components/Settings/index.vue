<template>
    <div class="tabs-wrap">
        <v-tabs color="primary" v-model="current_tab">
            <v-tab v-for="(tab) in tabs" :key="tab" :value="tab">{{tab}}</v-tab>
        </v-tabs>
    </div>

    <div class="tab-content">
        <keep-alive>
            <component :is="activeTab"/>
        </keep-alive>
    </div>
</template>

<script>
    import TestSetting from "./TestSetting"
    export default {
        name: 'Settings',

        components: {
            TestSetting
        },

        data() {
            return {
                current_tab: 'One',
                tabs: ['One', 'Two', 'Three', 'Four', 'Five']
            }
        },

        computed: {
            activeTab() {
                switch(this.current_tab) {
                    case 'One':
                        return 'TestSetting';
                    case 'Two':
                        return 'TestSetting';
                    case 'Three':
                        return 'TestSetting';
                    case 'Four':
                        return 'TestSetting';
                    case 'Five':
                        return 'TestSetting';
                }
            },
        }


    }
</script>

<style scoped>

    .tabs-wrap {
        position: relative;
        width: 100%;
        overflow-x: auto;
    }
</style>
