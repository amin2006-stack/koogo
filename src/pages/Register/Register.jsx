import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/user/user";
import "./Register.scss";
import { Navigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const dispatch = useDispatch();
  const { user, status, error } = useSelector((state) => state.user);

  const submitForm = (data) => {
    const { confirmPassword, password, ...other } = data;

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Dispatch registration action
    dispatch(registerUser({ ...other, password }));
  };

  if (status === "success") {
    return <Navigate to="/" />;
  }

  return (
    <div className="register">
      <div className="container">
        <form onSubmit={handleSubmit(submitForm)} className="register__form">
          <p>Регистрация</p>
          <div>
            <p>Введите имя</p>
            <input
              {...register("firstName", {
                required: "Это поле обязательно.",
                maxLength: 20,
              })}
              type="text"
              className="register__form-input"
              placeholder="Введите имя"
            />
            {errors.firstName && (
              <span className="error">{errors.firstName.message}</span>
            )}
          </div>

          <div>
            <p>Введите фамилию</p>
            <input
              {...register("lastName", {
                required: "Это поле обязательно.",
                maxLength: 20,
              })}
              type="text"
              className="register__form-input"
              placeholder="Введите фамилию"
            />
            {errors.lastName && (
              <span className="error">{errors.lastName.message}</span>
            )}
          </div>

          <div>
            <p>Введите электронную почту</p>
            <input
              {...register("email", {
                required: "Это поле обязательно.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Некорректный email.",
                },
              })}
              type="email"
              className="register__form-input"
              placeholder="Введите электронную почту"
            />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}
          </div>

          <div>
            <p>Введите пароль</p>
            <input
              {...register("password", {
                required: "Это поле обязательно.",
                minLength: 6,
              })}
              type="password"
              className="register__form-input"
              placeholder="Введите пароль"
            />
            {errors.password && (
              <span className="error">{errors.password.message}</span>
            )}
          </div>

          <div>
            <p>Введите ещё раз пароль</p>
            <input
              {...register("confirmPassword", {
                required: "Это поле обязательно.",
                minLength: 6,
              })}
              type="password"
              className="register__form-input"
              placeholder="Введите ещё раз пароль"
            />
            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword.message}</span>
            )}
          </div>

          <button className="register__form-btn" type="submit">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
