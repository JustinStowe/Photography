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
            <a href={`/user/accountdetails`}>
              <Button>Account Details</Button>
            </a>
            <a href={`/admin/customeraccounts`}>
              <Button>Account Details</Button>
            </a>
            <a href={`/admin/projects`}>
              <Button>Account Details</Button>
            </a>
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
