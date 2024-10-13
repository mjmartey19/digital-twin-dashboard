import React, {useState} from 'react'
import { CustomDialogFooter } from '@/components/CustomDialogFooter';
import { CustomDialogHeader } from '@/components/CustomDialogHeader';
import CustomFormField from '@/components/CustomFormField';
import { FormFieldType } from '@/components/forms/LoginForm';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { ScrollArea } from '@/components/ui/scroll-area';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from "zod";
import { insuranceClaimsSchema } from '@/lib/validation';

const ClaimDataEntryForm = () => {

    const [openDialog, setOpenDialog] = useState(false);
    const handleFormSubmit = async() => {
        // handle form submission here
        console.log(form.getValues());
        // Reset form
        form.reset();
        // Close dialog
        setOpenDialog(false);
        toast.success("Fuel purchase entry added successfully")
      } 

      const form = useForm<z.infer<typeof insuranceClaimsSchema>>({
        resolver: zodResolver(insuranceClaimsSchema),
        defaultValues: {
          insuranceID: "",
          vin: "",
          incidentDate: "",
          claimAmount: 0,
          claimStatus: "",
          claimDate: "",
          insuranceProvider: "",
          driverInvolved: "",
          incidentDescription: "",
          claimResolutionDate : "",
          resolutionNotes: ""
        },
      })

    
    

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
          <Plus className="mr-2 h-4 w-4" /> Add Insurance Claim
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[100vh] overflow-y-auto max-w-4xl mx-3">
        <ScrollArea>
          <CustomDialogHeader
            title="Add a new Insurance Claim"
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
                    name="insuranceID"
                    label="Insurance ID"
                    placeholder="eg: vangaurd"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.DATE_PICKER}
                    control={form.control}
                    name="incidentDate"
                    label="Incident Date"
                    placeholder="YYYY-MM-DD"
                  />
                
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="claimAmount"
                    label="Claim Amount"
                    placeholder="GHC 100"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="claimStatus"
                    label="Claim Status"
                    placeholder=""
                  />
                  <CustomFormField
                    fieldType={FormFieldType.DATE_PICKER}
                    control={form.control}
                    name="claimDate"
                    label="Claim Date"
                    placeholder="YYYY-MM-DD"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="insuranceProvider"
                    label="Insurance Provider"
                    placeholder=""
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="driverInvolved"
                    label="Driver Involved"
                    placeholder="Drivers ID"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="incidentDescription"
                    label="Incident Description"
                    placeholder=""
                  />
                  <CustomFormField
                    fieldType={FormFieldType.DATE_PICKER}
                    control={form.control}
                    name="claimResolutionDate"
                    label="Resolution Date"
                    placeholder="YYYY-MM-DD"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.DATE_PICKER}
                    control={form.control}
                    name="resolutionNotes"
                    label="Resolution Notes"
                    placeholder=""
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
  )
}

export default ClaimDataEntryForm
