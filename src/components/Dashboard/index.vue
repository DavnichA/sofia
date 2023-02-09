<template>
    <div class="dashboard-wrap">
        <ChartMounth/>
    </div>
</template>

<script>
    import ChartMounth from "./ChartMounth"

    export default {
        name: 'Dasboard',

        components: {
            ChartMounth
        },

        data() {
            return {
            }
            
        }

    }
</script>

<style scoped>
    .dashboard-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        overflow-x: auto;
        overflow-y: hidden;
    }

    .dashboard-wrap::-webkit-scrollbar {
        height: 5px;
        width: 5px;
    }

    .dashboard-wrap::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    .dashboard-wrap::-webkit-scrollbar-thumb {
        background: #888;
    }

    .dashboard-wrap::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>
