import React from 'react'
import './EmailList.css'
import { CheckBox, ExpandMoreRounded, RefreshRounded, MoreVertRounded, NavigateBefore, NavigateNext, InboxRounded, People, LocalOfferRounded, ArrowBack, ErrorOutline, DeleteOutline, EmailOutlined, WatchLaterOutlined, ErrorRounded, DeleteRounded, EmailRounded, WatchLaterRounded, MoveToInboxRounded } from '@material-ui/icons'
import { IconButton, Checkbox } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
const EmailListSetting = ({mail}) => {
    const history = useHistory()
    return (
        <div className="email_list_setting">
        <div className="emailList_settingLeft">
            {mail&& <IconButton onClick={e=>history.push('/mailList')}>
                <ArrowBack />
            </IconButton>}
      {!mail&&  <Checkbox />}
            <IconButton>
            <ExpandMoreRounded />
            </IconButton>
            <IconButton>
                <RefreshRounded />
            </IconButton>
          {!mail&&  <IconButton>
                <MoreVertRounded />
            </IconButton>}
            {mail&&(<>
                <IconButton>
                <MoveToInboxRounded />
            </IconButton>
            <IconButton>
                <ErrorRounded />
            </IconButton>
            <IconButton>
                <DeleteRounded />
            </IconButton>
            <IconButton>
                <EmailRounded />
            </IconButton>
            <IconButton>
                <WatchLaterRounded />
            </IconButton>
              <IconButton>
                <MoreVertRounded />
            </IconButton>
            </>)}
        </div>
        <div className="emailListsetting_right">
<span>11-2- of 2,454</span>
    <IconButton>
        <NavigateBefore />
    </IconButton>
    <IconButton>
        <NavigateNext />
    </IconButton>
        </div>
    </div>
    )
}

export default EmailListSetting
