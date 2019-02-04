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
        <li key={id} onClick={() => this.handleGetAppointmentsByDocId(id)}>{dLastName}, {dFirstName}</li>
      )
    });

    const renderAppointments = this.state.appointments.map((appt, i) => {
      const { time, pFirstName, pLastName, type } = appt;
      return (
        <li key={i}>{i + 1} {pFirstName} {pLastName} {time} {type}</li>
      )
    });

    return (
      <div>
        <h2>PHYSICIANS</h2>
        {renderDoctors}
        <h2>APPOINTMENTS</h2>
        {renderAppointments}
      </div>
    )
  }
}

export default App;
