import React from 'react'
import { Line } from 'react-chartjs-2'
function StudentChart(props) {   

    return (
        <div>
            <div className='container group-chart'>
                <Line data={{
                    labels: props.reports?.map((data) => data.createDate.substring(0,4)),
                    datasets: [{
                        label: "Reports",
                        data: props.reports?.map((data) => data.total),
                        backgroundColor: ["#feb236"],

                    }]
                }} />
            </div>
        </div>
    )
}

export default StudentChart
