<template>
    <div class="d-flex">

        <v-pagination
            v-model="page"
            :length="15"
            :total-visible="7"/>

        <div class="flex-grow-1"/>


        <div class="d-flex" style="width: 100px; align-items: flex-end">
            <v-select v-model="count"
            :items="[50, 100, 150, 200]"
            label="Items per page"
            density="comfortable"
            bg-color="#fff"
            variant="underlined"
            :hide-details="true"/>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'FooterOrder',

        data() {
            return {
                page: 1,
                count: 50
            }
        }

    }
</script>
