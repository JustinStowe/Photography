/** @format */

const React = require("react");
const Layout = require("../components/Layout");
const Button = require("../components/Button");
class AccountDetails extends React.Component {
  render() {
    const { username, password } = this.props.req.session;
    return (
      <Layout title="Account Page">
        <nav>
          <a href={`/home/`}>
            <Button>Back</Button>
          </a>
          <section className="grid h-screen place-items-center">
            <form action={`/user/:id ?_method=PUT`} method="POST">
              <h1>Edit Username</h1>
              Username:{" "}
              <input type="string" name="username" defaultValue={username} />
              <h1>Edit Password</h1>
              Current Password:{" "}
              <input
                type="password"
                defaultValue={password}
                name="currentPassword"
              />
              New Password:{" "}
              <input type="password" defaultValue="" name="newPassword" />
              <input type="submit" name="" value="submit Changes" />
            </form>
          </section>
        </nav>
      </Layout>
    );
  }
}

module.exports = AccountDetails;
