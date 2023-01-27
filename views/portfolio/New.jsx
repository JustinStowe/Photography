/** @format */

const React = require("react");
const DefaultLayout = require("../components/DefaultLayout");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title="Upload a new photo page">
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/home" method="POST" encType="multipart/form-data">
          {/* the enctype attribute is set to multipart/form-data, which is necessary for file uploads. */}
          Name: <input type="text" name="name" />
          <br />
          Date: <input type="text" name="date" />
          <br />
          <label htmlFor="image">Select an image to upload:</label>
          <input type="file" id="image" name="image" />
          <br />
          <input type="submit" name="" value="Upload Image" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = New;
