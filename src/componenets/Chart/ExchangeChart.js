import React, { useEffect } from 'react'
import Chart from 'chart.js'

const ExchangeChart = (props) => {
    const label = props.label;
    const data = props.data;
    const type = props.type;


    useEffect(() => {
        var ctx = document.getElementById('exchange').getContext('2d');
        var exchange = new Chart(ctx, {
            type: type,
            options: {
                legend: {
                    display: false,
                    position: 'right',
                }
            },
            data: {
                labels: label,
                datasets: [{
                    label: 'rate',
                    data: data,
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
    });
    return (
            <canvas id="exchange" width="400" height="200"></canvas>
    )
}

export default ExchangeChart;
