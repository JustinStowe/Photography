/** @format */

const React = require("react");
const PublicLayout = require("../components/PublicLayout");
const Button = require("../components/Button");
class Show extends React.Component {
  render() {
    const { photo } = this.props;

    return (
      <PublicLayout title="photo show page">
        <nav>
          <a href="/home">
            <Button>back</Button>
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
        </section>
      </PublicLayout>
    );
  }
}

module.exports = Show;
