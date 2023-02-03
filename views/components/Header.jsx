/** @format */
const React = require("react");
const Button = require("./Button");

class Header extends React.Component {
  render() {
    const { loggedIn } = this.props;
    return (
      <nav className="flex flex-row align-center justify-between p-4 bg-gray-700 w-screen">
        {loggedIn && (
          <a href="/home/New">
            {" "}
            <Button>Upload new Photo</Button>
          </a>
        )}

        <a href="/home/">
          {" "}
          <Button>Home</Button>
        </a>
        {loggedIn ? (
          <a href="/user/logout">
            <Button>Logout</Button>
          </a>
        ) : (
          <a href="/user/login">
            <Button>Login</Button>
          </a>
        )}
      </nav>
    );
  }
}
module.exports = Header;
