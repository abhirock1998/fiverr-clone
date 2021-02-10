import React from 'react'
import './footer.css';
import {Categories,About,Support,Community} from '../../utils/footerContent';
import FooterOption from '../FooterOption/FooterOption'
function Footer() {
    return (
        <div className='footer'>
            <FooterOption option={Categories}/>
            <FooterOption option={About}/>
            <FooterOption option={Support}/>
            <FooterOption option={Community}/>
            <FooterOption option={Categories}/>
        </div>
    )
}

export default Footer
