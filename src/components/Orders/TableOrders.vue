<template>
    <div class="table-wrap">
        <table>
            <thead style="inset-block-start: 0;z-index: 5;">
                <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Calories</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'TableOrders',

        data() {
            return {
                desserts: [
                    {
                        name: 'Frozen Yogurt',
                        calories: 159,
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                    },
                    {
                        name: 'Jelly bean',
                        calories: 375,
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                    },
                ],
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

    tbody>tr {
        cursor: pointer;
    }

    tbody>tr:hover {
        background: rgba(0,0,0, 0.04);
    }
</style>