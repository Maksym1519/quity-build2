import ps from './profileSecurity.module.scss';

const ProfileSecurity = () => {
    return (
        <form type="submit">
           <div className={ps.security__wrapper}>
             <h3 className={ps.title}>Смена пароля</h3>
             <div className={ps.input__wrapper}>
                <input type="text" placeholder='Введите текущий пароль' />
             </div>
             <div className={ps.input__wrapper}>
                <input type="text" placeholder='Новый пароль' />
             </div>
             <div className={ps.input__wrapper}>
                <input type="text" placeholder='Повторите новый пароль еще раз' />
             </div>
             <button type='onsubmit' className={ps.securityButton}>Сохранить изменения</button>
           </div>
        </form>
    )
}

export default ProfileSecurity