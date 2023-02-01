/** @format */

const React = require("react");
const DefaultLayout = require("../components/DefaultLayout");
const Button = require("../components/Button");
class UserShow extends React.Component {
  render() {
    const { User } = this.props;

    return (
      <DefaultLayout title="User show page">
        <nav>
          <a href="/home">
            <Button>back</Button>
          </a>
        </nav>
        <section className="flex flex-col items-center justify-items-center ">
          <div>
            <h1>{User.name}</h1>
            <h2>{User.phone}</h2>
            <h2>{User.email}</h2>
            <ul>
              {User.projectId.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
            <h2>{User.projectId}</h2>
          </div>
          <form action=""></form>
          <div className="flex">
            <a href={`/home/${User.id}/edit`}>
              <Button>Edit Photo</Button>
            </a>
            <form action={`/home/${User.id}?_method=DELETE`} method="POST">
              <Button>
                <input type="submit" value="Delete" />
              </Button>
            </form>
          </div>
        </section>
      </DefaultLayout>
    );
  }
}

module.exports = UserShow;
