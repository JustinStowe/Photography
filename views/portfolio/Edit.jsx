/** @format */

const React = require("react");
const DefaultLayout = require("../components/DefaultLayout");
const Button = require("../components/Button");
class Edit extends React.Component {
  render() {
    const { photo } = this.props;
    const { _id, name, date, image, contentType } = photo;

    return (
      <DefaultLayout title="photo edit page">
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <nav>
          <a href={`/home/${_id}`}>
            <Button>Back</Button>
          </a>
        </nav>
        <section className="flex flex-col items-center justify-items-center ">
          <form action={`/home/${_id}?_method=PUT`} method="POST">
            {/* the enctype attribute is set to multipart/form-data, which is necessary for file uploads. */}
            <div className="">
              <img
                src={`data:${contentType};base64,${Buffer.from(image).toString(
                  "base64"
                )}`}
                width={400}
                height={400}
              />
              <Button>
                <input type="file" id="image" name="image" accept="image/*" />
              </Button>
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
            <form action={`/home/${photo._id}?_method=DELETE`} method="POST">
              <Button>
                <input type="submit" value="Delete" />
              </Button>
            </form>
          </form>
        </section>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;
//  <label htmlFor="image">Select an image to upload:</label>{" "}
//           <input type="file" id="image" name="image" accept="image/*" />
