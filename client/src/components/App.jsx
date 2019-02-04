import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('/doctors')
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        apoweifjw
      </div>
    )
  }
}

export default App;
