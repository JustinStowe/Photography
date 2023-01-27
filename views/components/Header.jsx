/** @format */

const React = require("react");
const Text = require("./Text");

class Header extends React.Component {
  render() {
    return (
      <nav className="flex flex-row align-center justify-between p-4 bg-green-900 w-screen">
        <a
          className="font-sans text-3xl text-green-400  #1d4ed8bg-sky-500 hover:bg-indigo-700 ... underline"
          href="/home/New"
        >
          Upload new photo
        </a>

        <a href="/user/logout">
          <button className="logoutBtn">Logout</button>
        </a>
      </nav>
    );
  }
}

module.exports = Header;
