import "./App.css";

const AuthScreen = () => {

  return (
    <div className="Full-page-container">
      <div className="Left-side-container Background-img">
        <div className="Left-side-container-content">
          <div>
            <p className="Left-side-container-text">
              Already have a Logicly account?
            </p>
          </div>
          <button className="Btn-signin">Sign in</button>
        </div>
      </div>
      <div className="Right-side-container">
        <div className="Form-container">
          <div className="Form-title">Sign Up</div>
          <form action="#" className="Form">
            <div className="Form-input">
              <label className="Label">Full name</label>
              <i className="Label-img fa-regular fa-user"></i>
              <input
                className="Text-input"
                placeholder="Ex: John Smith"
              ></input>
            </div>
            <div className="Form-input">
              <label className="Label">Email</label>
              <i className="Label-img fa-solid fa-envelope"></i>
              <input
                className="Text-input"
                placeholder="youremail@something.com"
              ></input>
            </div>
            <div className="Form-input">
              <label className="Label">Password</label>
              <i className="Label-img-no-pro fa-solid fa-lock"></i>
              <i className="Label-img-show-password fa-solid fa-eye"></i>
              <input
                className="Text-input"
                placeholder="Create a password"
                type="password"
              ></input>
            </div>
            <div className="Form-input">
              <label className="Label">Retype password</label>
              <i className="Label-img-no-pro fa-solid fa-lock"></i>
              <i className="Label-img-show-password fa-solid fa-eye"></i>
              <input
                className="Text-input"
                placeholder="Retype password"
                type="password"
              ></input>
            </div>
            <div className="Form-input">
              <button className="Sign-up-btn">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
