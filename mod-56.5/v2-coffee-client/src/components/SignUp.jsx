import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...userProfile } = Object.fromEntries(
      formData.entries()
    );

    // const email = formData.get("email");
    // const password = formData.get("password");

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        //set data in db

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Your account created",
                icon: "success",
                draggable: true,
              });

              form.reset();
            }
          });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="card bg-base-100 mx-auto mt-20  max-w-sm shrink-0 shadow-2xl">
      <h2 className="text-3xl text-center font-black">Sign up Now !</h2>
      <div className="card-body">
        <form className="fieldset" onSubmit={handleSignUp}>
          <label className="label">Name</label>
          <input
            type="text"
            className="input"
            placeholder="Name :"
            name="name"
          />

          <label className="label">Address</label>
          <input
            type="text"
            className="input"
            placeholder="Address :"
            name="address"
          />
          <label className="label">Phone</label>
          <input
            type="number"
            className="input"
            placeholder="Phone :"
            name="phone"
          />
          <label className="label">Photo</label>
          <input
            type="text"
            className="input"
            placeholder="PhotoURL :"
            name="photo"
          />

          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
          />

          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
