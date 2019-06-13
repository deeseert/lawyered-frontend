import React from "react";
import "../App.css";
import pic from "../pictureComponents/handshake-tech.jpg";

const Picture = props => {
  return (
    <div>
      <img id="mainPicture" src={pic} alt="home" />
      <div className="textpicturewrapper">
        <h1 id="picText">What's the issue?</h1>
        <h2 id="picTextSub">Find the best lawyer for your needs</h2>
      </div>
      <div className="formCss">
        <input
          autoFocus={true}
          id="form"
          name="searchValue"
          onChange={props.handleSearch}
          type="text"
          placeholder="Intellectual Property..."
          value={props.test}
        />
        <button onClick={props.handleSubmit} id="submit">
          Search{" "}
        </button>
      </div>
    </div>
  );
};

export default Picture;
