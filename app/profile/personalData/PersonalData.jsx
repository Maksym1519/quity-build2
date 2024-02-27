"use client";
import pd from "./personalData.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAppDispatch } from "@/lib/hooks";
import { useDispatch } from "react-redux";
import { setRegistrationInfo } from "@/lib/features/registrationSlice";
//components------------------------------------------------
import InputNotification from "@/app/components/profile/InputNotification";
import Image from "next/image";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import Icones from "@/public/Data";
import Loading from "@/app/components/loading/loading";
import { setNewAvatar } from "@/lib/features/getClientsInfoSlice";
import { ClientsInformation } from "@/lib/features/getClientsInfoSlice";

const PersonalData = () => {
  const [showCalendarPlaceholder, setShowCalendarPlaceholder] = useState(true);
  const togglePlaceholder = () => {
    setShowCalendarPlaceholder(false);
  };
  const [date, setDate] = useState();
  const [showCalendar, setShowCalendar] = useState(false);
  const handleIconClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (newDate) => {
    const formatedDate = newDate.toDate().toLocaleDateString();

    setFormData((prevFormData) => ({
      ...prevFormData,
      birthday: formatedDate,
    }));
  };
  //change-avatar------------------------------------------------
  const [avatarPreview, setAvatarPreview] = useState(null);
  const handleChangeAvatar = (e) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setAvatarPreview(URL.createObjectURL(file));
    }
  };
  //post-profile-data--------------------------------------------
  const [loadingData, setLoadingData] = useState(false);
  const [avatar, setAvatar] = useState();
  const [formData, setFormData] = useState({
    fullName: null,
    birthday: null,
    email: null,
    phone: null,
    address: null,
    avatar: null,
  });
  const dispatch = useDispatch()
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors((prevFormErrors) => ({ ...prevFormErrors, [name]: "" }));
  };

  async function postProfileData(e) {
    e.preventDefault();

    try {
      setLoadingData(true);
      const avatarDataServer = new FormData();
      avatarDataServer.append("files", avatar[0]);
      const responseAvatar = await axios.post(
        "https://quitystrapi.onrender.com/api/upload",
        avatarDataServer
      );
      const imageAvatar = responseAvatar.data[0].id;
            
      const requestData = {
        data: {
          fullName: formData.fullName,
          birthday: formData.birthday,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          avatar: imageAvatar,
        },
      };
      const response = await axios.put(
        `https://quitystrapi.onrender.com/api/clients/${matchingId}`,
        requestData
      );
      if (response.status === 200) {
        alert("Данные успешно сохранены !");
      }
    dispatch(setNewAvatar(true))
    } catch (error) {
      console.error("post-profile-data is failed");
    } finally {
      setLoadingData(false);
    }
  }
       
  
  //localsrorage----------------------------------------------
  const dataStorage = useSelector((state) => state.localStorage.value)
  
  //get-profile-id-----------------------------------------------
  const [matchingId, setMatchingId] = useState();
  async function getProfileId() {
    try {
      const response = await axios.get(
        "https://quitystrapi.onrender.com/api/clients"
      );
      const dataResponse = response.data.data;
      const matchingProfile = dataResponse.find(
        (item) => item.attributes.email === dataStorage
      );
      const matchingProfileId = matchingProfile.id;
      setMatchingId(matchingProfileId);
    } catch (error) {
      console.error("get frofiles data is failed");
    }
  }
  getProfileId();
  //set-registration-info-to-global-redux-----------------------
  const dispatchRegistration = useAppDispatch();
  const getRegistrationInfo = () => {
    dispatchRegistration(setRegistrationInfo(matchingId));
  };
  useEffect(() => {
    if (matchingId && matchingId !== null) getRegistrationInfo();
  }, [matchingId]);
  //------------------------------------------------------------------------

  useEffect(() => {
    const handleClickOutside = (event) => {
      const calendar = document.getElementById(`popup-calendar`);
      if (calendar && !calendar.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showCalendar]);

  return (
    <div className={pd.wrapper}>
      <ClientsInformation />
      {loadingData && <Loading />}
      <form className={pd.form} onSubmit={postProfileData}>
        <div className={pd.personalData}>
          <h3 className={pd.title}>Персональные данные</h3>
          {/* //avatar-------------------------------------------------------------------- */}
          <div className={pd.avatar__wrapper}>
            <div className={pd.avatarInputWrapper}>
              <input
                type="file"
                name="avatar"
                value={formData.avatar}
                onChange={(e) => {
                  setAvatar(e.target.files);
                  handleChangeAvatar(e);
                }}
                placeholder="Фото"
                className={pd.choosePhoto}
              />
              <Image
                src={Icones.avaEmpty}
                width={40}
                height={40}
                className={pd.avaImage}
              />
              {avatarPreview && (
                <Image
                  src={avatarPreview}
                  width={50}
                  height={50}
                  className={pd.avaPreview}
                />
              )}
            </div>
            <div className={pd.choosePhotoText}>Выбрать фото</div>
          </div>
          {/* //input1-------------------------------------------------------------------- */}
          <div className={pd.input__wrapper}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={(e) => handleChange(e)}
              placeholder="ФИО"
              className={!formData.fullName ? pd.inputError : ""}
            />
            {!formData.fullName && (
              <span className={pd.errorMsg}>
                {"Поле должно быть заполнено"}
              </span>
            )}
          </div>
          {/* //input2-------------------------------------------------------------------- */}
          <div
            className={pd.input__wrapper + " " + pd.calendar__wrapper}
            onClick={togglePlaceholder}
          >
            <input
              type="text"
              name="birthday"
              onChange={(e) => handleChange(e)}
              value={formData.birthday}
              className={!formData.birthday ? pd.inputError : ""}
            />
            {!formData.birthday ? (
              <span className={pd.calendarPlaceholder}>Дата рождения</span>
            ) : (
              ""
            )}

            <Image
              src={Icones.calendar}
              className={pd.calendar}
              onClick={() => {
                handleIconClick();
              }}
              alt="calendar"
              width={20}
              height={20}
            />

            {showCalendar && (
              <div id="popup-calendar">
                <DateTime
                  input={false}
                  timeFormat={false}
                  onChange={(e) => handleDateChange(e)}
                  className={pd.calendarDate}
                />
              </div>
            )}
            {!formData.birthday && (
              <span className={pd.errorMsg}>
                {"Поле должно быть заполнено"}
              </span>
            )}
          </div>
          {/* //input3-------------------------------------------------------------------- */}
          <div className={pd.input__wrapper}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              placeholder="E-mail"
              className={!formData.email ? pd.inputError : ""}
            />
            {!formData.email && (
              <span className={pd.errorMsg}>
                {"Поле должно быть заполнено"}
              </span>
            )}
          </div>
          {/* //input4-------------------------------------------------------------------- */}
          <div className={pd.input__wrapper}>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={(e) => handleChange(e)}
              placeholder="Телефон"
              className={!formData.phone ? pd.inputError : ""}
            />
            {!formData.phone && (
              <span className={pd.errorMsg}>
                {"Поле должно быть заполнено"}
              </span>
            )}
          </div>

          <button
            type="submit"
            className={pd.saveButton}
            >
            Сохранить изменения
          </button>
        </div>
        <div className={pd.notification}>
          <h3 className={pd.title}>Оповещения</h3>
          <div className={pd.input__wrapper}>
            <InputNotification />
            <span className={pd.text}>
              Получать письма от сайта gmail.com на свой почтовый ящик
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalData;
