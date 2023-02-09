export const customers = {

    state: {
        customers_data: [
            {
                id: 1,
                first_name: 'Hanna',
                last_name: 'Gover',
                phone: 1234567891,
                email: 'hgover@gmail.com',
                birthday: {
                    day: '18',
                    mounth: '04',
                    year: '1993'
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
                orders_list: false
            },
            {
                id: 2,
                first_name: 'Daniel',
                last_name: 'Kristeen',
                phone: 2344567890,
                email: 'hgover@gmail.com',
                birthday: '18/04/1989',
                birthday: {
                    day: '18',
                    mounth: '04',
                    year: '1989'
                },
                joining_day: '10/09/2014',
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
        ]
    },

    getters: {
        CUSTOMERS_DATA: state => state.customers_data,
    },

    mutations: {
        
    },

    actions: {
    },
}