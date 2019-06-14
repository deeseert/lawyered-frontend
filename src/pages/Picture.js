import React, { Component } from "react";
import "../App.css";
// import M from "materialize-css";
import pic from "../pictureComponents/handshake-tech.jpg";

class Picture extends Component {
  // componentDidMount() {
  //   var elems = document.querySelectorAll("select");
  //   return M.FormSelect.init(elems);
  // }
  render() {
    return (
      <div>
        <img id="mainPicture" src={pic} alt="home" />
        <div className="textpicturewrapper">
          <h1 id="picText">What's the issue?</h1>
          <h2 id="picTextSub">Find the best lawyer for your needs</h2>
        </div>

        <div className="formCss">
          <div>
            <select name="searchValue" onChange={this.props.handleSearch}>
              <option value="" disabled selected>
                Choose your option
              </option>
              <option value="Commercial Law">Commercial Law</option>
              <option value="Criminal Law">Criminal Law</option>
              <option value="Property Law">Property Law</option>
            </select>
            <label />
          </div>
          <button onClick={this.props.handleSubmit} id="submit">
            Search{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default Picture;
