import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function Edit() {
  const [file, setFile] = useState("");
  const [Password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [borderLinePassword, setBorderLinePassword] = useState(false);
  const [borderLineConfirm, setBorderLineConfirm] = useState(false);

  const removeBorderLinePassword = () => {
    setBorderLineConfirm(false);
    setBorderLinePassword(true);
  };

  const removeBorderLineConfirm = () => {
    setBorderLineConfirm(true);
    setBorderLinePassword(false);
  };

  const removeBorderLine = () => {
    setBorderLineConfirm(false);
    setBorderLinePassword(false);
  };

  const handlePassword = () => {
    setPassword(!Password);
  };

  const handleConfirmPassword = () => {
    setConfirmPassword(!confirmPassword);
  };

  const handleChange = (e: any) => {
    if (e.target.files.length !== 0) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  const submitForm = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="edit">
      <h2>Edit Profile</h2>
      <div className="edit-container">
        <div className="edit-img-container">
          {file ? (
            <img src={file} alt="" className="view-img" />
          ) : (
            <img src="/icons/avatar.png" alt="" className="avatar-img" />
          )}
          <label htmlFor="images">
            <input
              type="file"
              name=""
              id="images"
              hidden
              accept="image/*"
              onClick={handleChange}
            />
            <img src="/icons/add-photo.png" alt="" className="upload-img" />
          </label>
        </div>
        <form className="edit-fields">
          <div className="edit-inputs">
            <input
              type="text"
              placeholder="Kelechi"
              onClick={removeBorderLine}
            />
          </div>
          <div className="edit-inputs">
            <input type="text" placeholder="Okeke" onClick={removeBorderLine} />
          </div>
          <div className="edit-inputs">
            <input
              type="email"
              placeholder="okekekelechi96@gmail.com"
              onClick={removeBorderLine}
            />
          </div>
          <div className="edit-inputs">
            <input
              type="tel"
              placeholder="+2347082896308"
              onClick={removeBorderLine}
            />
          </div>
          <div className="edit-inputs">
            <div
              className={
                borderLinePassword ? "password-input active" : "password-input"
              }
              onClick={removeBorderLinePassword}
            >
              <input
                type={Password ? "text" : "password"}
                placeholder="Type Password"
              />
              {Password ? (
                <img src="/icons/view.png" alt="" onClick={handlePassword} />
              ) : (
                <img src="/icons/hide.png" alt="" onClick={handlePassword} />
              )}
            </div>
          </div>
          <div className="edit-inputs">
            <div
              className={
                borderLineConfirm ? "password-input active" : "password-input"
              }
              onClick={removeBorderLineConfirm}
            >
              <input
                type={confirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
              />
              {confirmPassword ? (
                <img
                  src="/icons/view.png"
                  alt=""
                  onClick={handleConfirmPassword}
                />
              ) : (
                <img
                  src="/icons/hide.png"
                  alt=""
                  onClick={handleConfirmPassword}
                />
              )}
            </div>
          </div>
        </form>
      </div>
      <button>Save changes</button>
    </div>
  );
}
