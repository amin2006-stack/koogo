import React from "react";
import { useForm } from "react-hook-form";
import "./Register.scss";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/user/user";
import { Navigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const { user, status, error } = useSelector((s) => s.user);

  const dispatch = useDispatch();

  const submitForm = (data) => {
    const { confirmPassword, ...other } = data;

    dispatch(registerUser(other));
  };

  if (status === "success") {
    return <Navigate to="/" />;
  }

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
