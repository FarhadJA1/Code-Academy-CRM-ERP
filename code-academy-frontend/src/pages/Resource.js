import React,{useState,useEffect} from 'react'
import '../assets/style/Resource/Resource.scss'
import ResourceCreateBtn from '../components/Resource/ResourceCreateBtn'
import ResourceTable from '../components/Resource/ResourceTable'
import axios from "axios"
function Resource() {
    return (
        <div className='resource'>
            <ResourceCreateBtn />
            <ResourceTable />
        </div>
    )
}

export default Resource
