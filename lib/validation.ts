import { z } from "zod";

export const LoginFormValidation = z.object({
  username: z
    .string()
    .min(1, "Username is required") 
    .min(3, "Username must be at least 3 characters long") 
    .max(20, "Username cannot exceed 20 characters"), 
  
  password: z
    .string()
    .min(1, "Password is required") 
});


export const VehicleSchema = z.object({
  vin: z.string().min(1, "VIN is required").max(255, "VIN must be less than 255 characters"),
  vehicleNumberPlate: z.string().min(1, "Vehicle number plate is required").max(255, "Vehicle number plate must be less than 255 characters"),
  make: z.string().min(1, "Make is required").max(255, "Make must be less than 255 characters"),
  model: z.string().min(1, "Model is required").max(255, "Model must be less than 255 characters"),
  yearOfManufacture: z.string().length(4, "Year of manufacture must be 4 digits"),
  fuelType: z.string().min(1, "Fuel type is required").max(255, "Fuel type must be less than 255 characters"),
  typeOfVehicle: z.string().min(1, "Vehicle type is required").max(255, "Vehicle type must be less than 255 characters"),
  registrationDate: z.date().optional(), 
  vehicleStatus: z.string().min(1, "Vehicle status is required").max(255, "Vehicle status must be less than 255 characters"),
  assignedDriver: z.object({ 
    id: z.string(),
    name: z.string(),
    image: z.string(),
  }).optional(),
 assignedJanitors: z.array(z.object({ 
  id: z.string(),
  name: z.string(),
  image: z.string(),
}).optional(),),
});


export const fuelingFormSchema = z.object({
  vin: z.string(), 
  driverName: z.string(), 
  fuelType: z.enum(["Diesel", "Petrol"]), 
  fuelPurchasedLitres: z.number().positive(), 
  fuelCostGHS: z.number().positive(), 
  fuelStationName: z.string(), 
  // fuelingLocation: z.object({
  //   gps: z.string(), 
  //   address: z.string(), 
  // }),
  paymentMethod: z.string().nullable(), 
  noteRemark: z.string().optional(), 
});


export const staffMemberSchema = z.object({
  // staffId: z.string().min(1, "Staff ID is required"),
  Name: z.string().min(1, "Name is required"),
  Role: z.string().min(1, "Role is required"),
  VIN: z.string().min(1, "Vehicle Identification Number is required"),
  WorkedHours: z.string().min(1, "Hours Worked (Per Shift) is required"),
  Wages: z.string().min(1, "Wages (GHS) is required"),
  AssignedDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Date Assigned must be a valid date",
  }),
  Phone: z.string().min(1, "Phone No. is required"),
  Email: z.string().email("Email must be a valid email address"),
  Qualifications: z.string().min(1, "Qualifications are required"),
});

export const maintenanceRecordSchema = z.object({
  date: z.string().min(1, "Date is required").regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  vin: z.string().min(1, "VIN is required"),
  driverName: z.string().min(1, "Driver name is required"),
  maintenanceType: z.string().min(1, "Maintenance type is required"),
  descriptionOfWorkDone: z.string().optional(),  // Optional field
  partsReplacedServiced: z.string().optional(), // Optional array of strings
  costOfMaintenance: z.number().min(0, "Cost of maintenance must be a positive number"),
  serviceProvider: z.string().min(1, "Service provider is required"),
  technicianName: z.string().min(1, "Technician name is required"),
  serviceLocation: z.string().min(1, "Service location is required"),
  nextScheduledMaintenance: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)").optional(),
  notesRemarks: z.string().optional() // Optional field
});

export const licenseCostSchema = z.object({
  vin: z.string().min(1, "VIN is required"),
  licenseType: z.string(),
  licenseNumber: z.string(),
  issuingAuthority: z.string(),
  licenseIssueDate: z.string(), 
  licenseExpiryDate: z.string(), 
  licenseCost: z.number().min(0, "License cost must be a positive number"),
  renewalCost: z.number().min(0, "Renewal cost must be a positive number"),
  paymentDate: z.string(), 
  paymentMode: z.string(),
  finesPenalties: z.number().min(0, "Fines/Penalties must be a positive number"),
  licensingLocation: z.string(),
  notesRemarks: z.string().optional(),
});
