import React, { useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import { useState } from 'react'
import '../../assets/style/Charts/GroupChart.scss'
import { useTranslation } from 'react-i18next';
function GroupChart(props) {
    const { t } = useTranslation();
    const StudentData = [
        {
            name: "Programming",
            length: props.programmingStudents?.length,

        },
        {
            name: "Graphic Design - UX/UI",
            length: props.designStudents?.length,
        },
        {
            name: "Digital Marketing",
            length: props.marketingStudents?.length,
        },
        {
            name: "System & Network",
            length: props.systemStudents?.length,
        },

    ]
    return (
        <div className='container group-chart'>
            <Bar data={
                {
                    labels: StudentData.map((data) => data.name),
                    datasets: [{
                        label: t("Students"),
                        data: StudentData.map((data) => data.length),
                        backgroundColor: ["#6b5b95", "#feb236", "#b5e7a0", "#f7786b"],

                    }]
                }
            } />
        </div>
    )
}

export default GroupChart
