import React from "react";

import "./RegisterAccount.css";

const initFormValue = {
    firstName: "",
    lastName:"",
    email: "",
    password:"",
    confirmPassword:"",
};

export default function RegisterPage() {

  /*  const [formValue, setFormvalue] = useState(initFormValue);

    function handleChange(event) {
        const { value, name } = event.target;
        setFormvalue({
            ...formValue,
            [name]: value,
        });
    };
*/    

    return (
    <div className="register-page">
        <div className="register-form-container">
            <h1 className="title">Register account</h1>
            <form>
                <div>
                    <label htmlFor="first-name" className="form-label">
                        First Name
                    </label>
                    <input
                        id="first-name"
                        className="form-control"
                        type="text"
                        name="firstName"
         //               value={formValue.firstName}
  //                      onChange={handleChange}
                    />
                </div>
                <div className="bm-2">
                    <label htmlFor="last-name" className="form-label">
                        Last Name
                    </label>
                    <input
                        id="Last-name"
                        className="form-control"
                        type="text"
                        name="lastName"
       //                 value={formValue.lastName}
     //                   onChange={handleChange}
                    />
                </div>
                <div className="bm-2">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        id="email"
                        className="form-control"
                        type="text"
                        name="email"
           //             value={formValue.email}
             //           onChange={handleChange}
                    />
                </div>
                <div className="bm-2">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        id="password"
                        className="form-control"
                        type="password"
                        name="password"
               //         value={formValue.password}
                 //       onChange={handleChange}
                    />
                </div>
                <div className="bm-2">
                    <label htmlFor="confirm-password" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        id="confirm-password"
                        className="form-control"
                        type="password"
                        name="confirm-password"
                 //       value={formValue.confirmPassword}
                   //     onChange={handleChange}
                    />
                </div>
                <button type="submit" className="submit-btn">
                    Register
                </button>
            </form>
         </div>
    </div>
    );
};