<template>
    <v-dialog v-model="status_order" persistent scrollable absolute >
        <v-card>
            <v-toolbar color="primary" :title="'Order #'+id"/>

            <v-card-item>
                acsccdsdc
            </v-card-item>

            <v-card-actions class="justify-end" style="margin-top: auto">
                <v-btn variant="flat" color="grey" @click="cancelClick()">Cancel</v-btn>
                <v-btn variant="flat" color="primary" @click="saveOrder()">Save & Close</v-btn>
                <v-btn variant="flat" color="success" @click="saveOrder()">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>

export default {
    name: 'OrderModalEdit',

    data() {
        return {

        }
    },

    computed: {
        status_order: {
            get() {return this.$store.state.order_edit.order_edit_status},
            set(value) {this.$store.commit('SET_ORDER_EDIT_STATUS', value)}
        },

        id: {
            get() {return this.$store.state.order_edit.id_order},
            set(value) {this.$store.commit('SET_ORDER_ID', value)}
        },
    },
    

    methods: {

        cancelClick() {
            this.status_order = false;
        },

        saveOrder() {

        }
    }
}
</script>

<style scoped>
    
</style>

