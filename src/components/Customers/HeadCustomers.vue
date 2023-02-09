<template>
    <div class="d-flex">

        <!-- 👻 Add order 👻 -->
        <v-tooltip text="Add Customer" location="top" offset="0">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" icon="mdi-account-plus" :flat="true" color="success"/>
            </template>
        </v-tooltip>

        <div class="flex-grow-1"/>
    </div>
</template>

<script>
    export default {
        name: 'HeadCustomers',

    }
</script>