import React from 'react'
import Intro from '../../globalSubComponents/Intro'
import { useDispatch } from "react-redux";
import { updateTab } from "../../store/curTabSlice";
import EmailForm from './subElements/EmailForm'
const title ={des:"Contact Us"}

const Contact = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Contact"));
  return (
    <div>
        <Intro des={title.des} />
        <EmailForm />
    </div>
  )
}

export default Contact