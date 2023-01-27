/** @format */

const React = require("react");
const DefaultLayout = require("../components/DefaultLayout");

class Show extends React.Component {
  render() {
    const { photo } = this.props;

    return (
      <DefaultLayout title="photo show page">
        <nav>
          <a
            className="px-5 m-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            href="/home"
          >
            Back
          </a>
        </nav>
        <section className="flex flex-col items-center justify-items-center ">
          <div>
            <img
              src={`data:${photo.contentType};base64,${Buffer.from(
                photo.image
              ).toString("base64")}`}
              width={400}
              height={400}
            />
            <h1>{photo.name}</h1>
            <h2>{photo.date}</h2>
          </div>

          <div className="flex">
            <a
              className=" px-5 m-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              href={`/home/${photo.id}/edit`}
            >
              edit photo details
            </a>
            <form action={`/home/${photo.id}?_method=DELETE`} method="POST">
              <input
                type="submit"
                value="Delete"
                className=" px-5 m-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              />
            </form>
          </div>
        </section>
      </DefaultLayout>
    );
  }
}

module.exports = Show;
