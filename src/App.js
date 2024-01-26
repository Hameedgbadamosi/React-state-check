import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A passionate React developer',
        imgSrc: 'https://example.com/avatar.jpg',
        profession: 'Software Engineer',
      },
      show: false,
      mountTime: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({}), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleToggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show, mountTime } = this.state;

    return (
      <div>
        <h1>My Profile</h1>
        <button onClick={this.handleToggleShow}>
          Toggle Profile {show ? 'Hide' : 'Show'}
        </button>

        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
            <img src={person.imgSrc} alt={person.fullName} />

            <p>
              Time since mount:{' '}
              {Math.floor((new Date() - mountTime) / 1000)} seconds
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default App;