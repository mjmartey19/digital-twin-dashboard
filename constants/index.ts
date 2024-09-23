export const vehiclesData = [
  {
    vin: "1HGCM82633A123456",
    vehicleNumberPlate: "AB123CD",
    make: "Toyota",
    model: "Hilux",
    yearOfManufacture: "2019",
    fuelType: "Diesel",
    typeOfVehicle: "Truck",
    registrationDate: "2020-03-15",
    vehicleStatus: "En Route",
    assignedDriver: { id: "d1" , name: "David Little",  image: "/assets/images/dr-livingston.png"},
    assignedJanitors: [
      { id: "j1", name: "David Clark", image: "/assets/images/dr-livingston.png" },
      { id: "j2", name: "Elliot Lassey", image: "/assets/images/dr-cameron.png" },
      { id: "j3", name: "Edward Danquah", image: "/assets/images/dr-cruz.png" },
    ],
  },
  {
    vin: "2FDKF37M3PCA12345",
    vehicleNumberPlate: "EF456GH",
    make: "Ford",
    model: "F-150",
    yearOfManufacture: "2015",
    fuelType: "Petrol",
    typeOfVehicle: "Truck",
    registrationDate: "2016-08-20",
    vehicleStatus: "Available",
     assignedDriver: { id: "d2", name: "Michael Brown", image: "/assets/images/dr-peter.png" },
    assignedJanitors: [
      { id: "j1", name: "David Clark", image: "/assets/images/dr-lee.png" },
      { id: "j2", name: "Elliot Lassey", image: "/assets/images/dr-peter.png" },
    ],
  },
  {
    vin: "JM1FE17N450123456",
    vehicleNumberPlate: "IJ789KL",
    make: "Mazda",
    model: "RX-8",
    yearOfManufacture: "2004",
    fuelType: "Diesel",
    typeOfVehicle: "Tricycle",
    registrationDate: "2005-05-10",
    vehicleStatus: "Out of Service",
    assignedDriver: { id: "d3", name: "Lydia Kai", image: "/assets/images/dr-green.png" },
    assignedJanitors: [
      { id: "j4", name: "Emily Davis", image: "/assets/images/dr-remirez.png" },
    ],
  },
  {
    vin: "JH4KA9650MC123456",
    vehicleNumberPlate: "MN012OP",
    make: "Honda",
    model: "Civic",
    yearOfManufacture: "2010",
    fuelType: "Diesel",
    typeOfVehicle: "Truck",
    registrationDate: "2011-12-05",
    vehicleStatus: "In Maintenance",
    assignedDriver:   { id: "d4", name: "Elliot Green", image: "/assets/images/dr-green.png" },
    assignedJanitors: [
      { id: "j5", name: "Sarah Wilson", image: "/assets/images/dr-cruz.png" },
    ],
  },
  // {
  //   vin: "JH4KA9650MC123456",
  //   vehicleNumberPlate: "MN012OP",
  //   make: "Honda",
  //   model: "Civic",
  //   yearOfManufacture: "2010",
  //   fuelType: "Diesel",
  //   typeOfVehicle: "Truck",
  //   registrationDate: "2011-12-05",
  //   vehicleStatus: "In Maintenance",
  //   assignedDriver:   { id: "d4", image: "/assets/images/dr-green.png", name: "Elliot Green" },
  //   assignedJanitors: [
  //     { id: "j5", name: "Sarah Wilson", image: "/assets/images/dr-cruz.png" },
  //   ],
  // },
  // {
  //   vin: "JH4KA9650MC123456",
  //   vehicleNumberPlate: "MN012OP",
  //   make: "Honda",
  //   model: "Civic",
  //   yearOfManufacture: "2010",
  //   fuelType: "Diesel",
  //   typeOfVehicle: "Truck",
  //   registrationDate: "2011-12-05",
  //   vehicleStatus: "In Maintenance",
  //   assignedDriver:   { id: "d4", image: "/assets/images/dr-green.png", name: "Elliot Green" },
  //   assignedJanitors: [
  //     { id: "j5", name: "Sarah Wilson", image: "/assets/images/dr-cruz.png" },
  //   ],
  // },
  // {
  //   vin: "JH4KA9650MC123456",
  //   vehicleNumberPlate: "MN012OP",
  //   make: "Honda",
  //   model: "Civic",
  //   yearOfManufacture: "2010",
  //   fuelType: "Diesel",
  //   typeOfVehicle: "Truck",
  //   registrationDate: "2011-12-05",
  //   vehicleStatus: "In Maintenance",
  //   assignedDriver:   { id: "d4", image: "/assets/images/dr-green.png", name: "Elliot Green" },
  //   assignedJanitors: [
  //     { id: "j5", name: "Sarah Wilson", image: "/assets/images/dr-cruz.png" },
  //   ],
  // },
  // {
  //   vin: "JH4KA9650MC123456",
  //   vehicleNumberPlate: "MN012OP",
  //   make: "Honda",
  //   model: "Civic",
  //   yearOfManufacture: "2010",
  //   fuelType: "Diesel",
  //   typeOfVehicle: "Truck",
  //   registrationDate: "2011-12-05",
  //   vehicleStatus: "In Maintenance",
  //   assignedDriver:   { id: "d4", image: "/assets/images/dr-green.png", name: "Elliot Green" },
  //   assignedJanitors: [
  //     { id: "j5", name: "Sarah Wilson", image: "/assets/images/dr-cruz.png" },
  //   ],
  // },

];

export const FuelTypes = [
  "Petrol",
  "Diesel",
  "Electrical",
];

export const VehicleTypes = [
  "Truck",
  "Tricycle"
]

export const VehicleStatus = [
  "Available",
  "En Route",
  "Out of Service",
  "In Maintenance"
]

export const Drivers = [
  { id: "d1", name: "David Little", image: "/assets/images/dr-livingston.png" },
   { id: "d2", name: "Michael Brown", image: "/assets/images/dr-peter.png" },
  { id: "d3", name: "Lydia Kai", image: "/assets/images/dr-cameron.png" },
  { id: "d4", name: "Elliot Green", image: "/assets/images/dr-green.png" },
  { id: "d5", name: "Peter Kwaku",image: "/assets/images/dr-peter.png" },
  { id: "d6", name: "Edward Danquah", image: "/assets/images/dr-powell.png" },
  { id: "d7", name: "Ramada Atu", image: "/assets/images/dr-remirez.png"},
  { id: "d8", name: "Jennfia Emefa", image: "/assets/images/dr-lee.png" },
  { id: "d9", name: "Ali Seidu", image: "/assets/images/dr-cruz.png" },
  { id: "d10", name: "Emmanuel Bafoah",  image: "/assets/images/dr-sharma.png" },
];

export const Janitors = [
  { id: "j1", image: "/assets/images/dr-livingston.png", name: "David Livingston" },
  { id: "j2", image: "/assets/images/dr-peter.png", name: "Evan Peter" },
  { id: "j3", image: "/assets/images/dr-green.png", name: "John Green" },
  { id: "j4", image: "/assets/images/dr-cameron.png", name: "Leila Cameron" },
  { id: "j5", image: "/assets/images/dr-lee.png", name: "Jasmine Lee" },
  { id: "j6", image: "/assets/images/dr-powell.png", name: "Jane Powell" },
  { id: "j7", image: "/assets/images/dr-cruz.png", name: "Alyana Cruz" },
  { id: "j8", image: "/assets/images/dr-sharma.png", name: "Hardik Sharma" },
  { id: "j9", image: "/assets/images/dr-remirez.png", name: "Alex Ramirez" },
];
