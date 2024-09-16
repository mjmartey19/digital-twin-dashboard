"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";

import { SelectItem } from "@/components/ui/select";

import {
  Dialog,
  DialogContent,

} from "@/components/ui/dialog";
import { toast } from "sonner";
import { useTransition } from "react";

import CustomFormField from "./CustomFormField";
import { FormFieldType } from "./forms/LoginForm";
import { FuelTypes, VehicleTypes, Drivers, Janitors } from "@/constants";
import { VehicleSchema } from "@/lib/validation";
import { CustomDialogHeader } from "./CustomDialogHeader";
import { CustomDialogFooter } from "./CustomDialogFooter";

interface EditVehicleDialogProps {
  vehicle: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EditVehicleDialog({ vehicle, open, onOpenChange }: EditVehicleDialogProps) {
  const [isEditVehiclePending, editVehicleTransition] = useTransition();

  const form = useForm<z.infer<typeof VehicleSchema>>({
    resolver: zodResolver(VehicleSchema),
    defaultValues: {
      vin: vehicle.vin || "",
      vehicleNumberPlate: vehicle.vehicleNumberPlate || "",
      make: vehicle.make || "",
      model: vehicle.model || "",
      yearOfManufacture: vehicle.yearOfManufacture || "",
      fuelType: vehicle.fuelType || "",
      typeOfVehicle: vehicle.typeOfVehicle || "",
      registrationDate: vehicle.registrationDate
        ? new Date(vehicle.registrationDate)
        : new Date(),
      vehicleStatus: vehicle.vehicleStatus || "",
      assignedDriver: vehicle.assignedDriver || [],
      assignedJanitors: vehicle.assignedJanitors || [],
    },
  });



  async function onSubmit(values: z.infer<typeof VehicleSchema>) {
    editVehicleTransition(async () => {
      console.log(values);
      toast.success("Vehicle updated successfully!");
      onOpenChange(false);
    });
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[100vh] overflow-y-auto max-w-4xl">
        <CustomDialogHeader
          title="Edit Vehicle"
          description="Modify the details below to update the vehicle."
        />


        <Form {...form}>
          <form
            noValidate
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex-1 space-y-8"
          >
            <section className="space-y-6">
              <div className="flex flex-col gap-6 xl:flex-row">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="vin"
                  label="Vehicle Identification Number"
                  placeholder="e.g A1DK44232GH24"
                />
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="vehicleNumberPlate"
                  label="Vehicle Number Plate"
                  placeholder="e.g GE123R"
                />
              </div>
              <div className="flex flex-col gap-6 xl:flex-row">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="make"
                  label="Make"
                  placeholder="e.g. Toyota"
                />
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="model"
                  label="Model"
                  placeholder="e.g. Hilux"
                />
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex flex-col gap-6 xl:flex-row">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="yearOfManufacture"
                  label="Year of Manufacture"
                  placeholder="e.g 2020"
                />
                <CustomFormField
                  fieldType={FormFieldType.SELECT}
                  control={form.control}
                  name="fuelType"
                  label="Fuel Type"
                  placeholder="Select fuel type"
                >
                  {FuelTypes.map((type, i) => (
                    <SelectItem key={type + i} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </CustomFormField>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex flex-col gap-6 xl:flex-row">
                <CustomFormField
                  fieldType={FormFieldType.SELECT}
                  control={form.control}
                  name="typeOfVehicle"
                  label="Vehicle Type"
                  placeholder="Select vehicle type"
                >
                  {VehicleTypes.map((type, i) => (
                    <SelectItem key={type + i} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </CustomFormField>
                <CustomFormField
                  fieldType={FormFieldType.DATE_PICKER}
                  control={form.control}
                  name="registrationDate"
                  label="Registration Date"
                />
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex flex-col gap-6 xl:flex-row">
                <CustomFormField
                  fieldType={FormFieldType.SELECT}
                  control={form.control}
                  name="assignedDriver"
                  label="Assigned Driver"
                  placeholder="Select a driver"
                >
                  {Drivers.map((driver, i) => (
                    <SelectItem key={driver.name + i} value={driver.name}>
                      <div className="flex cursor-pointer items-center gap-2">
                        <Image
                          src={driver.image}
                          width={32}
                          height={32}
                          alt="driver"
                          className="rounded-full"
                        />
                        <p>{driver.name}</p>
                      </div>
                    </SelectItem>
                  ))}
                </CustomFormField>
                <CustomFormField
                  fieldType={FormFieldType.SELECT}
                  control={form.control}
                  name="assignedJanitors"
                  label="Assigned Janitors"
                  placeholder="Select Janitor"
                >
                  {Janitors.map((janitor, i) => (
                    <SelectItem key={janitor.name + i} value={janitor.name}>
                      <div className="flex cursor-pointer items-center gap-2">
                        <Image
                          src={janitor.image}
                          width={32}
                          height={32}
                          alt="janitor"
                          className="rounded-full border border-dark-500"
                        />
                        <p>{janitor.name}</p>
                      </div>
                    </SelectItem>
                  ))}
                </CustomFormField>
              </div>
            </section>

            <CustomDialogFooter
              isPending={isEditVehiclePending}
              onClose={() => onOpenChange(false)}
              onSubmit={form.handleSubmit(onSubmit)}
              submitLabel="Edit Vehicle"
              closeLabel="Cancel"
            />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
