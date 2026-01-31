// backend/sampleDonors.js

const Donor = require("./models/Donor");

const sampleDonors = [
  // A+
  { 
    name: "Akhil", 
    email: "akhil@example.com",
    phone: "9876543210", 
    bloodGroup: "A+", 
    location: {
      type: "Point",
      coordinates: [78.486, 17.385]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Sneha", 
    email: "sneha@example.com",
    phone: "9876512345", 
    bloodGroup: "A+", 
    location: {
      type: "Point",
      coordinates: [78.448, 17.437]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Ravi", 
    email: "ravi@example.com",
    phone: "9000000001", 
    bloodGroup: "A+", 
    location: {
      type: "Point",
      coordinates: [78.462, 17.421]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Preeti", 
    email: "preeti@example.com",
    phone: "9000000002", 
    bloodGroup: "A+", 
    location: {
      type: "Point",
      coordinates: [78.469, 17.403]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Vinay", 
    email: "vinay@example.com",
    phone: "9000000003", 
    bloodGroup: "A+", 
    location: {
      type: "Point",
      coordinates: [78.479, 17.431]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Swathi", 
    email: "swathi@example.com",
    phone: "9000000004", 
    bloodGroup: "A+", 
    location: {
      type: "Point",
      coordinates: [78.452, 17.388]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Kiran", 
    email: "kiran@example.com",
    phone: "9000000005", 
    bloodGroup: "A+", 
    location: {
      type: "Point",
      coordinates: [78.467, 17.442]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Divya", 
    email: "divya@example.com",
    phone: "9000000006", 
    bloodGroup: "A+", 
    location: {
      type: "Point",
      coordinates: [78.460, 17.398]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Surya", 
    email: "surya@example.com",
    phone: "9000000007", 
    bloodGroup: "A+", 
    location: {
      type: "Point",
      coordinates: [78.440, 17.419]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Neha", 
    email: "neha@example.com",
    phone: "9000000008", 
    bloodGroup: "A+", 
    location: {
      type: "Point",
      coordinates: [78.490, 17.407]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },

  // A-
  { 
    name: "Meena", 
    email: "meena@example.com",
    phone: "7890123456", 
    bloodGroup: "A-", 
    location: {
      type: "Point",
      coordinates: [78.434, 17.426]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Tarun", 
    email: "tarun@example.com",
    phone: "9000000011", 
    bloodGroup: "A-", 
    location: {
      type: "Point",
      coordinates: [78.480, 17.398]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Anjali", 
    email: "anjali@example.com",
    phone: "9000000012", 
    bloodGroup: "A-", 
    location: {
      type: "Point",
      coordinates: [78.465, 17.387]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Gautam", 
    email: "gautam@example.com",
    phone: "9000000013", 
    bloodGroup: "A-", 
    location: {
      type: "Point",
      coordinates: [78.470, 17.400]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Priya", 
    email: "priya@example.com",
    phone: "9000000014", 
    bloodGroup: "A-", 
    location: {
      type: "Point",
      coordinates: [78.459, 17.411]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Teja", 
    email: "teja@example.com",
    phone: "9000000015", 
    bloodGroup: "A-", 
    location: {
      type: "Point",
      coordinates: [78.450, 17.415]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Ishita", 
    email: "ishita@example.com",
    phone: "9000000016", 
    bloodGroup: "A-", 
    location: {
      type: "Point",
      coordinates: [78.461, 17.405]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Naveen", 
    email: "naveen@example.com",
    phone: "9000000017", 
    bloodGroup: "A-", 
    location: {
      type: "Point",
      coordinates: [78.466, 17.417]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Kavya", 
    email: "kavya@example.com",
    phone: "9000000018", 
    bloodGroup: "A-", 
    location: {
      type: "Point",
      coordinates: [78.448, 17.423]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Santosh", 
    email: "santosh@example.com",
    phone: "9000000019", 
    bloodGroup: "A-", 
    location: {
      type: "Point",
      coordinates: [78.455, 17.429]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },

  // B+
  { 
    name: "Raj", 
    email: "raj@example.com",
    phone: "9123456789", 
    bloodGroup: "B+", 
    location: {
      type: "Point",
      coordinates: [78.460, 17.404]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Anu", 
    email: "anu@example.com",
    phone: "9000000020", 
    bloodGroup: "B+", 
    location: {
      type: "Point",
      coordinates: [78.475, 17.401]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Sathya", 
    email: "sathya@example.com",
    phone: "9000000021", 
    bloodGroup: "B+", 
    location: {
      type: "Point",
      coordinates: [78.442, 17.418]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Pavan", 
    email: "pavan@example.com",
    phone: "9000000022", 
    bloodGroup: "B+", 
    location: {
      type: "Point",
      coordinates: [78.453, 17.410]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Nithya", 
    email: "nithya@example.com",
    phone: "9000000023", 
    bloodGroup: "B+", 
    location: {
      type: "Point",
      coordinates: [78.447, 17.412]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Harsha", 
    email: "harsha@example.com",
    phone: "9000000024", 
    bloodGroup: "B+", 
    location: {
      type: "Point",
      coordinates: [78.449, 17.425]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Deepa", 
    email: "deepa@example.com",
    phone: "9000000025", 
    bloodGroup: "B+", 
    location: {
      type: "Point",
      coordinates: [78.444, 17.395]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Lokesh", 
    email: "lokesh@example.com",
    phone: "9000000026", 
    bloodGroup: "B+", 
    location: {
      type: "Point",
      coordinates: [78.468, 17.409]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Ayesha", 
    email: "ayesha@example.com",
    phone: "9000000027", 
    bloodGroup: "B+", 
    location: {
      type: "Point",
      coordinates: [78.470, 17.406]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Farhan", 
    email: "farhan@example.com",
    phone: "9000000028", 
    bloodGroup: "B+", 
    location: {
      type: "Point",
      coordinates: [78.454, 17.440]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },

  // B-
  { 
    name: "Imran", 
    email: "imran@example.com",
    phone: "9012345678", 
    bloodGroup: "B-", 
    location: {
      type: "Point",
      coordinates: [78.456, 17.384]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Suma", 
    email: "suma@example.com",
    phone: "9000000030", 
    bloodGroup: "B-", 
    location: {
      type: "Point",
      coordinates: [78.473, 17.418]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Varun", 
    email: "varun@example.com",
    phone: "9000000031", 
    bloodGroup: "B-", 
    location: {
      type: "Point",
      coordinates: [78.461, 17.423]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Mounika", 
    email: "mounika@example.com",
    phone: "9000000032", 
    bloodGroup: "B-", 
    location: {
      type: "Point",
      coordinates: [78.465, 17.415]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Zain", 
    email: "zain@example.com",
    phone: "9000000033", 
    bloodGroup: "B-", 
    location: {
      type: "Point",
      coordinates: [78.478, 17.410]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Arjun", 
    email: "arjun@example.com",
    phone: "9000000034", 
    bloodGroup: "B-", 
    location: {
      type: "Point",
      coordinates: [78.459, 17.402]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Nikita", 
    email: "nikita@example.com",
    phone: "9000000035", 
    bloodGroup: "B-", 
    location: {
      type: "Point",
      coordinates: [78.452, 17.396]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Ramesh", 
    email: "ramesh@example.com",
    phone: "9000000036", 
    bloodGroup: "B-", 
    location: {
      type: "Point",
      coordinates: [78.467, 17.390]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Keerthi", 
    email: "keerthi@example.com",
    phone: "9000000037", 
    bloodGroup: "B-", 
    location: {
      type: "Point",
      coordinates: [78.460, 17.445]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Shankar", 
    email: "shankar@example.com",
    phone: "9000000038", 
    bloodGroup: "B-", 
    location: {
      type: "Point",
      coordinates: [78.469, 17.436]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },

  // O+
  { 
    name: "Kalyan", 
    email: "kalyan@example.com",
    phone: "9000000040", 
    bloodGroup: "O+", 
    location: {
      type: "Point",
      coordinates: [78.462, 17.428]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Rohit", 
    email: "rohit@example.com",
    phone: "9000000041", 
    bloodGroup: "O+", 
    location: {
      type: "Point",
      coordinates: [78.460, 17.417]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Bhanu", 
    email: "bhanu@example.com",
    phone: "9000000042", 
    bloodGroup: "O+", 
    location: {
      type: "Point",
      coordinates: [78.448, 17.426]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Lavanya", 
    email: "lavanya@example.com",
    phone: "9000000043", 
    bloodGroup: "O+", 
    location: {
      type: "Point",
      coordinates: [78.450, 17.416]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Nikhil", 
    email: "nikhil@example.com",
    phone: "9000000044", 
    bloodGroup: "O+", 
    location: {
      type: "Point",
      coordinates: [78.447, 17.405]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Sravani", 
    email: "sravani@example.com",
    phone: "9000000045", 
    bloodGroup: "O+", 
    location: {
      type: "Point",
      coordinates: [78.459, 17.407]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Aarti", 
    email: "aarti@example.com",
    phone: "9000000046", 
    bloodGroup: "O+", 
    location: {
      type: "Point",
      coordinates: [78.463, 17.402]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Dinesh", 
    email: "dinesh@example.com",
    phone: "9000000047", 
    bloodGroup: "O+", 
    location: {
      type: "Point",
      coordinates: [78.466, 17.395]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Pallavi", 
    email: "pallavi@example.com",
    phone: "9000000048", 
    bloodGroup: "O+", 
    location: {
      type: "Point",
      coordinates: [78.460, 17.438]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Ritika", 
    email: "ritika@example.com",
    phone: "9000000049", 
    bloodGroup: "O+", 
    location: {
      type: "Point",
      coordinates: [78.458, 17.432]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },

  // O-
  { 
    name: "Karthik", 
    email: "karthik@example.com",
    phone: "9000012345", 
    bloodGroup: "O-", 
    location: {
      type: "Point",
      coordinates: [78.4746, 17.4123]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Vamsi", 
    email: "vamsi@example.com",
    phone: "9000000051", 
    bloodGroup: "O-", 
    location: {
      type: "Point",
      coordinates: [78.471, 17.414]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Gayathri", 
    email: "gayathri@example.com",
    phone: "9000000052", 
    bloodGroup: "O-", 
    location: {
      type: "Point",
      coordinates: [78.449, 17.422]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Sandeep", 
    email: "sandeep@example.com",
    phone: "9000000053", 
    bloodGroup: "O-", 
    location: {
      type: "Point",
      coordinates: [78.450, 17.419]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Vani", 
    email: "vani@example.com",
    phone: "9000000054", 
    bloodGroup: "O-", 
    location: {
      type: "Point",
      coordinates: [78.468, 17.410]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Rekha", 
    email: "rekha@example.com",
    phone: "9000000055", 
    bloodGroup: "O-", 
    location: {
      type: "Point",
      coordinates: [78.471, 17.399]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Ajay", 
    email: "ajay@example.com",
    phone: "9000000056", 
    bloodGroup: "O-", 
    location: {
      type: "Point",
      coordinates: [78.470, 17.432]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Manoj", 
    email: "manoj@example.com",
    phone: "9000000057", 
    bloodGroup: "O-", 
    location: {
      type: "Point",
      coordinates: [78.475, 17.438]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Anusha", 
    email: "anusha@example.com",
    phone: "9000000058", 
    bloodGroup: "O-", 
    location: {
      type: "Point",
      coordinates: [78.461, 17.437]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Soni", 
    email: "soni@example.com",
    phone: "9000000059", 
    bloodGroup: "O-", 
    location: {
      type: "Point",
      coordinates: [78.455, 17.403]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },

  // AB+
  { 
    name: "Pooja", 
    email: "pooja@example.com",
    phone: "9345678901", 
    bloodGroup: "AB+", 
    location: {
      type: "Point",
      coordinates: [78.5010, 17.385044]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Harini", 
    email: "harini@example.com",
    phone: "9000000061", 
    bloodGroup: "AB+", 
    location: {
      type: "Point",
      coordinates: [78.469, 17.436]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Sudheer", 
    email: "sudheer@example.com",
    phone: "9000000062", 
    bloodGroup: "AB+", 
    location: {
      type: "Point",
      coordinates: [78.447, 17.437]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Sunitha", 
    email: "sunitha@example.com",
    phone: "9000000063", 
    bloodGroup: "AB+", 
    location: {
      type: "Point",
      coordinates: [78.455, 17.425]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Ritika", 
    email: "ritika2@example.com",
    phone: "9000000064", 
    bloodGroup: "AB+", 
    location: {
      type: "Point",
      coordinates: [78.463, 17.430]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Bharath", 
    email: "bharath@example.com",
    phone: "9000000065", 
    bloodGroup: "AB+", 
    location: {
      type: "Point",
      coordinates: [78.453, 17.400]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Kavitha", 
    email: "kavitha@example.com",
    phone: "9000000066", 
    bloodGroup: "AB+", 
    location: {
      type: "Point",
      coordinates: [78.472, 17.426]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Rahul", 
    email: "rahul@example.com",
    phone: "9000000067", 
    bloodGroup: "AB+", 
    location: {
      type: "Point",
      coordinates: [78.459, 17.411]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Ashwin", 
    email: "ashwin@example.com",
    phone: "9000000068", 
    bloodGroup: "AB+", 
    location: {
      type: "Point",
      coordinates: [78.444, 17.402]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Ragini", 
    email: "ragini@example.com",
    phone: "9000000069", 
    bloodGroup: "AB+", 
    location: {
      type: "Point",
      coordinates: [78.462, 17.407]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },

  // AB-
  { 
    name: "Divya", 
    email: "divya2@example.com",
    phone: "9876001234", 
    bloodGroup: "AB-", 
    location: {
      type: "Point",
      coordinates: [78.4932, 17.3971]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Chaitanya", 
    email: "chaitanya@example.com",
    phone: "9000000071", 
    bloodGroup: "AB-", 
    location: {
      type: "Point",
      coordinates: [78.460, 17.434]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Shreya", 
    email: "shreya@example.com",
    phone: "9000000072", 
    bloodGroup: "AB-", 
    location: {
      type: "Point",
      coordinates: [78.445, 17.417]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Tarika", 
    email: "tarika@example.com",
    phone: "9000000073", 
    bloodGroup: "AB-", 
    location: {
      type: "Point",
      coordinates: [78.467, 17.430]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Ashok", 
    email: "ashok@example.com",
    phone: "9000000074", 
    bloodGroup: "AB-", 
    location: {
      type: "Point",
      coordinates: [78.453, 17.408]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Kiran", 
    email: "kiran2@example.com",
    phone: "9000000075", 
    bloodGroup: "AB-", 
    location: {
      type: "Point",
      coordinates: [78.470, 17.429]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Sonia", 
    email: "sonia@example.com",
    phone: "9000000076", 
    bloodGroup: "AB-", 
    location: {
      type: "Point",
      coordinates: [78.469, 17.421]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Mahesh", 
    email: "mahesh@example.com",
    phone: "9000000077", 
    bloodGroup: "AB-", 
    location: {
      type: "Point",
      coordinates: [78.455, 17.424]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Deepthi", 
    email: "deepthi@example.com",
    phone: "9000000078", 
    bloodGroup: "AB-", 
    location: {
      type: "Point",
      coordinates: [78.474, 17.412]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  },
  { 
    name: "Sharath", 
    email: "sharath@example.com",
    phone: "9000000079", 
    bloodGroup: "AB-", 
    location: {
      type: "Point",
      coordinates: [78.448, 17.403]
    },
    address: "Hyderabad, Telangana",
    isAvailable: true
  }
];

const insertSampleDonors = async () => {
  const count = await Donor.countDocuments();
  if (count === 0) {
    await Donor.insertMany(sampleDonors);
    console.log("✅ 80 Sample donors inserted.");
  } else {
    console.log("⚠️ Sample donors already exist.");
  }
};

module.exports = insertSampleDonors;
