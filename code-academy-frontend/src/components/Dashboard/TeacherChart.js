import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, Title } from 'chart.js/auto'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
function TeacherChart(props) {
    const GroupData = [
        {
            name: "Graphic Design - UX/UI",
            length: props.design?.length
        },
        {
            name: "Programming",
            length: props.programming?.length
        },
        {
            name: "Digital Marketing",
            length: props.marketing?.length
        },
        {
            name: "System & Network",
            length: props.system?.length
        }

    ]
    

    return (
        <div>
            <div style={{ width: 600 }} className='container teacher-chart mt-5 ms-1'>
                <Pie  data={{
                    labels: GroupData?.map((data) => data.name),
                    datasets: [{
                        label: "Groups",
                        data: GroupData.map((data) => data.length),
                        backgroundColor: ["#6b5b95", "#feb236", "#b5e7a0", "#f7786b"],
                    }],
                }} />
            </div>

        </div>

    )
}

export default TeacherChart
