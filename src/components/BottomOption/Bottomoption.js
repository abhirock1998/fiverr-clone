import React from 'react'
import './bottomoption.css';
function Bottomoption({Icon,title,link}) {
    return (
        <div className='bottomOption'>
            <Icon/>
            <a href={link}>{title}</a>
        </div>
    )
}

export default Bottomoption
