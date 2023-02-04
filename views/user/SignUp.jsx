/** @format */

const React = require("react");
const Layout = require("../components/Layout");
const Button = require("../components/Button");
class SignUp extends React.Component {
  render() {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-items-center ">
          <h1 className="font-sans text-3xl mb-5 text-white ">Sign-up</h1>
          <section className="flex flex-col items-center justify-items-center text-white ">
            <form action="/user/SignUp" method="POST">
              UserName:{" "}
              <input type="text" defaultValue=" " name="username" required />
              <br />
              <br />
              Password:{" "}
              <input
                type="password"
                defaultValue=" "
                name="password"
                required
              />
              <br />
              <br />
              Name: <input type="text" defaultValue=" " name="name" required />
              <br />
              <br />
              phone Number:{" "}
              <input type="Number" defaultValue=" " name="phoneNumber" />
              <br />
              <br />
              Email: <input type="text" defaultValue=" " name="email" />
              <br />
              <br />
              <div className="flex justify-center">
                <Button>
                  <input type="submit" name="" value="Signup" />
                </Button>
              </div>
            </form>
            <br />
            <br />
            <h1>If you already have an account</h1>
            <a href="/user/login/">
              <Button>Login Here</Button>
            </a>
          </section>
        </div>
      </Layout>
    );
  }
}

module.exports = SignUp;
