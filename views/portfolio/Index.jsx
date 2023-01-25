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
          <div className="flex justify-center overflow-auto ... overscroll-contain max-h-96 border-solid border-8 border-blue-700">
            <ul>
              {Photo.map((Photo, i) => {
                return (
                  <li key={i}>
                    <strong>Photo: </strong> {Photo.image}
                    <br />
                    <strong>Photo:</strong>{" "}
                    <a
                      className="text-sky-700 #1d4ed8bg-sky-500 hover:bg-sky-500 ..."
                      href={`/home/${Photo}.id}`}
                    >
                      {" "}
                      {Photo.name}{" "}
                    </a>{" "}
                    <br />
                    <strong>Photo Date: </strong> {Photo.date}
                    <br />
                    <form
                      action={`/home/${Photo._id}?_method=DELETE`}
                      method="POST"
                    >
                      <input
                        className="text-rose-600 #1d4ed8bg-sky-500 hover:bg-rose-300 ..."
                        type="submit"
                        value="DELETE"
                      />
                    </form>
                    <form action={`/home/${Photo._id}/edit`} method="GET">
                      <input
                        className="text-green-500 #1d4ed8bg-sky-500 hover:bg-green-300 ..."
                        type="submit"
                        value="UPDATE"
                      />
                    </form>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex justify-center  mt-10 ">
            <nav>
              <a
                className="font-sans text-3xl text-green-400  #1d4ed8bg-sky-500 hover:bg-indigo-700 ... underline"
                href="/Photos/New"
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
