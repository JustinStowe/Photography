/** @format */

const React = require("react");
const PublicHeader = require("./PublicHeader");
// Higher order component
class PublicLayout extends React.Component {
  render() {
    // const { isAuthenticated } = this.props; isAuthenticated={isAuthenticated}
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body className="bg-green-200">
          <PublicHeader />
          <h1>{this.props.title}</h1>
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = PublicLayout;
