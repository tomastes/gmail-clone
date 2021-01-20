import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import "./EmailList.css";
import {
  CheckBox,
  ExpandMoreRounded,
  RefreshRounded,
  MoreVertRounded,
  NavigateBefore,
  NavigateNext,
  InboxRounded,
  People,
  LocalOfferRounded,
} from "@material-ui/icons";
import { IconButton, Checkbox } from "@material-ui/core";
import MailRow from "./MailRow";
import EmailListSetting from "./EmailListSetting";

const EmailList = () => {
  const [mails, setMails] = useState([]);
  useEffect(() => {
    db.collection("mail")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const Section = ({ Icon, title, selected, color }) => (
    <div
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
      className={`section ${selected && "selected"}`}
    >
      <Icon color={color} />
      <h3>{title}</h3>
    </div>
  );
  return (
    <div className="email_list">
      <EmailListSetting />
      <div className="emailList_sections">
        <Section Icon={InboxRounded} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="blue" />
        <Section Icon={LocalOfferRounded} title="Promotions" color="green" />
      </div>
      <div className="mail_rows">
        {mails.map(
          ({ data }) => (
            console.log(data),
            (
              <MailRow
                subject={data.subject}
                timestamp={new Date(data.timestamp?.seconds*1000).toUTCString()}
                title={data.name}
                message={data.message}
              />
            )
          )
        )}
        {/* <MailRow subject="talk about we" title='tomas tesfamariam' message='hey..we need to talk  my progress that is dope' timestamp='12-23-2020' />
                <MailRow subject="talk about we" title='tomas tesfamariam' message='hey..we need to talk  my progress that is dope' timestamp='12-23-2020' />
                <MailRow subject="talk about we" title='tomas tesfamariam' message='hey..we need to talk  my progress that is dope' timestamp='12-23-2020' /> */}
      </div>
    </div>
  );
};

export default EmailList;
