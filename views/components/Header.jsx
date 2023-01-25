/** @format */

const React = require("react");
const Text = require("./Text");

class Header extends React.Component {
  render() {
    return (
      <nav className="flex flex-row align-center justify-between p-4 bg-green-900 w-screen">
        <a href="/">
          <Text>Home</Text>
        </a>

        <a className="mr-3" href="/pokemon/">
          <Text>Pokemon</Text>
        </a>

        <a className="mr-3" href="/pokemon/new">
          <Text>Create new pokemon entry</Text>
        </a>
      </nav>
    );
  }
}

module.exports = Header;
