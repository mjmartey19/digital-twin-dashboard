import React, { useState } from "react";
import { CustomDialogFooter } from "@/components/CustomDialogFooter";
import { CustomDialogHeader } from "@/components/CustomDialogHeader";
import CustomFormField from "@/components/CustomFormField";
import { FormFieldType } from "@/components/forms/LoginForm";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectItem } from "@radix-ui/react-select";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { licenseCostSchema } from "@/lib/validation";

const VehicleLicenseRecordEntryForm = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const roles = ["Driver", "Janator"];
  const handleFormSubmit = async () => {
    // handle form submission here
    console.log(form.getValues());
    // Reset form
    form.reset();
    // Close dialog
    setOpenDialog(false);
    toast.success("Fuel purchase entry added successfully");
  };

  const form = useForm<z.infer<typeof licenseCostSchema>>({
    resolver: zodResolver(licenseCostSchema),
    defaultValues: {
      vin: "",
      licenseType: "",
      licenseNumber: "",
      issuingAuthority: "",
      licenseCost: 0,
      licensingLocation: "",
      notesRemarks: "",
    },
  });

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger>
        <Button size="sm" className="sm:hidden bg-green-500">
          <Plus className="h-4 w-4" />
        </Button>
        <Button
          size="sm"
          className="hidden sm:flex bg-green-500 hover:bg-green-400"
        >
          <Plus className="mr-2 h-4 w-4" /> New vehicle license 
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[100vh] overflow-y-auto max-w-4xl mx-3">
        <ScrollArea>
          <CustomDialogHeader
            title="Add a new Staff Member"
            description="Fill the form feilds below"
          />

          <Form {...form}>
            <form
              noValidate
              onSubmit={handleFormSubmit}
              className="flex-1 space-y-8 pt-5"
            >
              <section className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="vin"
                    label="Vehicle Identification No."
                    placeholder="Enter VIN"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="licenseType"
                    label="License Type"
                    placeholder="Enter License Type (e.g., Commercial, Personal)"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="licenseNumber"
                    label="License Number"
                    placeholder="Enter License Number"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="issuingAuthority"
                    label="Issuing Authority"
                    placeholder="Enter Issuing Authority (e.g., DVLA)"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.DATE_PICKER}
                    control={form.control}
                    name="licenseIssueDate"
                    label="License Issue Date"
                    placeholder="Select License Issue Date"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.DATE_PICKER}
                    control={form.control}
                    name="licenseExpiryDate"
                    label="License Expiry Date"
                    placeholder="Select License Expiry Date"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="licenseCost"
                    label="License Cost (GHS)"
                    placeholder="Enter License Cost"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="renewalCost"
                    label="Renewal Cost (GHS)"
                    placeholder="Enter Renewal Cost"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.DATE_PICKER}
                    control={form.control}
                    name="paymentDate"
                    label="Payment Date"
                    placeholder="Select Payment Date"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="paymentMode"
                    label="Payment Mode"
                    placeholder="Enter Payment Mode (e.g., Cash, Direct Debit)"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="finesPenalties"
                    label="Fines/Penalties (GHS)"
                    placeholder="Enter Fines or Penalties"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="licensingLocation"
                    label="Licensing Location"
                    placeholder="Enter Licensing Location (e.g., Accra Branch)"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="notesRemarks"
                    label="Notes/Remarks"
                    placeholder="Enter Notes or Remarks"
                  />
                </div>

                <CustomDialogFooter
                  isPending={false}
                  onClose={() => setOpenDialog(false)}
                  onSubmit={() => handleFormSubmit}
                  submitLabel="Submit"
                  closeLabel="Cancel"
                />
              </section>
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default VehicleLicenseRecordEntryForm;
