import React from "react";

const CaRegister = () => {
  return (
    <>
      <form action="" method="post">
        <div class="registerCA">
          <div class="heading-reg" style={{
            fontSize: "3.5rem",
            fontWeight: 920,
            fontFamily: "sans-serif",
            padding: "2rem 4rem",
            textAlign: "center"
          }}>REGISTER</div>
          <div class="small-heading">General Details</div>
          <div class="cols">
            <div class="col">
              <input type="text" name="Name" placeholder="Name" class="fill" />
              <input
                type="text"
                name="Contact"
                placeholder="Contact Number"
                class="fill"
              />
              <input
                type="email"
                name="Email"
                placeholder="Email"
                class="fill"
              />
              <input
                type="text"
                name="Institute"
                placeholder="Institute name"
                class="fill"
              />
              <input
                type="text"
                name="Course"
                placeholder="Course"
                class="fill"
              />
            </div>
            <div class="col">
              <input
                type="text"
                name="Graduation-year"
                placeholder="Year of Graduation"
                class="fill"
              />
              <div class="small-heading">Social Media Details</div>
              <input
                type="text"
                name="LinkedIn"
                placeholder="LinkedIn ID"
                class="fill"
              />
              <input
                type="text"
                name="Instagram"
                placeholder="Instagram ID"
                class="fill"
              />
              <input
                type="text"
                name="Facebook"
                placeholder="Facebook ID"
                class="fill"
              />
            </div>
            <div class="col">
              <div class="small-heading" style={{fontSize: "1.2rem"}}>
                College ID card proof (Max size : X MB)
              </div>
              <div class="mb-3">
                <input class="form-control" type="file" name="college-id" />
              </div>
              <div class="small-heading" style={{fontSize: "1.2rem"}}>
                Aadhar card proof (Max size : X MB)
              </div>
              <div class="mb-3">
                <input class="form-control" type="file" name="aadhar" />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                  placeholder="Why do you want to be a campus ambasador? "
                ></textarea>
              </div>
            </div>
          </div>
          <center>
            <button class="submit">Register</button>
            {/* <input type="submit" value="Register" class="submit" /> */}
          </center>
        </div>
      </form>
    </>
  );
};

export default CaRegister;
