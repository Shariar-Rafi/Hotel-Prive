import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`max-w-[340px] md:max-w-[1320px] mx-auto  ${className} `}>
        {children} 
    </div>
  )
}

export default Container