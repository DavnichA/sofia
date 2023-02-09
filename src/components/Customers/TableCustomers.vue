<template>
    <div class="table-wrap">
        <table>

            <thead>
                <tr>
                    <th class="text-left">Id</th>
                    <th class="text-left">
                        <div>
                            <v-icon icon="mdi-account" class="mr-2" size="small"></v-icon>
                            Name
                        </div>
                    </th>
                    <th class="text-left">
                        <div>
                            <v-icon icon="mdi-phone" class="mr-2" size="small"></v-icon>
                            Phone
                        </div>
                    </th>
                    <th class="text-left">
                        <div>
                            <v-icon icon="mdi-at" class="mr-2" size="small"></v-icon>
                            Email
                        </div>
                    </th>
                    <th class="text-left">
                        <div>
                            <v-icon icon="mdi-calendar-account" class="mr-2" size="small"></v-icon>
                            Birthday
                        </div>
                    </th>
                    <th class="text-left">
                        <div>
                            <v-icon icon="mdi-calendar-month" class="mr-2" size="small"></v-icon>
                            Joining Date
                        </div>
                    </th>
                    <th class="text-center">Actions</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="item in cutomers" :key="item.name">
                    <td>{{ '#'+item.id }}</td>
                    <td>{{ item.first_name + ' ' + item.last_name }}</td>
                    <td>{{ '+1 '+phoneNumber(item.phone) }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.birthday.day+'/'+item.birthday.mounth+'/'+item.birthday.year}}</td>
                    <td>{{ item.joining_day }}</td>
                    <td class="text-center">
                        <v-icon icon="mdi-shopping" class="mr-2" color="success" style="cursor: pointer" @click="openOrdersList(item.id)" v-if="item.orders_list"></v-icon>
                        <v-icon v-else class="mr-2"></v-icon>
                        <v-icon icon="mdi-pencil" class="mr-2" color="info" style="cursor: pointer" @click="editCustomer(item.id)"></v-icon>
                        <v-icon icon="mdi-delete" color="error" style="cursor: pointer" @click="deleteCustomer(item.id)"></v-icon>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <CustomerOrdersList :id="order_list_id"/>
</template>

<script>
    import {mapGetters} from 'vuex';
    import CustomerOrdersList from './CustomerOrdersList'

    export default {
        name: 'TableCustomers',

        data() {
            return {
                order_list_id: 0
            }
        },

        components: {
            CustomerOrdersList
        },

        computed: {
            ...mapGetters({
                cutomers: 'CUSTOMERS_DATA'
            }),

            status_customer: {
                get() {return this.$store.state.customer_edit.customer_modal_status},
                set(value) {this.$store.commit('SET_CUSTOMER_MODAL_STATUS', value)}
            },

            customer_id: {
                get() {return this.$store.state.customer_edit.customer_id},
                set(value) {this.$store.commit('SET_CUSTOMER_ID', value)}
            },

            status_order_list: {
                get() {return this.$store.state.customer_edit.order_list_modal},
                set(value) {this.$store.commit('SET_ORDER_LIST_MODAL', value)}
            },
        },

        methods: {

            deleteCustomer(id) {
                console.log('delete customer '+id)
            },

            editCustomer(id) {
                this.customer_id = id;
                this.status_customer = true;
            },

            openOrdersList(id) {
                this.order_list_id = id;
                this.status_order_list = true;
            },

            phoneNumber(number) {
                let text = String(number)
                return '('+text.slice(0, 3)+') '+text.slice(3, 6)+'-'+text.slice(6)
            }

        }

    }
</script>

<style scoped>
    .table-wrap {
        position: relative;
        max-height: calc(100% - 48px - 58px);
        overflow: auto;
    }

    table {
        position: relative;
        /* border-collapse: collapse; */
        border-spacing: 0;
        width: 100%;
    }

    thead {
        inset-block-start: 0;
        z-index: 5;
        position: sticky;
    }

    th {
        background: #fff;
        z-index: 1;
        border-bottom: 0px !important;
        height: 56px;
        font-weight: 500;
        user-select: none;
        padding: 0 16px;
        transition: height cubic-bezier(0.4, 0, 0.2, 1);
    }

    th>div{
        display: flex;
        align-items: center;
    }

    td {
        border-bottom: thin solid rgba(0,0,0, 0.12);
        height: 52px;
        padding: 0 16px;
        transition: height cubic-bezier(0.4, 0, 0.2, 1);
    }

    tr:first-child>td {
        border-top: thin solid rgba(0,0,0, 0.12);
    }

    .table-wrap::-webkit-scrollbar {
        height: 5px;
        width: 5px;
    }

    .table-wrap::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    .table-wrap::-webkit-scrollbar-thumb {
        background: #888;
    }

    .table-wrap::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    tbody>tr:hover {
        background: rgba(0,0,0, 0.04);
    }
</style>