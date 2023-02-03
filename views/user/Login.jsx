/** @format */

const React = require("react");
const Layout = require("../components/Layout");
const Button = require("../components/Button");
class Login extends React.Component {
  render() {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-items-center ">
          <h1 className="font-sans text-3xl mb-5 ">Login</h1>
          <br />
          <br />
          <form action="/user/login" method="POST">
            Name: <input type="text" defaultValue="" name="username" required />
            Password:{" "}
            <input type="password" defaultValue="" name="password" required />
            <div>
              <Button>
                <input type="submit" name="" value="Login" />
              </Button>
            </div>
          </form>
          <br />
          <br />
          <p>Don't have an account?</p>
          <a href="/user/signup">
            <Button>Sign Up Here</Button>
          </a>
        </div>
      </Layout>
    );
  }
}

module.exports = Login;
