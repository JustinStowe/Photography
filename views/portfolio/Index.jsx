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
