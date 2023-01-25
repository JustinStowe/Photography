/** @format */

const React = require("react");
const DefaultLayout = require("../layout/Default");

class Show extends React.Component {
  render() {
    const { _id, name, date, image } = this.props.photo;

    return (
      <DefaultLayout title="photo show page">
        <nav>
          <a href="/home">Back</a>
        </nav>
        <div>
          <img src={image} width={200} height={200} />
          <h1>{name}</h1>
          <h2>{date}</h2>
        </div>
        <div>
          <a href={`/home/${id}/edit`}>edit photo details</a>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Show;
