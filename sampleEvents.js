const Event = require('./models/Event');

async function insertSampleEvents() {
  try {
    const count = await Event.countDocuments();
    if (count === 0) {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const nextWeek = new Date(today);
      nextWeek.setDate(nextWeek.getDate() + 7);

      const sampleEvents = [
        {
          title: "Community Blood Drive",
          date: tomorrow,
          time: {
            start: "09:00",
            end: "17:00"
          },
          location: {
            name: "City Hospital",
            address: "123 Main St, City Center",
            coordinates: {
              lat: 12.9716,
              lng: 77.5946
            }
          },
          description: "Join us for our monthly community blood drive. All blood types are welcome!",
          organizer: {
            name: "City Hospital Blood Bank",
            contact: "080-12345678"
          },
          capacity: 50,
          registeredDonors: 0,
          status: "upcoming"
        },
        {
          title: "University Blood Donation Camp",
          date: nextWeek,
          time: {
            start: "10:00",
            end: "16:00"
          },
          location: {
            name: "State University Campus",
            address: "456 University Ave",
            coordinates: {
              lat: 12.9634,
              lng: 77.6102
            }
          },
          description: "Special blood donation camp organized for university students and staff.",
          organizer: {
            name: "Red Cross Society",
            contact: "080-87654321"
          },
          capacity: 100,
          registeredDonors: 0,
          status: "upcoming"
        },
        {
          title: "Corporate Blood Donation Drive",
          date: today,
          time: {
            start: "11:00",
            end: "15:00"
          },
          location: {
            name: "Tech Park",
            address: "789 Tech Park Road",
            coordinates: {
              lat: 12.9516,
              lng: 77.5846
            }
          },
          description: "Blood donation drive for corporate employees. Walk-ins welcome!",
          organizer: {
            name: "Life Blood Bank",
            contact: "080-98765432"
          },
          capacity: 75,
          registeredDonors: 0,
          status: "ongoing"
        }
      ];

      await Event.insertMany(sampleEvents);
      console.log("Sample events data inserted successfully");
    }
  } catch (error) {
    console.error("Error inserting sample events:", error);
  }
}

module.exports = insertSampleEvents;
