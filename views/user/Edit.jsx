/** @format */

const React = require("react");
const Layout = require("../components/Layout");
const Button = require("../components/Button");
const Text = require("../components/Text");
class Edit extends React.Component {
  render() {
    const { photo, loggedIn } = this.props;
    const { id, name, date, image, contentType } = photo;

    return (
      <Layout loggedIn={loggedIn}>
        <nav>
          <a href={`/home/${id}`}>
            <Button>Back</Button>
          </a>
        </nav>
        <section className="flex flex-col items-center justify-items-center">
          <form
            action={`/home/${id}?_method=PUT`}
            method="POST"
            encType="multipart/form-data"
          >
            <div className="rounded-lg shadow-md m-2 p-2 bg-gray-700 justify-center items-center">
              <img
                src={`data:${contentType};base64,${Buffer.from(image).toString(
                  "base64"
                )}`}
                width={400}
                height={400}
              />
              <Text>{name}</Text>
            </div>
            <input
              className="text-white"
              type="file"
              name="image"
              accept="image/*"
            />
            <br />
            <br />
            <Text>
              Name: <input type="string" name="name" defaultValue={name} />
            </Text>
            <br />
            <br />
            <Text>
              Date: <input type="string" name="date" defaultValue={date} />
            </Text>
            <br />
            <br />
            <Text>
              <p>
                check the box to prevent the image from showing up on the public
                homepage.
              </p>
              Restricted:{" "}
              <input type="checkbox" name="restricted" defaultChecked />
            </Text>
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
