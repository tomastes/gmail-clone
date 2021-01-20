import React from 'react'
import './Mail.css'
import EmailListSetting from './EmailListSetting'
import { LabelImportantRounded } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import { openedMail } from './features/mailSlice'
const Mail = () => {
    const message = useSelector(openedMail)
    return (
        <div className="mail">
            <EmailListSetting mail />
            <div className="mail_body">
                <div className="mail_header">
                <div className="mailBody_left">
                    <h4>{message?.subject}</h4>
                    <LabelImportantRounded className="mail_imp" />
                    <p>{message?.title}</p>
                </div>
                <div className="mailBody_right">
                    <p>{message?.timestamp}</p>
                </div>
                </div>
                <div className="mail_message">
                  {message?.message}.💕
                </div>
            </div>
        </div>
    )
}

export default Mail
