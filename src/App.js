import React from "react";

class App extends React.Component {
  state = {
    users: [],
  };

  baseURL = "https://jsonplaceholder.typicode.com/users";

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", this.baseURL, true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.response);

        this.setState({
          users,
        });
      }
    };
    xhr.send();
  }

  render() {
    const users = this.state.users.map((user) => (
      <div>
        <h3>{user.name}</h3>
        <p>{user.address.street}</p>
      </div>
    ));
    return <div>{users}</div>;
  }
}

export default App;
