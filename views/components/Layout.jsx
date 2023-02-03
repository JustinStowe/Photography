/** @format */

const React = require("react");
const Header = require("./Header");
// Higher order component
class Layout extends React.Component {
  render() {
    const { loggedIn } = this.props;
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body className="bg-gray-900">
          <Header loggedIn={loggedIn} />
          <h1>{this.props.title}</h1>
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = Layout;
