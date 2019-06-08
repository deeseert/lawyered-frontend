class API {
  static baseUrl = "http://localhost:3000";
  static signInUrl = API.baseUrl + "/signin";
  static validateUrl = API.baseUrl + "/validate";

  static signin(user) {
    // debugger;
    console.log("this is the user:", user);
    return fetch(this.signInUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then(resp => resp.json());
  }

  static validate() {
    const token = localStorage.getItem("token");
    return fetch(this.validateUrl, {
      //Authorization is used in a GET request when you want to present something to the server, like the id and being authorised to access some data
      headers: { Authorization: token }
    }).then(resp => resp.json());
  }

  // static validate() {
  //   let token = localStorage.getItem("token");
  //   return fetch(this.validateUrl, {
  //     headers: { Authorization: token }
  //   }).then(resp => resp.json());
  // }

  static getDashboard() {
    return fetch("http://localhost:3000/dashboard", {
      headers: { Authorization: localStorage.getItem("token") }
    }).then(resp => resp.json());
  }
}

export default API;
