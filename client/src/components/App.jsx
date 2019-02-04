import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      appointments: [],
    }

    this.handleGetAllDoctors = this.handleGetAllDoctors.bind(this);
    this.handleGetAppointmentsByDocId = this.handleGetAppointmentsByDocId.bind(this);
  }

  componentDidMount() {
    this.handleGetAllDoctors();
    this.handleGetAppointmentsByDocId(1);
  }

  handleGetAllDoctors() {
    fetch('/doctors')
      .then(response => response.json())
      .then(doctors => this.setState({ doctors }));
  }

  handleGetAppointmentsByDocId(docId) {
    fetch(`/doctors/${docId}/appointments`)
      .then(response => response.json())
      .then(appointments => this.setState({ appointments }));
  }

  render() {
    const renderDoctors = this.state.doctors.map(doc => {
      const { id, dFirstName, dLastName } = doc;
      return (
        <li key={id}>{dLastName}, {dFirstName}</li>
      )
    });
    console.log(this.state.doctors);
    console.log(this.state.appointments);
    return (
      <div>
        <h2>PHYSICIANS</h2>
        {renderDoctors}
      </div>
    )
  }
}

export default App;
