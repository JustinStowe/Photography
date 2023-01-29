/** @format */
const React = require("react");
const Button = require("./Button");

class Header extends React.Component {
  render() {
    return (
      <nav className="flex flex-row align-center justify-between p-4 bg-green-700 w-screen">
        <a href="/home/New">
          {" "}
          <Button>Upload new Photo</Button>
        </a>
        <a href="/user/account">
          <Button>Account</Button>
        </a>
      </nav>
    );
    /*
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return (
        <nav className="flex flex-row align-center justify-between p-4 bg-green-900 w-screen">
          <a href="/home/New">
            {" "}
            <Button>Upload new Photo</Button>
          </a>
          <a href="/user/logout">
            <Button>Logout</Button>
          </a>
        </nav>
      );
    } else {
      return (
        <nav className="flex flex-row align-center justify-between p-4 bg-green-900 w-screen">
          <a href="/user/login">
            <Button>Login</Button>
          </a>
        </nav>
      );
    }
    */
  }
}
module.exports = Header;
