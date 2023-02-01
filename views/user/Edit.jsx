/** @format */

const React = require("react");
const DefaultLayout = require("../components/DefaultLayout");
const Button = require("../components/Button");
class Edit extends React.Component {
  render() {
    const { photo } = this.props;
    const { id, name, date, image, contentType } = photo;

    return (
      <DefaultLayout title="photo edit page">
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <nav>
          <a href={`/home/${id}`}>
            <Button>Back</Button>
          </a>
        </nav>
        <section className="flex flex-col items-center justify-items-center ">
          <form
            action={`/home/${id}?_method=PUT`}
            method="POST"
            encType="multipart/form-data"
          >
            {/* the enctype attribute is set to multipart/form-data, which is necessary for file uploads. */}
            <div className="">
              <img
                src={`data:${contentType};base64,${Buffer.from(image).toString(
                  "base64"
                )}`}
                width={400}
                height={400}
              />
            </div>
            <h1>
              Name: <input type="string" name="name" defaultValue={name} />
            </h1>
            <h2>
              Date: <input type="string" name="date" defaultValue={date} />
            </h2>
            <div></div>
            <Button>
              <input type="submit" name="" value="Submit Changes" />
            </Button>
          </form>
        </section>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;
//  <label htmlFor="image">Select an image to upload:</label>{" "}
//           <input type="file" id="image" name="image" accept="image/*" />
