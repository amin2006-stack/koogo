import "./Login.scss";
import { Link } from "react-router-dom";
import userIcon from "../../assets/userIcon.svg";
import lockIcon from "../../assets/lockIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/user/user";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const dispatch = useDispatch();

  const { user, status, error } = useSelector((state) => state.user);

  const submitForm = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <div className="login">
      <div className="container">
        <form className="form" action="" onSubmit={handleSubmit(submitForm)}>
          <div className="login__inputs">
            <img className="login__inputs-icon" src={userIcon} alt="" />
            <input
              {...register("email", { required: true })}
              placeholder="Введите почту"
              className="login__input"
              type="text"
            />
          </div>
          <div className="login__inputs">
            <img className="login__inputs-icon" src={lockIcon} alt="" />
            <input
              {...register("password", { required: true })}
              placeholder="Введите пароль"
              className="login__input"
              type="password"
            />
          </div>
          <div>
            <button className="login__button" type="submit">
              Login
            </button>
            <br />
            <Link className="login__password">Forgot password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
