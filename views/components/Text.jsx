/** @format */

const React = require("react");

class Text extends React.Component {
  render() {
    const { children } = this.props;

    return <h1 className=" font-sans text-2X1 mb-5 text-white">{children}</h1>;
  }
}

module.exports = Text;
