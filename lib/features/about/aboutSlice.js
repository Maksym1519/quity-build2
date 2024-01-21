import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/lib/hooks";

const initialState = {
  currentComponent: "about",
  aboutState: null,
  requisitesState: null,
  contactsState: null,
  publicOfferState: null,
  agreementState: null,
};

const AboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    setAbout: (state) => {
      state.currentComponent = "about";
    },
    setRequisite: (state) => {
      state.currentComponent = "requisite";
    },
    setContacts: (state) => {
      state.currentComponent = "contacts";
    },
    setPublicOffer: (state) => {
      state.currentComponent = "publicOffer";
    },
    setAgreement: (state) => {
      state.currentComponent = "agreement";
    },
    setAboutInfo: (state, action) => {
      state.aboutState = action.payload;
    },
    setRequisitesInfo: (state, action) => {
      state.requisitesState = action.payload;
    },
    setContactsInfo: (state, action) => {
      state.contactsState = action.payload;
    },
    setPublicOfferInfo: (state, action) => {
      state.publicOfferState = action.payload;
    },
    setAgreementInfo: (state, action) => {
      state.agreementState = action.payload;
    },
  },
});
export const {
  setAbout,
  setRequisite,
  setContacts,
  setPublicOffer,
  setAgreement,
  setAboutInfo,
  setRequisitesInfo,
  setContactsInfo,
  setPublicOfferInfo,
  setAgreementInfo,
} = AboutSlice.actions;
export const aboutInfo = (state) => state.about.aboutState;
export const requisitesInfo = (state) => state.about.requisitesState;
export const contactsInfo = (state) => state.about.contactsState;
export const publicOfferInfo = (state) => state.about.publicOfferState;
export const agreementInfo = (state) => state.about.agreementState;
export default AboutSlice.reducer;

export const AboutData = () => {
  const [about, setAbout] = useState();
  const dispatch = useAppDispatch();
  dispatch(setAboutInfo(about));
  async function getAboutInfo() {
    try {
      const responseAbout = await axios.get(
        "https://quitystrapi.onrender.com/api/abouts?populate=*"
      );
      const responseDataAbout = responseAbout.data.data;
      setAbout(responseDataAbout);
    } catch (error) {
      console.error("get data about page is failed");
    }
  }
  useEffect(() => {
    getAboutInfo();
  }, []);
};
export const RequisitesData = () => {
  const [requisites, setRequisites] = useState();
  const dispatch = useAppDispatch();
  dispatch(setRequisitesInfo(requisites));
  async function getRequisitesInfo() {
    try {
      const responseRequisites = await axios.get(
        "https://quitystrapi.onrender.com/api/requisites?populate=*"
      );
      const responseDataRequisites = responseRequisites.data.data;
      setRequisites(responseDataRequisites);
     } catch (error) {
      console.error("get data requisites is failed");
    }
  }
  useEffect(() => {
    getRequisitesInfo();
  }, []);
};

export const ContactsData = () => {
  const [contacts, setContacts] = useState();
  const dispatch = useAppDispatch();
  dispatch(setContactsInfo(contacts));
  async function getContactsInfo() {
    try {
      const responseContacts = await axios.get(
        "https://quitystrapi.onrender.com/api/contacts?populate=*"
      );
      const responseDataContacts = responseContacts.data.data;
      setContacts(responseDataContacts);
    } catch (error) {
      console.error("get data contacts is failed");
    }
  }
  useEffect(() => {
    getContactsInfo();
  }, []);
};
export const PublicOfferData = () => {
  const [publicOffer, setPublicOffer] = useState();
  const dispatch = useAppDispatch();
  dispatch(setPublicOfferInfo(publicOffer));
  async function getPublicOfferInfo() {
    try {
      const responsePublicOffer = await axios.get(
        "https://quitystrapi.onrender.com/api/public-offers?populate=*"
      );
      const responseDataPublicOffer = responsePublicOffer.data.data;
      setPublicOffer(responseDataPublicOffer);
    } catch (error) {
      console.error("get data publicOffer is failed");
    }
  }
  useEffect(() => {
    getPublicOfferInfo();
  }, []);
};
export const AgreementData = () => {
  const [agreement, setAgreement] = useState();
  const dispatch = useAppDispatch();
  dispatch(setAgreementInfo(agreement));
  async function getAgreementInfo() {
    try {
      const responseAgreement = await axios.get(
        "https://quitystrapi.onrender.com/api/agreements?populate=*"
      );
      const responseDataAgreement = responseAgreement.data.data;
      setAgreement(responseDataAgreement);
    } catch (error) {
      console.error("get data agreement is failed");
    }
  }
  useEffect(() => {
    getAgreementInfo();
  }, []);
};
