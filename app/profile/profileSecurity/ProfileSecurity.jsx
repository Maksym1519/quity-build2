import ps from "./profileSecurity.module.scss";
import axios from "axios";
import { useAppSelector } from "@/lib/hooks";
import { selectClientsInfo } from "@/lib/features/getClientsInfoSlice";
import { useEffect, useState } from "react";

const ProfileSecurity = () => {
  //data-storage----------------------------------------------------------
  const dataStorage = localStorage.getItem("id");
  //get-clients----------------------------------------------------------
  const [id, setId] = useState();
  const [password, setPassword] = useState()
  async function getClients() {
    try {
      const response = await axios.get(
        "https://quitystrapi.onrender.com/api/clients"
      );
      const dataResponse = response.data.data;
      const matchingClient = dataResponse.find(
        (item) => item.attributes.email === dataStorage
      );
      const matchingId = matchingClient.id;
      setId(matchingId);
      const matchingPassword = matchingClient.attributes.password;
      setPassword(matchingPassword)
    } catch (error) {
      console.error("get clients are failed");
    }
  }
  useEffect(() => {
    getClients();
  }, []);
  //change-password-----------------------------------------------------------
  const [formData, setFormData] = useState({
    currentPassword: null,
    password: null
  });
  console.log(formData.password)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    };
    const handleBlur = () => {
      if (formData.currentPassword !== password) {
         alert("Вы ввели неправильный пароль !");
       }
    }
    
  async function changePassword() {
    const requesData = {
      data: {
        password: formData.password,
      },
    };
    try {
      const response = await axios.put(
        `https://quitystrapi.onrender.com/api/clients/${id}`,
        requesData
      );
      } catch (error) {
      console.error("change password is failed");
    }
  }
  return (
    <form onSubmit={changePassword}>
      <div className={ps.security__wrapper}>
        <h3 className={ps.title}>Смена пароля</h3>
        <div className={ps.input__wrapper}>
          <input
            type="password"
            placeholder="Введите текущий пароль"
            name="currentPassword"
            onChange={(e) => handleChange(e)}
            onBlur={handleBlur}
          />
        </div>
        <div className={ps.input__wrapper}>
          <input
            type="password"
            placeholder="Новый пароль"
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={ps.input__wrapper}>
          <input
            type="password"
            placeholder="Повторите новый пароль еще раз"
            name="repeatedPassword"
          />
        </div>
        <button type="submit" className={ps.securityButton}>
          Сохранить изменения
        </button>
      </div>
    </form>
  );
};

export default ProfileSecurity;
