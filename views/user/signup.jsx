/** @format */

const React = require("react");

class Signup extends React.Component {
  render() {
    return (
      <div>
        <h1>Signup</h1>

        <form action="/user/signup" method="POST">
          UserName:{" "}
          <input type="text" defaultValue="" name="username" required />
          Password:{" "}
          <input type="password" defaultValue="" name="password" required />
          Name: <input type="text" defaultValue="" name="name" required />
          phone Number:{" "}
          <input type="Number" defaultValue="" name="phoneNumber" />
          Email: <input type="text" defaultValue="" name="email" />
          <input type="submit" name="" value="Signup" />
        </form>
        <h1>If you already have an account</h1>
        <a href="/user/login/">Login</a>
      </div>
    );
  }
}

module.exports = Signup;
