import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


export function sendSms(data) {
const myHeaders = new Headers();
myHeaders.append("Authorization", "App a798fec9cec3fab01d4fc1157554c3e2-0cee968d-b0b4-41ba-8f5f-f7e0449f23d2");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");

const raw = JSON.stringify({
    "messages": [
        {
            "destinations": [{ "to": data }],
            "from": "ServiceSMS",
            "text": "Ваше обращение по поводу ремонта оборудования будет рассмотренно в кратчайшие сроки ! По результатам обращения наш менеджер проинформирует Вас по указанному номеру"
        }
    ]
});

const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
};

fetch("https://dk6kkv.api.infobip.com/sms/2/text/advanced", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

//-------------------------------------------------------------------------------------
const initialState = {
    phone: null
}

export const sendMessagesSlice = createSlice({
    name: "sendMessages",
    initialState,
    reducers: {
        setDataMessages: (state,action) => {
            state.phone = action.payload
        }
    }
}
)
export const {setDataMessages} = sendMessagesSlice.actions;
export const messagesInfo = (state) => state.sendMessages.phone;
export default sendMessagesSlice.reducer