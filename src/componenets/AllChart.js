import React, { useEffect } from 'react'
import Chart from 'chart.js'

const AllChart = (props) => {

    useEffect((props) => {
        const ctx = document.getElementById("myChart");
        new Chart(ctx, {
            type: "pie",
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            "Red",
                            "Blue",
                            "Yellow",
                            "Green",
                            "Purple",
                            "Orange"
                        ],
                        borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                        borderWidth: 1
                    }
                ]
            }
        });
    });
return (
    <div>
        <canvas id="myChart" width="200" height="200"></canvas>
    </div>
)
}

export default AllChart;
