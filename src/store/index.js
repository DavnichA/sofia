import Vuex from "vuex";
import {auth} from "./modules/auth";
import {orders} from "./modules/orders"
import {order_edit} from "./modules/order-edit"
import {customers} from "./modules/customers"
import {customer_edit} from "./modules/customer-edit"

export default new Vuex.Store({
    modules: {
        auth,
        orders,
        order_edit,
        customers,
        customer_edit
    },

});