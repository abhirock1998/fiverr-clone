import React from 'react'
import {Button}from '@material-ui/core'
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import './business.css'
function Business() {
    return (
        <div className='business'>
            <div className='business__left'>
                <div className='business__leftContainer'>
                <img alt=''src='/images/fiverr.png'/> <span className='business__leftContainerBtn'>New</span>
                </div>
               <h2>A business solution<br/>designed for <i>teams</i></h2> 
               <p className='business__leftHeading'>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
               <p><CheckCircleOutlineIcon/>Connect to freelancers with proven business experience</p>
               <p><CheckCircleOutlineIcon/>Get matched with the perfect talent by a customer success manager</p>
               <p><CheckCircleOutlineIcon/>Manage teamwork and boost productivity with one powerful workspace</p>
            <Button className='business__leftExploreBtn' variant='outlined'>Explore FIverr Business </Button>
            </div>
            <div className='business__right'>
                <img src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png' alt='business'/>
            </div>
        </div>
    )
}

export default Business
