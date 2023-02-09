<template>
    <div class="chart">
        <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
    export default {
        name: 'ChartMounth',

        data() {
            return {
                series: [
                    {
                        name: 'Net Profit',
                        type: 'column',
                        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
                    }, 
                    {
                        name: 'Revenue',
                        type: 'column',
                        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
                    }, 
                    {
                        name: 'Free Cash Flow',
                        type: 'column',
                        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
                    },
                    {
                        name: '$50,000.00',
                        type: 'line',
                        data: [50,50,50,50,50,50,50,50,50,]
                    }
                ],

                chartOptions: {
                    chart: {
                        type: 'line',
                        height: 350
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: '55%',
                            endingShape: 'rounded'
                        },
                    },
                    dataLabels: {
                        enabled: false,
                        enabledOnSeries: [1]
                    },
                    stroke: {
                        show: true,
                        width: 2,
                        curve: 'smooth',
                    },
                    
                    xaxis: {
                        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                    },
                    yaxis: {
                        title: {
                            text: '$ (thousands)'
                        }
                    },
                    fill: {
                        opacity: 1
                    },
                    tooltip: {
                        y: {
                            formatter: function (val) {
                                return "$ " + val + " thousands"
                            }
                        }
                    }
                },
            }
            
        }

    }
</script>
