import React from 'react'

const Loader = () => {
    return (
        <div className='flex justify-center item-center min-h-screen'>
            <div className='w-12 h-12 border-4 border-white border-b-orange-600 rounded-full inline-block box-border animate-spin'></div>
        </div>
    )
}

export default Loader
