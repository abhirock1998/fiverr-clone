import React from 'react'
import './explore.css';
import {ExploreCardContent} from '../../utils/exploreContent'
function Explore() {
    return (
        <div className='explore'>
            <h2>Explore the marketplace</h2>
          <div className='explore__cardContainer'>
              {ExploreCardContent.map(e =>   <div key={e.text} className='explore__card'>
                <img src={e.image} alt={e.text}/>
                <a href={e.url}>{e.text}</a>
            </div>)}
          </div>
        </div>
    )
}

export default Explore
