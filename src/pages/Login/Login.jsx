import "./Login.scss";
import { Link } from "react-router-dom";
import userIcon from "../../assets/userIcon.svg";
import lockIcon from "../../assets/lockIcon.svg";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <form className="form" action="">
          <div className="login__inputs">
            <img className="login__inputs-icon" src={userIcon} alt="" />
            <input
              placeholder="Введите почту"
              className="login__input"
              type="text"
            />
          </div>
          <div className="login__inputs">
            <img className="login__inputs-icon" src={lockIcon} alt="" />
            <input
              placeholder="Введите пароль"
              className="login__input"
              type="password"
            />
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
