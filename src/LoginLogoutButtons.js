import React, { useState } from "react";

const LoginLogoutButtons = () => {
  const [isLoginLogout, setIsLoginLogout] = useState(false);
  const handleButtonchange = () => {
    setIsLoginLogout(!isLoginLogout);
  };
  return (
    <>
      {/* {
        isLoginLogout ? (<button>Logout</button>):(<button>Login</button>)
    } */}
      <button onClick={handleButtonchange}>
        {isLoginLogout ? "Logout" : "Login"}
      </button>
    </>
  );
};
export default LoginLogoutButtons;
