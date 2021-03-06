import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      appointments: [],
      selectedDoctor: {},
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
      .then(doctors => {
        const selectedDoctor = doctors[0];
        const { dFirstName, dLastName } = selectedDoctor;
        document.getElementById("selectedDoctor").innerHTML = `${dFirstName} ${dLastName}`;
        this.setState({ doctors });
      });
  }

  handleGetAppointmentsByDocId(docId) {
    const selectedDoctor = this.state.doctors.filter(doc => doc.id === docId)[0];
    if (selectedDoctor !== undefined) {
      const { dFirstName, dLastName } = selectedDoctor;
      document.getElementById("selectedDoctor").innerHTML = `${dFirstName} ${dLastName}`;
    }
    fetch(`/doctors/${docId}/appointments`)
      .then(response => response.json())
      .then(appointments => this.setState({ appointments }));
  }

  render() {
    const renderDoctors = this.state.doctors.map(doc => {
      const { id, dFirstName, dLastName } = doc;
      return (
        <li key={id} className="doctors" onClick={() => this.handleGetAppointmentsByDocId(id)}>{dLastName}, {dFirstName}</li>
      )
    });

    const renderAppointments = this.state.appointments.map((appt, i) => {
      const { time, pFirstName, pLastName, type } = appt;
      return (
        <li key={i}>{i + 1} {pFirstName} {pLastName} {time} {type}</li>
      )
    });

    return (
      <div className="container">
        <div className="containerLeft">
          <h2>PHYSICIANS</h2>
          {renderDoctors}
        </div>
        <div className="containerRight">
          <h2>APPOINTMENTS</h2>
          <div id="selectedDoctor"></div>
          {renderAppointments}
        </div>
      </div>
    )
  }
}

export default App;
