/** @format */

const React = require("react");
const Layout = require("../components/Layout");
const Text = require("../components/Text");
class Index extends React.Component {
  render() {
    const { photos, loggedIn } = this.props;
    return (
      <Layout loggedIn={loggedIn}>
        <div>
          <div className="flex justify-center">
            <Text>Picture portfolio Page</Text>
          </div>
          <section className=" flex basis-auto flex-wrap m-4 p-2 justify-center overscroll-auto ">
            {photos.map((photo, i) => {
              return (
                <div
                  className="rounded-lg shadow-md m-2 p-4 bg-gray-700"
                  key={i}
                >
                  <a href={`/home/${photo.id}`}>
                    <img
                      src={`data:${photo.contentType};base64,${Buffer.from(
                        photo.image
                      ).toString("base64")}`}
                      width={400}
                      height={400}
                    />
                  </a>
                  <Text>{photo.name}</Text>
                </div>
              );
            })}
          </section>
        </div>
      </Layout>
    );
  }
}
module.exports = Index;
