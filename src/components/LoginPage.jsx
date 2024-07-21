import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { userLoginSuccess } from "../store/userSlice";
import styles from '../styles/loginPage.module.css'


function LoginPage() {
  const dispatch = useDispatch();
  const [showErrorPhoneNumber, setShowErrorPhoneNumber] = useState(false);
  const [showErrorUserName, setShowErrorUserName] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('')
  const [userName, setUserName] = useState('')
  const [errorNumber, setErrorNumber] = useState('')
  const [errorUserName, setErrorUserName] = useState('')
  const navigate = useNavigate();


  function phoneNumberChange(e) {
    setPhoneNumber(e.target.value)
  }
  function userNameChange(e) {
    setUserName(e.target.value)
  }
  function submitForm(e) {
    e.preventDefault();
    if (userName === '') {
      setShowErrorUserName(true)
      setErrorUserName('لطفا نام کاربری را وارد کنید')
    }else if (userName.length < 3){
      setShowErrorUserName(true)
      setErrorUserName('نام کاربری باید بیشتر از ۳ کاراکتر باشد')
    }
    if (phoneNumber === '') {
      setShowErrorPhoneNumber(true)
      setErrorNumber('لطفا شماره تلفن را وارد کنید')
    } else if (phoneNumber.length !== 11) {
      setShowErrorPhoneNumber(true)
      setErrorNumber('تعداد شماره تلفن نادرست است')
    }
    else {
      dispatch(userLoginSuccess({ phoneNumber, name: userName }));
      navigate('/');
    }
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.containerLoginPage}>
        <img src="../../public/images/logo.svg" className={styles.logoLogin} />
        <h3>ورود | ثبت‌نام</h3>
        <form className={styles.formLogin} onSubmit={submitForm}>
          <p>سلام !</p>
          <p> لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
          <input
            type="text"
            value={phoneNumber}
            className={styles.inputLogin}
            style={{ border: showErrorPhoneNumber ? "1px solid #d22c4e" : "1px solid #d5d5d5" }}
            onChange={phoneNumberChange}
          />
          <p
            className={styles.emptyLogin}
            style={{ visibility: showErrorPhoneNumber ? "visible" : "hidden" }}
          >
            {errorNumber}
          </p>
          <p> لطفا نام کاربری خود را وارد کنید</p>

          <input
            type="text"
            value={userName}
            className={styles.inputLogin}
            style={{ border: showErrorUserName ? "1px solid #d22c4e" : "1px solid #d5d5d5" }}
            onChange={userNameChange}
          />
          <p
            className={styles.emptyLogin}
            style={{ visibility: showErrorUserName ? "visible" : "hidden" }}
          >
            {errorUserName}
          </p>
          <button className={styles.btnLoginPage}>
            {/* {isLoading ? 'در حال ورود...' : 'ورود'} */}
            ورود
          </button>
          <p className={styles.rulesLoginPage}>
            ورود شما به معنای پذیرش
            <a className={styles.ruleLink}>
              شرایط دیجی‌کالا
            </a>
            و
            <a className={styles.ruleLink}>
              قوانین حریم‌خصوصی
            </a>
            است
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
