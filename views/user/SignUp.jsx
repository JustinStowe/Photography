/** @format */

const React = require("react");
const Layout = require("../components/Layout");
const Button = require("../components/Button");
const Text = require("../components/Text");
class SignUp extends React.Component {
  render() {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-items-center ">
          <Text>Sign up</Text>
          <section className="flex flex-col items-center justify-items-center ">
            <form action="/user/SignUp" method="POST">
              <Text>UserName:</Text>
              <input type="text" defaultValue=" " name="username" required />
              <br />
              <br />
              <Text>Password:</Text>
              <input
                type="password"
                defaultValue=" "
                name="password"
                required
              />
              <br />
              <br />
              <Text>Name:</Text>
              <input type="text" defaultValue=" " name="name" required />
              <br />
              <br />
              <Text>Phone Number:</Text>
              <input type="Number" defaultValue=" " name="phoneNumber" />
              <br />
              <br />
              <Text>Email:</Text>
              <input type="text" defaultValue=" " name="email" />
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
            <Text>If you already have an account</Text>
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
