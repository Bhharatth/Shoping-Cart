import React from "react";
import "./Login.css"

const Login = () => {
 const error = false;
  return (
    <div className="login" >
      <form>
        <input placeholder="username" />
        <input placeholder="password" />
        <button>LOGIN</button>
      </form>
      {error && <error>Something went wrong...</error>}
      {/* <Link>CREATE A NEW ACCOUNT</Link> */}
    </div>
  );
};

export default Login;