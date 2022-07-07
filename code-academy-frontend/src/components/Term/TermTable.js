import React,{useState} from 'react'
import TermDeleteBtn from './TermDeleteBtn'
import TermEditBtn from './TermEditBtn'
import TermInfoBtn from './TermInfoBtn'
import { useTranslation } from 'react-i18next';
import CircularProgress from '@mui/material/CircularProgress';

function TermTable(props) {
    let count = 1
    const { t } = useTranslation();
    return (
        <div>
            {(props.hours.length>0)?<table className="table table-hover">
                <thead>
                    <tr>
                        <th className='table-header' scope="col">#</th>
                        <th className='table-header' scope="col">{t("days")}</th>
                        <th className='table-header' scope="col">{t("shift")}</th>
                        <th className='table-header' scope="col">{t("settings")}</th>
                    </tr>
                </thead>
                <tbody>
                    {props.hours.map(hour => (
                        <tr key={hour.id}>
                            <th className='table-header' scope="row">{count++}</th>
                            <td className='table-header' align='center'>{hour.day}</td>
                            <td className='table-header' align='center'>{hour.time}</td>
                            <td className='table-button-area' align='center'>
                                <TermInfoBtn  details={props.details} id={props.id} value={hour.id} setId={props.setId} hourDetails={props.hourDetails}/>
                                <TermDeleteBtn id={props.id} value={hour.id} setId={props.setId} deleteHour={props.deleteHour}/>
                                <TermEditBtn setTimeInput={props.setTimeInput} setDayInput={props.setDayInput} time={hour.time} day={hour.day} id={props.id} value={hour.id} setId={props.setId} updateHour={props.updateHour}/>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>:<CircularProgress className='circular' color="secondary" />}
            
        </div>
            
    )

}

export default TermTable
