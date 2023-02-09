<template>
    <v-dialog v-model="status_order_list" persistent scrollable absolute width="550" max-height="98vh">
        <v-card class="scroll-wrap">

            <!-- 👻 Head Modal 👻 -->
            <v-toolbar color="primary" :title="'Customer #' +id +' - Order List'" class="sticky-head"/>

            <div @click="status_order = true">Item lIst</div>

            <v-card-actions class="justify-end sticky-footer" style="margin-top: auto">
                <v-btn variant="flat" color="success" @click="status_order_list = false">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: 'CustomerModal',

        props: {
            id: Number
        },

        computed: {

            ...mapGetters({
                orders_list: 'CUSTOMER_ORDER_LIST'
            }),

            status_order_list: {
                get() {return this.$store.state.customer_edit.order_list_modal},
                set(value) {this.$store.commit('SET_ORDER_LIST_MODAL', value)}
            },

            status_order: {
                get() {return this.$store.state.order_edit.order_edit_status},
                set(value) {this.$store.commit('SET_ORDER_EDIT_STATUS', value)}
            },
        },

        methods: {


        }
    }
</script>

<style scoped>
    .sticky-head {
        inset-block-start: 0;
        position: sticky;
        z-index: 9;
    }

    .sticky-footer {
        inset-block-end: 0;
        position: sticky;
        z-index: 9;
        background-color: #fff;
    }

    .scroll-wrap::-webkit-scrollbar {
        height: 5px;
        width: 5px;
    }

    .scroll-wrap::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    .scroll-wrap::-webkit-scrollbar-thumb {
        background: #888;
    }

    .scroll-wrap::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>
