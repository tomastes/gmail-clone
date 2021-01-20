import { Button } from '@material-ui/core'
import { CloseOutlined } from '@material-ui/icons'
import React from 'react'
import './SendMail.css'
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from './features/mailSlice'
import { db,auth } from './firebase'
import firebase from 'firebase'
const SendMail = () => {
    
    const dispatch = useDispatch()
const {register,handleSubmit,watch,errors} = useForm()

const onSubmit =(data)=>{
db.collection('mail').add({
    name:data.to,
    subject:data.subject,
    message:data.message,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
})
dispatch(closeSendMessage())
}
    return (
        <div className="sendMail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                <CloseOutlined onClick={e=>dispatch(closeSendMessage())}  className="sendMail_icon" />
            </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input ref={register({required:true})} name="to" placeholder="To" type="text"/>
            {errors.to&&<p>To is required</p>}
            <input ref={register({required:true})} name="subject" type="text" placeholder="subject"/>
            <input ref={register({required:true})} name="message" className="sendMailMsg" placeholder="Message..." type="text"/>
            <div className="sendMail_options">
                <Button type="submit" className="sendMail_send">Send</Button>
            </div>
        </form>
        </div>
    )
}

export default SendMail
