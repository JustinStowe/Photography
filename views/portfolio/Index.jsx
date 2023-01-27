/** @format */

const React = require("react");
const Layout = require("../components/DefaultLayout");

class Index extends React.Component {
  render() {
    const { Photo } = this.props;
    return (
      <Layout>
        <div>
          <div className="flex justify-center">
            <h1 className="font-sans text-3xl mb-5 ">Picture portfolio Page</h1>
          </div>
          <section className="border border-black flex justify-around item-around flex-wrap: wrap m-4 p-2">
            <ul className="flex">
              {this.props.photos.map((photo, i) => {
                return (
                  <li className="bg-tagBackground m-2 p-1" key={i}>
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
                  </li>
                );
              })}
            </ul>
          </section>
          <div className="flex justify-center  mt-10 ">
            <nav>
              <a
                className="font-sans text-3xl text-green-400  #1d4ed8bg-sky-500 hover:bg-indigo-700 ... underline"
                href="/home/New"
              >
                Upload new photo
              </a>
            </nav>
          </div>
        </div>
      </Layout>
    );
  }
}
module.exports = Index;
