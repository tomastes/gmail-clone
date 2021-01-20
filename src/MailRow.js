import React from "react";
import { IconButton, Checkbox } from "@material-ui/core";
import {
  AccessTimeOutlined,
  ArchiveRounded,
  DeleteRounded,
  MarkunreadMailbox,
  SnoozeRounded,
  StarOutline,
} from "@material-ui/icons";
import "./MailRow.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  } from './features/userSlice'
import { openSelectedMail } from "./features/mailSlice";
const MailRow = ({ timestamp, title, message, subject }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const showMessage = () => {
    dispatch(openSelectedMail({ timestamp, title, message, subject }));
    history.push("/mail");
  };

  return (
    <div onClick={showMessage} className="mail_row">
      <div className="mailRow_left">
        <Checkbox />
        <IconButton>
          <StarOutline />
        </IconButton>
      </div>

      <h3 className="mailRow_title">{title}</h3>

      <div className="mailRow_message">
        <h4>
          {subject}
          <span>{message}</span>
        </h4>
      </div>

      <div className="mailRow_hover_icons">
        <IconButton>
          <ArchiveRounded />
        </IconButton>
        <IconButton>
          <DeleteRounded />
        </IconButton>
        <IconButton>
          <MarkunreadMailbox />
        </IconButton>
        <IconButton>
          <AccessTimeOutlined />
        </IconButton>
      </div>
      <div className="mailRow_right">{timestamp}</div>
    </div>
  );
};
export default MailRow;
