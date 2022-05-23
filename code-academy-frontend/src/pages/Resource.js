import React from 'react'
import '../assets/style/Resource/Resource.scss'
import ResourceCreateBtn from '../components/Resource/ResourceCreateBtn'
import ResourceTable from '../components/Resource/ResourceTable'
function Resource() {
    return (
        <div className='resource'>
            <ResourceCreateBtn />
            <ResourceTable />
        </div>
    )
}

export default Resource
