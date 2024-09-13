"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useState, useTransition } from "react";
import { Plus } from "lucide-react";
import CustomFormField from "./CustomFormField";
import { FormFieldType } from "./forms/LoginForm";
import { FuelTypes, VehicleTypes, VehicleStatus, Drivers, Janitors } from "@/constants";
import { VehicleSchema } from "@/lib/validation";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";


export function AddVehicleDialog() {
  const [open, setOpen] = useState(false);
  const [isAddVehiclePending, addVehicleTransition] = useTransition();

  const form = useForm<z.infer<typeof VehicleSchema>>({
    resolver: zodResolver(VehicleSchema),
    defaultValues: {
      vin: "",
      vehicleNumberPlate: "",
      make: "",
      model: "",
      yearOfManufacture: "",
      fuelType: "",
      typeOfVehicle: "",
      registrationDate: new Date(),
      vehicleStatus: "",
      assignedDriver: "",
      assignedJanitors: "",
    },
  });

  async function onSubmit(values: z.infer<typeof VehicleSchema>) {
    addVehicleTransition(async () => {
      // Handle form submission here
      console.log(values);
      toast.success("Vehicle added successfully!");
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button size="sm" className="sm:hidden bg-green-500">
          <Plus className="h-4 w-4" />
        </Button>
        <Button size="sm" className="hidden sm:flex bg-green-500 hover:bg-green-400">
          <Plus className="mr-2 h-4 w-4" /> Add Vehicle
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[100vh] overflow-y-auto max-w-4xl">
        <ScrollArea >
          <DialogHeader>
            <DialogTitle>Add Vehicle</DialogTitle>
            <DialogDescription>
              Fill in the details below to register a new vehicle.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-8">
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
                    placeholder="Select a Janitor"
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

              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
                <Button type="submit" className="bg-green-500 hover:bg-green-400">
                  {isAddVehiclePending && (
                    <ReloadIcon
                      className="mr-2 h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                  )}
                  Add Vehicle
                </Button>
              </DialogFooter>
            </form>
          </Form>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </DialogContent>
    </Dialog>

  );
}
