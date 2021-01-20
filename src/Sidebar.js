import React from "react";
import "./Sidebar.css";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SidebarOptions from "./SidebarOptions";
import {
  InboxOutlined,
  StarRounded,
  AccessTimeOutlined,
  LabelImportantRounded,
  DraftsRounded,
  SendRounded,
  ChatBubbleOutline,
  ExpandMoreRounded,
  PersonOutlineOutlined,
  DuoOutlined,
  PhoneIphoneOutlined,
  PersonRounded,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { closeSendMessage, openSendMessage, selectMail, selectSendMessageIsOpen } from "./features/mailSlice";
const Sidebar = () => {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const dispatch = useDispatch()
  return (
    <div className="sidebar">
      {/* button compose */}
      <Button onClick={e=>!sendMessageIsOpen?dispatch(openSendMessage()):dispatch(closeSendMessage())}
        className="button_compose"
        startIcon={<AddIcon fontSize="xx-large" />}
      >
        Compose
      </Button>
      {/* sidebar navitations */}

      <SidebarOptions
        selected={true}
        Icon={InboxOutlined}
        title="Inbox"
        number={3}
      />
      <SidebarOptions Icon={StarRounded} title="Starred" number={212} />
      <SidebarOptions Icon={AccessTimeOutlined} title="Snoozed" number={0} />
      <SidebarOptions
        Icon={LabelImportantRounded}
        title="Important"
        number={28}
      />
      <SidebarOptions Icon={DraftsRounded} title="Starred" number={4} />
      <SidebarOptions Icon={SendRounded} title="Sent" number={7} />
      <SidebarOptions Icon={ChatBubbleOutline} title="Chat" number={0} />
      <SidebarOptions Icon={ExpandMoreRounded} title="More" number={8} />

      {/* <SidebarOptions />
            <SidebarOptions />
            <SidebarOptions /> */}

      {/* sidbar bottom */}
      <div className="sidebar_footer">
        <div className="sidebar_footer_icons">
          <IconButton>
            <PersonRounded />
          </IconButton>
          <IconButton>
            <DuoOutlined />
          </IconButton>{" "}
          <IconButton>
            <PhoneIphoneOutlined />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
