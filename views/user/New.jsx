/** @format */

const React = require("react");
const Layout = require("../components/Layout");
const Button = require("../components/Button");

class New extends React.Component {
  render() {
    return (
      <Layout>
        <nav>
          <a href={`/home/`}>
            <Button>Back</Button>
          </a>
        </nav>
        <section className="grid h-screen place-items-center text-white">
          <form action="/home" method="POST" encType="multipart/form-data">
            Select an Image to upload:{" "}
            <input type="file" name="image" accept="image/*" />
            <br />
            <br />
            Name: <input type="text" name="name" />
            <br />
            <br />
            Date: <input type="text" name="date" />
            <br />
            <br />
            check the box to prevent the image from showing up on the public
            homepage- Restricted:{" "}
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
