class Doctors {
  constructor() {
    this.doctors = [
      {
        id: 1,
        dFirstName: 'd1First',
        dLastName: 'd1Last',
        appointments: [{
          time: "8:00AM",
          year: 2019,
          month: 2,
          day: 3,
          pFirstName: "Tim",
          pLastName: "Lin",
          type: "New Patient",
        },
        {
          time: "8:00AM",
          year: 2019,
          month: 2,
          day: 3,
          pFirstName: "Awef",
          pLastName: "Weaf",
          type: "New Patient",
        },
        {
          time: "8:00AM",
          year: 2019,
          month: 2,
          day: 3,
          pFirstName: "Veewef",
          pLastName: "Lieefefn",
          type: "New Patient",
        }],
      },
      {
        id: 2,
        dFirstName: 'd2First',
        dLastName: 'd2Last',
        appointments: [{
          time: "10:00AM",
          year: 2019,
          month: 2,
          day: 3,
          pFirstName: "FirstName",
          pLastName: "LastName",
          type: "Follow-Up",
        }],
      },
      {
        id: 3,
        dFirstName: 'd3First',
        dLastName: 'd3Last',
        appointments: [{
          time: "11:00AM",
          year: 2019,
          month: 2,
          day: 3,
          pFirstName: "Fred",
          pLastName: "Fred",
          type: "New Patient",
        },
        {
          time: "01:00pm",
          year: 2019,
          month: 2,
          day: 3,
          pFirstName: "Lana",
          pLastName: "Kane",
          type: "Follow-Up",
        },
        {
          time: "02:00PM",
          year: 2019,
          month: 2,
          day: 3,
          pFirstName: "Pam",
          pLastName: "Poovey",
          type: "New Patient",
        }],
      },
    ]
  }

  getDoctors() {
    return this.doctors.map(doc => {
      return {
        id: doc.id,
        dFirstName: doc.dFirstName,
        dLastName: doc.dLastName,
      }
    })
  }

  getDoctorsByDocId(docId) {
    return this.doctors.filter(doc => doc.id === docId)[0];
  }

}

module.exports = Doctors;
