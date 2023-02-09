export const customer_edit = {

    state: {
        customer_modal_status: false,
        customer_id: 0,
        customer_data: {
            id: 1,
            first_name: 'Hanna',
            last_name: 'Gover',
            phone: 123456789,
            email: 'hgover@gmail.com',
            birthday: {
                day: 18,
                mounth: 4,
                year: 1993
            },
            joining_day: '12/10/2014',
            address: {
                address: null,
                unit_apt: null,
                city: null,
                state: null,
                zip: null
            },
            gender: null,
            notice: null,
            avatar_file: null,
            img: null,
            orders_list: true
        },
        order_list_modal: false,
        order_list: []
    },

    getters: {
        CUSTOMER_ORDER_LIST: state => state.order_list,
    },

    mutations: {
        SET_CUSTOMER_MODAL_STATUS: (state, data) => state.customer_modal_status = data,
        SET_CUSTOMER_ID: (state, data) => state.customer_id = data,
        SET_CUSTOMER_DATA: (state, data) => state.customer_data = data,
        SET_ORDER_LIST_MODAL: (state, data) => state.order_list_modal = data,
        SET_ORDER_LIST: (state, data) => state.order_list = data,
    },

    actions: {
    },
}