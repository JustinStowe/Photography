/** @format */

const React = require("react");
const Layout = require("../components/Layout");
const Button = require("../components/Button");
class Login extends React.Component {
  render() {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-items-center ">
          <h1 className="font-sans text-3xl mb-5 text-white ">Login</h1>
          <br />
          <br />
          <form className="text-white" action="/user/login" method="POST">
            Name: <input type="text" defaultValue="" name="username" required />
            Password:{" "}
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
          <p className=" text-white">Don't have an account?</p>
          <a className="text-white" href="/user/signup">
            <Button>Sign Up Here</Button>
          </a>
        </div>
      </Layout>
    );
  }
}

module.exports = Login;
