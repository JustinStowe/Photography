/** @format */

const React = require("react");
const Layout = require("../components/Layout");
const Button = require("../components/Button");
class Account extends React.Component {
  render() {
    return (
      <Layout title="Account Page">
        <nav>
          <a href={`/home/`}>
            <Button>Back</Button>
          </a>
          <section className="grid h-screen place-items-center">
            <a href={`/accountdetails`}>
              <Button>Account Details</Button>
            </a>{" "}
            <a href={`/photoshoot/:id`}>
              <Button>Pending Photoshoot photos</Button>
            </a>{" "}
            <a href={`/user/logout`}>
              <Button>logout</Button>
            </a>
          </section>
        </nav>
      </Layout>
    );
  }
}

module.exports = Account;
