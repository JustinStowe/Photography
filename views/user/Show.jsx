/** @format */

const React = require("react");
const Layout = require("../components/Layout");
const Button = require("../components/Button");
class Show extends React.Component {
  render() {
    const { photo, loggedIn } = this.props;

    return (
      <Layout>
        <nav>
          <a href="/home">
            <Button>back</Button>
          </a>
        </nav>
        <section className="flex flex-col items-center justify-items-center ">
          <div className="rounded-lg shadow-md m-2 p-4 bg-gray-700">
            <img
              src={`data:${photo.contentType};base64,${Buffer.from(
                photo.image
              ).toString("base64")}`}
              width={400}
              height={400}
            />
            <h1 className="text-white">{photo.name}</h1>
            <h2 className="text-white">{photo.date}</h2>
          </div>
          {loggedIn && (
            <div className="flex">
              <a href={`/home/${photo.id}/edit`}>
                <Button>Edit Photo</Button>
              </a>
              <form action={`/home/${photo.id}?_method=DELETE`} method="POST">
                <Button>
                  <input type="submit" value="Delete" />
                </Button>
              </form>
            </div>
          )}
        </section>
      </Layout>
    );
  }
}

module.exports = Show;
