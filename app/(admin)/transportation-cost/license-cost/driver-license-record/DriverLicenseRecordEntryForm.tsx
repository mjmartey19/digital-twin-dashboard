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
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { driverLicenseSchema } from "@/lib/validation";

const DriverLicenseRecordEntryForm = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleFormSubmit = async () => {
    // handle form submission here
    console.log(form.getValues());
    // Reset form
    form.reset();
    // Close dialog
    setOpenDialog(false);
    toast.success("Fuel purchase entry added successfully");
  };

  const form = useForm<z.infer<typeof driverLicenseSchema>>({
    resolver: zodResolver(driverLicenseSchema),
    defaultValues: {
      driverID: "",
      driverName: "",
      licenseNumber: "",
      licenseType: "",
      issuingAuthority: "",
      licenseIssueDate: "",
      licenseExpiryDate: "",
      licenseCost: 0,
      renewalDate: "",
      renewalCost: 0,
      paymentDate: "",
      paymentMode: "",
      finesPenalties: 0,
      licenseStatus: "",
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
          <Plus className="mr-2 h-4 w-4" /> New driver license
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
                    name="driverID"
                    label="Driver ID"
                    placeholder="Enter Driver ID"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="driverName"
                    label="Driver Name"
                    placeholder="Enter Driver Name"
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
                    name="licenseType"
                    label="License Type"
                    placeholder="Enter License Type"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="issuingAuthority"
                    label="Issuing Authority"
                    placeholder="Enter Issuing Authority"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.DATE_PICKER}
                    control={form.control}
                    name="licenseIssueDate"
                    label="License Issue Date"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.DATE_PICKER}
                    control={form.control}
                    name="licenseExpiryDate"
                    label="License Expiry Date"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="licenseCost"
                    label="License Cost (GHS)"
                    placeholder="Enter License Cost"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.DATE_PICKER}
                    control={form.control}
                    name="renewalDate"
                    label="Renewal Date"
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
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="paymentMode"
                    label="Payment Mode"
                    placeholder="Enter Payment Mode"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="finesPenalties"
                    label="Fines/Penalties (GHS)"
                    placeholder="Enter Fines/Penalties"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="licenseStatus"
                    label="License Status"
                    placeholder="Enter License Status"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="licensingLocation"
                    label="Licensing Location"
                    placeholder="Enter Licensing Location"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="notesRemarks"
                    label="Notes/Remarks"
                    placeholder="Enter Notes/Remarks"
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

export default DriverLicenseRecordEntryForm;
