import React, { useEffect } from 'react'
import Chart from 'chart.js'

const RecievedChart = (props) => {
    const label = props.label;
    const data = props.data;
    const type = props.type;


    useEffect(() => {
        var ctx = document.getElementById('recieve').getContext('2d');
        var recieve = new Chart(ctx, {
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
            <canvas id="recieve" width="400" height="200"></canvas>
    )
}

export default RecievedChart;