import "./Login.scss";
import { Link } from "react-router-dom";
import userIcon from "../../assets/userIcon.svg";
import lockIcon from "../../assets/lockIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../../store/user/user";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const { user, status, error } = useSelector((s) => s.user);

  const dispatch = useDispatch();

  const submitForm = (data) => {
    dispatch(loginUser(data));
  };

  if (status === "success") {
    return <Navigate to="/" />;
  }

  return (
    <div className="login">
      <div className="container">
        <form className="form" onSubmit={handleSubmit(submitForm)} action="">
          <div className="login__inputs">
            <img className="login__inputs-icon" src={userIcon} alt="" />
            <input
              {...register("email", { required: true })}
              placeholder="Введите почту"
              className="login__input"
              type="text"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div className="login__inputs">
            <img className="login__inputs-icon" src={lockIcon} alt="" />
            <input
              {...register("password", { required: true })}
              placeholder="Введите пароль"
              className="login__input"
              type="password"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div>
            <button className="login__button">Login</button>
            <br />
            <Link className="login__password">Forgot password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
