/** @format */

const React = require("react");
const Layout = require("../components/DefaultLayout");
class customerAccounts extends React.Component {
  render() {
    const { User } = this.props;
    // const isAuthenticated = logStatus(); isAuthenticated={isAuthenticated}
    return (
      <Layout title="customer page">
        <div>
          <div className="flex justify-center"></div>
          <section className=" flex basis-auto flex-wrap m-4 p-2 justify-center">
            {this.props.users.map((User, i) => {
              return (
                <div className="bg-tagBackground m-2 p-1" key={i}>
                  <a href={`/home/${User.id}`}>`${User.name}`</a>
                </div>
              );
            })}
          </section>
        </div>
      </Layout>
    );
  }
}
module.exports = customerAccounts;
