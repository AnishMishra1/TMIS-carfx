import { Navbar } from '@nextui-org/react'
import React from 'react'
import Intro from '../../globalSubComponents/Intro'
import Footer from '../../globalSubComponents/Footer'
import Form from '../../globalSubComponents/Form'
import Abovefoter from '../Home/subComponents/Abovefoter'

const title ={des:"Contact Us"}

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <Intro des={title.des} />
        <Form/>
        <Abovefoter/>
        

    </div>
  )
}

export default Contact