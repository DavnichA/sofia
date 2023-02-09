export const order_edit = {

    state: {
        order_edit_status: false,
        id_order: 0
    },

    getters: {
        
    },

    mutations: {
        SET_ORDER_EDIT_STATUS: (state, data) => state.order_edit_status = data,
        SET_ORDER_ID: (state, data) => state.id_order = data,
    },

    actions: {
    },
}