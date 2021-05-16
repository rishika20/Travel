import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

const STYlES=['btn--primar','btn--outline']
const SIZES=['btn--medium','btn--large']

export const Button=({
    children,Buttonstyle,type,onClick,Buttonsize
})=>
{
  const checkbuttonstyle=STYlES.includes(Buttonstyle)?Buttonstyle:STYlES[0]
  const checkbuttonsize=SIZES.includes(Buttonsize)?Buttonsize:SIZES[0]
  return(
      <Link to="/signup" className="btn-mobile">
          <button className={`btp ${checkbuttonstyle} ${checkbuttonsize}`}
          onClick={onClick}
          type={type}>
              {children}
          </button>
      </Link>
  )
}
