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
    import TestContent from "./TestContent"

    export default {
        name: 'Content',

        components: {
            TestContent
        },

        data() {
            return {
                current_tab: 'One',
                tabs: ['One Content', 'Two Content', 'Three Content', 'Four Content', 'Five Content']
            }
        },

        computed: {
            activeTab() {
                switch(this.current_tab) {
                    case 'One Content':
                        return 'TestContent';
                    case 'Two Content':
                        return 'TestContent';
                    case 'Three Content':
                        return 'TestContent';
                    case 'Four Content':
                        return 'TestContent';
                    case 'Five Content':
                        return 'TestContent';
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
