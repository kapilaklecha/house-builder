import React, { ReactNode } from 'react'

const Container = ({ children } : {children : ReactNode}) => {
    return (
<div className=' max-w-[1216px] max-lg:max-w-[829px]  max-xl:max-w-[1024px] m-auto w-[100%] '>
        {children}
    </div>
  )
}

export default Container