import Button from "../pagination/general-button/button.styled";

const Auth = (props) => {
  return (
    <div className={props.className}>
      <form className="form-elements">
        <h1 className="heading--1">Sing Up</h1>
        <div>
          <label htmlFor="email">Your Email</label>
          <br />
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">Your Password</label>
          <br />
          <input type="password" id="password" required />
        </div>
        <Button className="btn-auth" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};
export default Auth;
