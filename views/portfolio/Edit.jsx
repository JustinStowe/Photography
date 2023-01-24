/** @format */

const React = require("react");
const Layout = require("../components/DefaultLayout");

class Edit extends React.Component {
  render() {
    const { name, image, date, _id } = this.props.vampire;

    return (
      <Layout>
        <h1>{title} Edit Page</h1>
        <form action={`/home/${_id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={name} />
          <br />
          Image: <input type="file" name="image" defaultValue={image} />
          <br />
          Date: <input type="datetime-local" name="date" defaultValue={date} />
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </Layout>
    );
  }
}

module.exports = Edit;
