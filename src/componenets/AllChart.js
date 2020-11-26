import React, { useEffect } from 'react'
import Chart from 'chart.js'

const AllChart = (props) => {
    const timestamp = props.timestamp;
    const rates = props.rates;
    const type = props.type


    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: type,
            options: {
                legend: {
                    display: false,
                    position: 'right',
                }
            },
            data: {
                labels: timestamp,
                datasets: [{
                    label: 'rate',
                    data: rates,
                    backgroundColor: [
                        'rgba(46, 91, 187, 0.6)',
                    ],
                    // borderColor: [
                    //     'rgba(255, 99, 132, 1)',
                    // ],
                    borderWidth: 1
                }]
            },
        })
    },[timestamp,rates, type]);
    return (
        <div>
            <canvas id="myChart" width="800" height="400"></canvas>
        </div>
    )
}

export default AllChart;
