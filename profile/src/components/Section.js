import React from 'react'
import Intro from './homePage/Intro'

const Section = ({main}) => {
  return (
    <div className={main ? 'section main': 'section'}>
      {main ? <Intro /> : <></>}
    </div>
  )
}


export default Section