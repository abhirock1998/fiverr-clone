import React from 'react';
import './multinational.css';
function Multinational() {
    return (
        <section className='multiNational'>
            <div className='multiNational__company'>
            <h3>Trusted By :</h3>
<img src='/images/company/facebook.png'  alt='facebook' />
<img src='/images/company/google.png'  alt='google' />
<img src='/images/company/netflix.png'  alt='netflix' />
<img src='/images/company/pg.png'  alt='pg' />
<img className='multiNational__companyHide' src='/images/company/paypal.png'  alt='paypal' />
            </div>
        </section>
    )
}

export default Multinational
