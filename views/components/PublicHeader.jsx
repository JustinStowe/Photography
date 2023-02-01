/** @format */
const React = require("react");
const Button = require("./Button");

class PublicHeader extends React.Component {
  render() {
    return (
      <nav className="flex flex-row align-center justify-between p-4 bg-green-700 w-screen">
        <a href="/home/">
          {" "}
          <Button>Home</Button>
        </a>
        <a href="/user/login">
          <Button>Log In</Button>
        </a>
      </nav>
    );
  }
}
module.exports = PublicHeader;
