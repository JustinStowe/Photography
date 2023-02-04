/** @format */

const React = require("react");
const Layout = require("../components/Layout");
const Button = require("../components/Button");
class Edit extends React.Component {
  render() {
    const { photo } = this.props;
    const { id, name, date, image, contentType } = photo;

    return (
      <Layout title="photo edit page">
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
            <div className="rounded-lg shadow-md m-2 p-4 bg-gray-700">
              <img
                src={`data:${contentType};base64,${Buffer.from(image).toString(
                  "base64"
                )}`}
                width={400}
                height={400}
              />
              <h1>{name}</h1>
            </div>
            <input type="file" name="image" accept="image/*" />
            <br />
            <br />
            <h1>
              Name: <input type="string" name="name" defaultValue={name} />
            </h1>
            <br />
            <br />
            <h2>
              Date: <input type="string" name="date" defaultValue={date} />
            </h2>
            <br />
            <br />
            <h2>
              <p>
                check the box to prevent the image from showing up on the public
                homepage.
              </p>
              Restricted:{" "}
              <input type="checkbox" name="restricted" defaultChecked />
            </h2>
            <Button>
              <input type="submit" name="" value="Submit Changes" />
            </Button>
            <form action={`/home/${photo.id}?_method=DELETE`} method="POST">
              <Button>
                <input type="submit" value="Delete" />
              </Button>
            </form>
          </form>
        </section>
      </Layout>
    );
  }
}

module.exports = Edit;
