import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      appointments: [],
    }
  }

  componentDidMount() {
    fetch('/doctors')
      .then(response => response.json())
      .then(doctors => this.setState({ doctors }));
  }

  handleGetAppointmentsByDocId() {
    fetch('/doctors/1/appointments')
      .then(response => response.json())
      .then(appointments => this.setState({ appointments }));
  }

  render() {
    console.log(this.state.doctors);
    console.log(this.state.appointments);
    return (
      <div>
        <h2>PHYSICIANS</h2>

      </div>
    )
  }
}

export default App;
