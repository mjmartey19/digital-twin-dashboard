import { z } from "zod";

export const LoginFormValidation = z.object({
  username: z
    .string()
    .min(1, "Username is required")
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username cannot exceed 20 characters"),

  password: z.string().min(1, "Password is required"),
});

export const VehicleSchema = z.object({
  vin: z
    .string()
    .min(1, "VIN is required")
    .max(255, "VIN must be less than 255 characters"),
  vehicleNumberPlate: z
    .string()
    .min(1, "Vehicle number plate is required")
    .max(255, "Vehicle number plate must be less than 255 characters"),
  make: z
    .string()
    .min(1, "Make is required")
    .max(255, "Make must be less than 255 characters"),
  model: z
    .string()
    .min(1, "Model is required")
    .max(255, "Model must be less than 255 characters"),
  yearOfManufacture: z
    .string()
    .length(4, "Year of manufacture must be 4 digits"),
  fuelType: z
    .string()
    .min(1, "Fuel type is required")
    .max(255, "Fuel type must be less than 255 characters"),
  typeOfVehicle: z
    .string()
    .min(1, "Vehicle type is required")
    .max(255, "Vehicle type must be less than 255 characters"),
  registrationDate: z.date().optional(),
  vehicleStatus: z
    .string()
    .min(1, "Vehicle status is required")
    .max(255, "Vehicle status must be less than 255 characters"),
  assignedDriver: z
    .object({
      id: z.string(),
      name: z.string(),
      image: z.string(),
    })
    .optional(),
  assignedJanitors: z.array(
    z
      .object({
        id: z.string(),
        name: z.string(),
        image: z.string(),
      })
      .optional()
  ),
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
  date: z
    .string()
    .min(1, "Date is required")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  vin: z.string().min(1, "VIN is required"),
  driverName: z.string().min(1, "Driver name is required"),
  maintenanceType: z.string().min(1, "Maintenance type is required"),
  descriptionOfWorkDone: z.string().optional(), // Optional field
  partsReplacedServiced: z.string().optional(), // Optional array of strings
  costOfMaintenance: z
    .number()
    .min(0, "Cost of maintenance must be a positive number"),
  serviceProvider: z.string().min(1, "Service provider is required"),
  technicianName: z.string().min(1, "Technician name is required"),
  serviceLocation: z.string().min(1, "Service location is required"),
  nextScheduledMaintenance: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)")
    .optional(),
  notesRemarks: z.string().optional(), // Optional field
});

export const insuranceSchema = z.object({
  vin: z.string(),
  insuranceProvider: z.string(),
  policyNumber: z.string(),
  insuranceType: z.string(),
  coverageStartDate: z.string().min(1, "Start date is required").regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  coverageEndDate: z.string().min(1, "End date is required").regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  premiumAmount: z.number().min(0, "Amount cannot be less than zero"),
  paymentFrequency: z.string(),
  paymentDate: z.string().min(1, "Payment date is required").regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  deductible: z.number().min(0, "Payment date cannot be less than zero"),
  coverageDetails: z.string(),
  renewalDate: z.string(),
  notesRemarks: z.string(),
});

export const insuranceClaimsSchema = z.object({
  insuranceID: z.string(),
  vin: z.string(),
  incidentDate: z.string(),
  claimAmount: z.number(),
  claimStatus: z.string(),
  claimDate: z.string(),
  insuranceProvider: z.string(),
  driverInvolved: z.string(),
  incidentDescription: z.string(),
  claimResolutionDate: z.string().optional(), // Can be empty for pending claims
  resolutionNotes: z.string().optional(),
=======
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
  finesPenalties: z
    .number()
    .min(0, "Fines/Penalties must be a positive number"),
  licensingLocation: z.string(),
  notesRemarks: z.string().optional(),
});

export const driverLicenseSchema = z.object({
  driverID: z.string().min(1, "Driver ID is required"),
  driverName: z.string(),
  licenseNumber: z.string(),
  licenseType: z.string(),
  issuingAuthority: z.string(),
  licenseIssueDate: z.string(), // Date format as string
  licenseExpiryDate: z.string(), // Date format as string
  licenseCost: z.number().min(0, "License cost must be a positive number"),
  renewalDate: z.string(), // Date format as string
  renewalCost: z.number().min(0, "Renewal cost must be a positive number"),
  paymentDate: z.string(), // Date format as string
  paymentMode: z.string(),
  finesPenalties: z
    .number()
    .min(0, "Fines/Penalties must be a positive number"),
  licenseStatus: z.string(),
  licensingLocation: z.string(),
  notesRemarks: z.string().optional(),
});

export const wasteBinsCollectedSchema = z.object({
  vin: z.string().min(1, "VIN is required"),
  route: z.string(),
  date: z.string(), // Date format as string
  wasteBinsCollected: z
    .number()
    .min(0, "Waste Bins Collected must be a positive number"),
  tripDuration: z.string(), // Stored as a string, example "4 hours"
  driverName: z.string(),
  fuelConsumed: z.number().min(0, "Fuel Consumed must be a positive number"), // Measured in liters
  notesRemarks: z.string().optional(),
});

// TypeScript type inference from Zod schema
export type WasteBinsCollected = z.infer<typeof wasteBinsCollectedSchema>;

export const wasteDumpingFeeSchema = z.object({
  vin: z.string().min(1, "VIN is required"),
  date: z.string().min(1, "Date is required"), // Change to z.date() if using a date picker that supports it.
  wasteDumped: z
    .number()
    .min(1, "Waste Dumped is required")
    .positive("Must be a positive number"),
  dumpingFacility: z.string().min(1, "Dumping Facility is required"),
  dumpingFeePerKg: z
    .number()
    .min(0.01, "Dumping Fee per kg is required")
    .positive("Must be a positive number"),
  totalCost: z
    .number()
    .min(0.01, "Total Cost is required")
    .positive("Must be a positive number"),
  notesRemarks: z.string().optional(),
});

export type WasteDumpingFee = z.infer<typeof wasteDumpingFeeSchema>;

// Waste Revenue per Vehicle Schema
export const wasteRevenueSchema = z.object({
  vin: z.string().min(1, "VIN is required"),
  date: z.string().min(1, "Date is required"), // Date as string, adjust based on your input format
  totalBinsCollected: z
    .number()
    .min(0, "Total bins collected must be a non-negative number"),
  wasteCollectionType: z.string().min(1, "Waste collection type is required"),
  revenuePerBin: z
    .number()
    .min(0, "Revenue per bin must be a non-negative number"),
  totalRevenue: z
    .number()
    .min(0, "Total revenue must be a non-negative number"),
  driverName: z.string().min(1, "Driver name is required"),
  collectionType: z.enum(["Regular", "On Demand"]),
});

export type WasteRevenue = z.infer<typeof wasteRevenueSchema>;

export const routeSchema = z.object({
  routeId: z.string().nonempty("Route ID is required"),
  vin: z.string().nonempty("VIN is required"),
  startLocation: z.string().nonempty("Start Location is required"),
  endLocation: z.string().nonempty("End Location is required"),
  distance: z.number().positive("Distance must be a positive number"),
  startTime: z.union([z.date(), z.string().optional()]).refine(
    (value) => {
      // Allow both a valid Date object and an empty string (optional)
      if (value instanceof Date) {
        return !isNaN(value.getTime()); // Check if the Date is valid
      }
      return value === ""; // Allow empty string
    },
    {
      message: "Start Time must be a valid date or an empty string",
    }
  ),
  endTime: z.union([z.date(), z.string().optional()]).refine(
    (value) => {
      if (value instanceof Date) {
        return !isNaN(value.getTime()); // Check if the Date is valid
      }
      return value === ""; // Allow empty string
    },
    {
      message: "End Time must be a valid date",
    }
  ),
  stopsMade: z.number().nonnegative("Stops Made must be a non-negative number"),
  routeStatus: z.enum(["Pending", "In Progress", "Completed", "Cancelled"]),
  driverId: z.string().nonempty("Driver ID is required"),
  fuelConsumption: z
    .number()
    .nonnegative("Fuel Consumption must be a non-negative number"),
  notes: z.string().optional(), // This can be optional if notes are not always required
});

export type Route = z.infer<typeof routeSchema>;
