/** @format */

const React = require("react");
const DefaultLayout = require("../components/DefaultLayout");

class Edit extends React.Component {
  render() {
    const { photo } = this.props;

    return (
      <DefaultLayout title="Edit a photo page">
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form
          action={`/home/${photo.id}?_method=PUT`}
          method="POST"
          encType="multipart/form-data"
        >
          {/* the enctype attribute is set to multipart/form-data, which is necessary for file uploads. */}
          Name: <input type="text" name="name" defaultValue={photo.name} />
          <br />
          Date: <input type="text" name="date" defaultValue={photo.date} />
          <br />
          <label htmlFor="image">Your current Image:</label>
          <img
            src={`data:${photo.contentType};base64,${Buffer.from(
              photo.image
            ).toString("base64")}`}
            width={400}
            height={400}
          />
          <label htmlFor="image">Select an image to upload:</label>{" "}
          <input type="file" id="image" name="image" accept="image/*" />
          <br />
          <input
            type="submit"
            name=""
            value="Save Changes"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          />
        </form>

        <form action={`/home/${photo.id}?_method=DELETE`} method="POST">
          <input
            type="submit"
            value="Delete"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;
