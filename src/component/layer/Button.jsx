import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, className, to, onClick }) => {
  return (
    <div onClick={onClick}>
      <Link to={to}>
        <button className={`font-normal text-white bg-[#BF885E] hover:bg-[#D9945F] font-RB  text-sm md:text-sm ${className}`}>
          {text}
        </button>
      </Link>

    </div>
  )
}

export default Button