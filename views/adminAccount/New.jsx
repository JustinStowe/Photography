/** @format */

const React = require("react");
const DefaultLayout = require("../components/DefaultLayout");
const Button = require("../components/Button");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title="Upload a new photo page">
        <nav>
          <a href={`/home/`}>
            <Button>Back</Button>
          </a>
        </nav>
        <section className="grid h-screen place-items-center">
          <form action="/home" method="POST" encType="multipart/form-data">
            {/* the enctype attribute is set to multipart/form-data, which is necessary for file uploads. */}
            Select an Image to upload:{" "}
            <input type="file" name="image" accept="image/*" />
            <br />
            Name: <input type="text" name="name" />
            <br />
            Date: <input type="text" name="date" />
            <br />
            <Button>
              <input type="submit" name="" value="Upload Image" />
            </Button>
          </form>
        </section>
      </DefaultLayout>
    );
  }
}

module.exports = New;
