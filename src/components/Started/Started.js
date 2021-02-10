import { Button } from '@material-ui/core';
import React from 'react'
import './started.css';
function Started() {
    return (
        <div className='started' style={{backgroundImage:`url(https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png)`}}>
            <div className='started__text'>
                <h2><span>Find the <i>talent</i> nedded to <br/>get your business <i>growing.</i></span></h2>
                <Button  variant='outlined'>Get Started</Button>
            </div>
        </div>
    )
}

export default Started
