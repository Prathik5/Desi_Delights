import React from 'react'
import { IMG_CDN } from '../Config'

const Corousel = (creativeId) => {
  return (
    <>
        <div className='bg-black p-2 m-2'>
            <img src={IMG_CDN+creativeId} alt='Offers Image'/>
        </div>
    </>
  )
}

export default Corousel