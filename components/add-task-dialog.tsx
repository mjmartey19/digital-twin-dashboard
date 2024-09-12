"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useState, useTransition } from "react";
import { Plus } from "lucide-react";
import CustomFormField from "./CustomFormField";
import { FormFieldType } from "./forms/LoginForm";

const formSchema = z.object({
  vehicleId: z.string().min(1).max(255),
  vehicleNumberPlate: z.string().min(1).max(255),
  make: z.string().min(1).max(255),
  model: z.string().min(1).max(255),
  yearOfManufacture: z.string().min(4).max(4),
  fuelType: z.string().min(1).max(255),
  typeOfVehicle: z.string().min(1).max(255),
  vin: z.string().min(1).max(255),
  mileage: z.string().optional(),
  registrationDate: z.string().optional(),
  vehicleStatus: z.string().min(1).max(255),
  assignedDriver: z.string().optional(),
  assignedJanitors: z.string().optional(),
});

export function AddTaskDialog() {
  const [open, setOpen] = useState(false);
  const [isAddTaskPending, addTaskTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vehicleId: "",
      vehicleNumberPlate: "",
      make: "",
      model: "",
      yearOfManufacture: "",
      fuelType: "",
      typeOfVehicle: "",
      vin: "",
      mileage: "",
      registrationDate: "",
      vehicleStatus: "",
      assignedDriver: "",
      assignedJanitors: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    addTaskTransition(async () => {
      // Handle form submission here
    });

    console.log(values);
    toast.success("Vehicle added successfully!");
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button size={"sm"} className="sm:hidden">
          <Plus className="h-4 w-4" />
        </Button>
        <Button size={"sm"} className="hidden sm:flex bg-green-500 hover:bg-green-400">
          <Plus className="mr-2 h-4 w-4" /> Add Vehicle
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[100vh] overflow-y-auto max-w-4xl">
        <DialogHeader>
          <DialogTitle>Add Vehicle</DialogTitle>
          <DialogDescription>
            Fill in the details below to register a new vehicle.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            noValidate
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex-1 space-y-8"
          >
            {/* Vehicle Identification */}
            <section className="space-y-6">
              <div className="mb-4 space-y-1">
                <h2 className="sub-header">Vehicle Identification</h2>
              </div>

              <div className="flex flex-col gap-6 xl:flex-row">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="vehicleId"
                  label="Vehicle ID"
                  placeholder="Unique identifier for the vehicle"
                />

                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="vehicleNumberPlate"
                  label="Vehicle Number Plate"
                  placeholder="License plate number"
                />
              </div>

              <div className="flex flex-col gap-6 xl:flex-row">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="make"
                  label="Make"
                  placeholder="Vehicle manufacturer (e.g., Toyota)"
                />

                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="model"
                  label="Model"
                  placeholder="Vehicle model (e.g., Hilux)"
                />

                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="yearOfManufacture"
                  label="Year of Manufacture"
                  placeholder="Year the vehicle was manufactured"
                />
              </div>
            </section>

            {/* Vehicle Specifications */}
            <section className="space-y-6">
              <div className="mb-4 space-y-1">
                <h2 className="sub-header">Vehicle Specifications</h2>
              </div>

              <div className="flex flex-col gap-6 xl:flex-row">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="fuelType"
                  label="Fuel Type"
                  placeholder="Type of fuel used (e.g., Petrol)"
                />

                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="typeOfVehicle"
                  label="Type of Vehicle"
                  placeholder="Specify if Truck or Tricycle"
                />

                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="vin"
                  label="Vehicle Identification Number (VIN)"
                  placeholder="Unique VIN for the vehicle"
                />
              </div>
            </section>

            {/* Vehicle Details */}
            <section className="space-y-6">
              <div className="mb-4 space-y-1">
                <h2 className="sub-header">Vehicle Details</h2>
              </div>

              <div className="flex flex-col gap-6 xl:flex-row">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="mileage"
                  label="Mileage"
                  placeholder="Current mileage of the vehicle"
                />

                <CustomFormField
                  fieldType={FormFieldType.DATE_PICKER}
                  control={form.control}
                  name="registrationDate"
                  label="Registration Date"
                />

                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="vehicleStatus"
                  label="Vehicle Status"
                  placeholder="Current status (e.g., Active)"
                />
              </div>
            </section>

            {/* Assignments Details */}
            <section className="space-y-6">
              <div className="mb-4 space-y-1">
                <h2 className="sub-header">Assignments Details</h2>
              </div>

              <div className="flex flex-col gap-6 xl:flex-row">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="assignedDriver"
                  label="Assigned Driver"
                  placeholder="Name of the primary driver"
                />

                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="assignedJanitors"
                  label="Assigned Janitors"
                  placeholder="Names of janitors or staff assigned"
                />
              </div>
            </section>

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>

              <Button type="submit" className="bg-green-500 hover:bg-green-400">
                {isAddTaskPending && (
                  <ReloadIcon
                    className="mr-2 size-4 animate-spin"
                    aria-hidden="true"
                  />
                )}
                Add Vehicle
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
