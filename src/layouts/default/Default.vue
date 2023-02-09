<template>
  <v-app style="max-height: 100vh">
    <Header/>
    <Nav/>
    <Main/>
    <CustomerModal/>
    <OrderModalEdit/>
  </v-app>
</template>

<script>
  import Header from './Header.vue';
  import Nav from './Nav.vue'
  import Main from './View.vue'
  import CustomerModal from "@/components/Customers/CustomerModal"
  import OrderModalEdit from '@/components/Orders/OrderModalEdit'

  export default {
    components: {
      Header,
      Nav,
      Main,
      CustomerModal,
      OrderModalEdit
    }
  }
</script>