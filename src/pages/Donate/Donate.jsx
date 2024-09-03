import React, { useState } from "react";
import styles from "./Donate.module.scss";
import Title from "../../components/UI/Title/Title";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";
import Button from "../../components/UI/Button/Button";
import Footer from "../../components/UI/Footer/Footer";
import User from "../../icons/User";
import Ruble from "../../icons/Ruble";
import Server from "../../icons/Server";
import Coupon from "../../icons/Coupon";
import Phone from "../../icons/Phone";
import ManImage1 from "../../img/donate/1.webp";
import ManImage2 from "../../img/donate/2.webp";
import Spot4 from "../../img/spot4.svg";
import Spot5 from "../../img/spot5.svg";

const Donate = () => {
  const [data, setData] = useState({
    nickname: "",
    server: "srv1",
    sum: "",
    promo: "",
    tel: "",
  });

  const [errors, setErrors] = useState({
    nick: false,
    sum: false,
  });
  /**
   *
   * @param nick
   * Валидация никнейма. проверяет что ник удовлетворяет regExp и короче 30 символов
   * Если валидация не прошла, возвращает текст ошибки, если прошла возвращает true.
   * @returns
   */
  //TODO: Сделать валидаторы для телефона и суммы аналогичным образом
  const validateNick = (nick) => {
    const nickReg = new RegExp("[^a-zA-Z0-9/_/.]");
    if (nick.length === 0) return "Поле не должно быть пустым";
    if (nick.length >= 30) return "Ник должен быть короче 30 символов";
    if (nickReg.test(data.nickname))
      return "Ник должен содержать только латинские буквы, цифры или символы _,.";
    return true;
  };

  /*
   * Валидатор всей формы. Валидирует каждое поле, исходя из валидаторов написаных выше. Возвращает массив из 2 значений.
   * Первое значение есть ли ошибки (true/false).
   * Второе значение - объект сообщений об ошибках.
   */
  const validate = () => {
    const errors = {
      nick: false,
      sum: false,
      phone: false,
    };
    let hasErrors = false;
    const nickError = validateNick(data.nickname);
    if (typeof nickError !== "boolean") {
      errors.nick = nickError;
      hasErrors = true;
    }
    return [hasErrors, { ...errors }];
  };
  /**
   * Запускает валидацию формы, если ошибок нет, открывает ссыку на донат, если ошибки есть устанавливает состояние ошибки компонентам формы
   */
  const redirectToDonate = () => {
    const validation = validate();
    const [hasErros, validationErrors] = validation;
    if (!hasErros) {
      const DonateURL = `https://last-stay.ru:/api/donate?nickname=${data.nickname}&sum=${data.sum}&promo=${data.promo}`;
      window.open(DonateURL, "_blank");
    }
    setErrors({ ...validationErrors });
  };

  return (
    <>
      <section className={styles.donate}>
        <img className={styles.spot4} src={Spot4} alt="spot" />
        <div className={[styles.inner, "container --big"].join(" ")}>
          <Title className={styles.title}>Пополнение счета</Title>
          <div className={styles.content}>
            <div className={styles.image}>
              <img src={ManImage1} alt="man" title="man" />
            </div>
            <div className={styles.form}>
              <Input
                key="NickName"
                //Если булево - ошибок нет.
                error={typeof errors.nick !== "boolean"}
                // Текст ошибки
                errortxt={errors.nick}
                className={styles.form_item}
                value={data.nickname}
                onChange={(e) => setData({ ...data, nickname: e.target.value })}
                type="text"
                placeholder="Nick_Name"
                label="Никнейм"
                required
                ico={<User color="#AD1601" width="24" height="24" />}
              />
              <Select
                key="Server"
                className={styles.form_item}
                label="Сервер"
                options={[
                  { value: "srv01", name: "Server 01" },
                  { value: "srv02", name: "Server 02" },
                ]}
                ico={<Server color="#AD1601" width="24" height="24" />}
                required
              />
              <Input
                key="Summ"
                error={errors.sum.hasError}
                errortxt="Поле не может быть пустым"
                className={styles.form_item}
                value={data.sum}
                onChange={(e) => setData({ ...data, sum: e.target.value })}
                type="number"
                placeholder="0"
                label="Сумма пополнения"
                ico={<Ruble color="#AD1601" width="24" height="24" />}
                required
              />
              <Input
                key="PhoneNumber"
                className={styles.form_item}
                value={data.tel}
                onChange={(e) => setData({ ...data, tel: e.target.value })}
                type="nuber"
                placeholder="Указывать без знака +"
                label="Телефон"
                required
                ico={<Phone color="#AD1601" width="24" height="24" />}
              />
              <Input
                key="Promo"
                className={styles.form_item}
                value={data.promo}
                onChange={(e) => setData({ ...data, promo: e.target.value })}
                type="text"
                placeholder="Не обязательно"
                label="Промокод"
                ico={<Coupon color="#AD1601" width="24" height="24" />}
              />
              <Button onClick={redirectToDonate} className={styles.btn}>
                Пополнить счет
              </Button>
              <p className={styles.course}>Курс покупки: 1 рубль = 1 донат рублей</p>
            </div>
            <div className={styles.image}>
              <img src={ManImage2} alt="man" title="man" />
            </div>
          </div>
        </div>
        <img className={styles.spot5} src={Spot5} alt="spot" />
      </section>
      <Footer className={styles.footer}></Footer>
    </>
  );
};

export default Donate;
