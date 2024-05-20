import { useState } from "react";

const Main = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setpassword] = useState("");

  const handelFirstName = (e) => {
    return setFirstName(e.target.value);
  };

  const handelLastName = (e) => {
    return setLastName(e.target.value);
  };

  const handelPassword = (e) => {
    return setpassword(e.target.value);
  };

  return (
    <section>
      <div>
        <form>
          <div className="form1">
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              value={firstname}
              placeholder="Enter your First Name"
              onChange={handelFirstName}
            />
          </div>

          <div className="form1">
            <input
              type="text"
              name="LastName"
              id="LastName"
              value={lastname}
              placeholder="Enter your Last name"
              onChange={handelLastName}
            />
          </div>

          <div className="form1">
            <input
              type="password"
              name="Password"
              id="password"
              value={password}
              placeholder="Enter Your Password"
              onChange={handelPassword}
            />
          </div>

          <div className="form1">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Main;
