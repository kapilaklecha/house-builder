import { ReactNode } from "react"

const ImageGird = ({  children, className } : { children : ReactNode, className? : string }) => {
  return (
    <div className= {`grid ${className}`} >
        {children}
    </div>
  )
}

export default ImageGird