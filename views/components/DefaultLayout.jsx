/** @format */

const React = require("react");
const Header = require("./Header");
// Higher order component
class DefaultLayout extends React.Component {
  render() {
    // const { isAuthenticated } = this.props; isAuthenticated={isAuthenticated}
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
          <Header />
          <h1>{this.props.title}</h1>
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
