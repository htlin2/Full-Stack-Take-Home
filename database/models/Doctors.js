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
          type: "New",
        },
        {
          time: "8:00AM",
          year: 2019,
          month: 2,
          day: 3,
          pFirstName: "awef",
          pLastName: "weaf",
          type: "New",
        },
        {
          time: "8:00AM",
          year: 2019,
          month: 2,
          day: 3,
          pFirstName: "veewef",
          pLastName: "Lieefefn",
          type: "New",
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
          pFirstName: "p2LastName",
          pLastName: "p2LastName",
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
          pFirstName: "p3FirstName",
          pLastName: "p3LastName",
          type: "New",
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
