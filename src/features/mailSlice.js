import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageIsOpen:false,
    openedMail:null,
  },
  reducers: {
    openSelectedMail:(state,action)=>{
      state.openedMail = action.payload;
    },
    openSendMessage:(state)=>{
      state.sendMessageIsOpen=true;
    },
    closeSendMessage:(state)=>{
      state.sendMessageIsOpen = false;
    }
  },
});

export const {openSelectedMail, openSendMessage,closeSendMessage  } = mailSlice.actions;


export const selectSendMessageIsOpen  = state => state.mail.sendMessageIsOpen;
export const openedMail  = state => state.mail.openedMail;

export default mailSlice.reducer;
