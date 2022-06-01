import React,{useState} from 'react'
import TermDeleteBtn from './TermDeleteBtn'
import TermEditBtn from './TermEditBtn'
import TermInfoBtn from './TermInfoBtn'


function TermTable(props) {
    let count = 1
    
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className='table-header' scope="col">#</th>
                        <th className='table-header' scope="col">Days</th>
                        <th className='table-header' scope="col">Shift</th>
                        <th className='table-header' scope="col">Settings</th>
                    </tr>
                </thead>
                <tbody>
                    {props.hours.map(hour => (
                        <tr key={hour.id}>
                            <th className='table-header' scope="row">{count++}</th>
                            <td align='center'>{hour.day}</td>
                            <td align='center'>{hour.time}</td>
                            <td className='table-button-area' align='center'>
                                <TermInfoBtn hour={hour} id={props.id} value={hour.id} setId={props.setId} hourDetails={props.hourDetails}/>
                                <TermDeleteBtn id={props.id} value={hour.id} setId={props.setId} deleteHour={props.deleteHour}/>
                                <TermEditBtn setTimeInput={props.setTimeInput} setDayInput={props.setDayInput} time={hour.time} day={hour.day} id={props.id} value={hour.id} setId={props.setId} updateHour={props.updateHour}/>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
            
    )

}

export default TermTable
