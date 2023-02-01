import './App.css';

const AuthScreen = () => {

  return (
    <div className="Full-page-container">
      <div className="Left-side-container Left-side-container-img">
        <div className='Left-side-container-content'>
          <div>
          <p class="Left-side-container-text">Already have a Logicly account?</p>
          </div>
          <button class="Left-side-container-btn-signin">Sign in</button>
        </div>
      </div>
      <div className="Right-side-container">
        <div className='Right-side-container-form-container'></div>
      </div>
    </div>
  );
};

export default AuthScreen;
