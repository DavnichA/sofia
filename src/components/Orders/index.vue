<template>
    <HeaderOrder/>
    <TableOrder/>
    <FooterOrder/>
</template>

<script>
    import HeaderOrder from './HeadOrders'
    import TableOrder from './TableOrders'
    import FooterOrder from './FooterOrders'
    

    export default {
        name: 'Orders',

        components: {
            HeaderOrder,
            TableOrder,
            FooterOrder
        },
    }
</script>
