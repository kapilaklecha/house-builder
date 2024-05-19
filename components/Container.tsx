import React, { ReactNode } from 'react'

const Container = ({ children } : {children : ReactNode}) => {
    return (
<div className=' max-w-[1216px] m-auto w-[100%] h-[100%]'>
        {children}
    </div>
  )
}

export default Container