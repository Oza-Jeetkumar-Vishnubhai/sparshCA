import React from "react";
import "./register.css";

const CaRegister = () => {
  const submitHandler = ()=>{
    // submit the values
  }
  return (
    <div>
      <div className="heading_reg heading_small">REGISTRATION</div>
      <div className="heading_reg">FORM</div>

      <div className="row form_row">
        <div className="col-lg-6 col-sm-12">
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="Name"
              name="Name"
              placeholder="Name"
            />
          </div>
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="Contact_Number"
              name="Contact_Number"
              placeholder="Contact Number"
            />
          </div>
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="email"
              id="E_mail"
              name="E_mail"
              placeholder="E-Mail"
            />
          </div>
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="Institute_name"
              name="Institute_name"
              placeholder="Institute Name"
            />
          </div>
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="course"
              name="course"
              placeholder="Course"
            />
          </div>
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="Year_Graduation"
              name="Year_Graduation"
              placeholder="Year of Graduation"
            />
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="LinkedIn_ID"
              name="LinkedIn_ID"
              placeholder="LinkedIn ID"
            />
          </div>
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="Instagram_ID"
              name="Instagram_ID"
              placeholder="Instagram ID"
            />
          </div>
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="Facebook_ID"
              name="Facebook_ID"
              placeholder="Facebook ID"
            />
          </div>

          <div className="row inputs row_submit">
            <div className="col-9">
              {" "}
              <fieldset>
                <legend>College ID</legend>
                <input
                className="form__input"
                type="file"
                id="College_ID"
                name="College_ID"
                placeholder="College ID"
              />
              </fieldset>
            </div>
          </div>

          <div className="row inputs row_submit">
            <div className="col-9">
              {" "}
              <fieldset>
                <legend>Aadhar Card</legend>
                <input
                className="form__input"
                type="file"
                id="Aadhar"
                name="Aadhar"
                placeholder="Aadhar"
              />
              </fieldset>
            </div>
          </div>
        </div>
      </div>

      <div className="center">
      <div className="submit col-4">
        <button className="submitb" onClick={submitHandler}>Submit</button>
      </div>
      </div>
    </div>
  );
};

export default CaRegister;
