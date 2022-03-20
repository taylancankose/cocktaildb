import React from 'react'
import loading from '../../images/loading.gif'

function Loading() {
  return (
    <div className='mx-auto d-flex align-items-center justify-content-center'>
        <img src={loading} />
    </div>
  )
}

export default Loading