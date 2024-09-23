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


