<template>
    <HeadCustomers/>
    <TableCustomers/>
    <FooterCustomers/>
</template>

<script>
    import HeadCustomers from "./HeadCustomers"
    import TableCustomers from "./TableCustomers"
    import FooterCustomers from "./FooterCustomers"

    export default {
        name: 'Customers',

        components: {
            HeadCustomers,
            TableCustomers,
            FooterCustomers,
        },
    }
</script>
