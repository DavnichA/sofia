<template>
    <div class="d-flex">

        <!-- 👻 Add order 👻 -->
        <v-tooltip text="Add Order" location="top" offset="0">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" icon="mdi-basket-plus" :flat="true" color="success" @click.prevent="status_order = true; id_order = 0"/>
            </template>
        </v-tooltip>

        <div class="flex-grow-1"/>
    </div>
</template>

<script>
    export default {
        name: 'HeadOrders',

        computed: {
            status_order: {
                get() {return this.$store.state.order_edit.order_edit_status},
                set(value) {this.$store.commit('SET_ORDER_EDIT_STATUS', value)}
            },

            id_order: {
                get() {return this.$store.state.order_edit.id_order},
                set(value) {this.$store.commit('SET_ORDER_ID', value)}
            },
        }

    }
</script>