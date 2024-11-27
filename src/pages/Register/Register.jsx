import React from "react";
import { useForm } from "react-hook-form";
import "./Register.scss";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/user/user";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const dispatch = useDispatch();

  const submitForm = (data) => {
    const { confirmPassword, ...other } = data;

    dispatch(registerUser(other));
  };

  return (
    <div className="register">
      <div className="container">
        <form
          onSubmit={handleSubmit(submitForm)}
          className="register__form"
          action=""
        >
          <p>Регистрация</p>
          <div>
            <p>Введите имя</p>
            <input
              {...register("firstName", { required: true, maxLength: 20 })}
              type="text"
              className="register__form-input"
              placeholder="Введите имя"
            />
          </div>
          <input
            {...register("lastName", { required: true, maxLength: 20 })}
            type="text"
            className="register__form-input"
            placeholder="Введите фамилию"
          />
          <input
            {...register("email", { required: true })}
            type="email"
            className="register__form-input"
            placeholder="Введите электронную почту"
          />
          <input
            {...register("password", { required: true })}
            type="password"
            className="register__form-input"
            placeholder="Введите пароль"
          />
          <input
            {...register("confirmPassword", { required: true })}
            type="password"
            className="register__form-input"
            placeholder="Введите ещё раз пароль"
          />
          <button className="register__form-btn" type="submit">
            Зарегистрироваться
          </button>
          <hr />
          <button></button>
        </form>
      </div>
    </div>
  );
};

export default Register;
