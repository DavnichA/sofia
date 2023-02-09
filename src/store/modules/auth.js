export const auth = {

    state: {
        nav_menu_status: true,
        search_modal_status: false,
        user_data: {
            initials: 'A.D',
            fullName: 'Andrii Davnich'
        }
    },

    getters: {
        USER_DATA: state => state.user_data,
    },

    mutations: {
        SET_STATUS_NAV: (state, data) => state.nav_menu_status = data,
        SET_SEARCH_MODAL_STATUS: (state, data) => state.search_modal_status = data,
        SET_USER_DATA: (state, data) => state.user_data = data,
    },

    actions: {
    },
}