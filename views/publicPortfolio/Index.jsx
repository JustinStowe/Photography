/** @format */

const React = require("react");
const Layout = require("../components/DefaultLayout");
class Index extends React.Component {
  render() {
    const { Photo } = this.props;
    // const isAuthenticated = logStatus(); isAuthenticated={isAuthenticated}
    return (
      <Layout>
        <div>
          <div className="flex justify-center">
            <h1 className="font-sans text-3xl mb-5 ">Picture portfolio Page</h1>
          </div>
          <section className=" flex basis-auto flex-wrap m-4 p-2 justify-center">
            {this.props.photos.map((photo, i) => {
              return (
                <div className="bg-tagBackground m-2 p-1" key={i}>
                  <a href={`/home/${photo.id}`}>
                    <img
                      src={`data:${photo.contentType};base64,${Buffer.from(
                        photo.image
                      ).toString("base64")}`}
                      width={400}
                      height={400}
                    />
                  </a>
                  <p>{photo.name}</p>
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
