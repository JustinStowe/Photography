/** @format */

const React = require("react");
const Layout = require("../components/Layout");
const Button = require("../components/Button");
const Text = require("../components/Text");
class Login extends React.Component {
  render() {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-items-center ">
          <Text>Login</Text>
          <br />
          <br />
          <form action="/user/login" method="POST">
            <Text>Name:</Text>{" "}
            <input type="text" defaultValue="" name="username" required />
            <Text>Password:</Text>
            <input
              className="text-black"
              type="password"
              defaultValue=""
              name="password"
              required
            />
            <div>
              <Button>
                <input type="submit" name="" value="Login" />
              </Button>
            </div>
          </form>
          <br />
          <br />
          <Text>Don't have an account?</Text>
          <a href="/user/signup">
            <Button>Sign Up Here</Button>
          </a>
        </div>
      </Layout>
    );
  }
}

module.exports = Login;
