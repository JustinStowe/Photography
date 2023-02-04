/** @format */

const React = require("react");
const Layout = require("../components/Layout");
const Button = require("../components/Button");
const Text = require("../components/Text");

class New extends React.Component {
  render() {
    return (
      <Layout>
        <nav>
          <a href={`/home/`}>
            <Button>Back</Button>
          </a>
        </nav>
        <section className="grid h-screen place-items-center">
          <form action="/home" method="POST" encType="multipart/form-data">
            <Text>Select an Image to upload:</Text>
            <input type="file" name="image" accept="image/*" />
            <br />
            <br />
            <Text>Name:</Text> <input type="text" name="name" />
            <br />
            <br />
            <Text>Date:</Text> <input type="text" name="date" />
            <br />
            <br />
            <Text>
              check the box to prevent the image from showing up on the public
              homepage- Restricted:
            </Text>
            <input type="checkbox" name="restricted" defaultChecked />
            <br />
            <br />
            <Button>
              <input type="submit" name="" value="Upload Image" />
            </Button>
          </form>
        </section>
      </Layout>
    );
  }
}

module.exports = New;
