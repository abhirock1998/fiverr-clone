import React from 'react'
import './bottom.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import LanguageIcon from '@material-ui/icons/Language';
import BottomOption from '../BottomOption/Bottomoption';
function Bottom() {
    return (
        <div className='bottom'>
            <div className='bottom_left'>
                <img src='/images/fiverr.png' alt='fiverr'/>
                <span>		&#169; Fiverr International Ltd. 2020</span>
            </div>
            <div className='bottom_right'>
                <TwitterIcon/>
                <FacebookIcon/>
                <LinkedInIcon/>
                <PinterestIcon/>
                <InstagramIcon/>
             <BottomOption  title='English' Icon={LanguageIcon} />
             <BottomOption title='dollar' Icon={AttachMoneyIcon} />
             <BottomOption Icon={AccessibilityIcon} />
            </div>
        </div>
    )
}

export default Bottom
