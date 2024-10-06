import { CustomDialogFooter } from '@/components/CustomDialogFooter';
import { CustomDialogHeader } from '@/components/CustomDialogHeader';
import CustomFormField from '@/components/CustomFormField';
import { FormFieldType } from '@/components/forms/LoginForm';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { ScrollArea } from '@/components/ui/scroll-area';
import { staffMemberSchema } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { SelectItem } from '@radix-ui/react-select';
import { Plus } from 'lucide-react';
import React, {useState} from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from "zod";


const StaffDataEntryForm = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const roles = ["Driver", "Janator"]
  const handleFormSubmit = async() => {
    // handle form submission here
    console.log(form.getValues());
    // Reset form
    form.reset();
    // Close dialog
    setOpenDialog(false);
    toast.success("Fuel purchase entry added successfully")
  } 

  const form = useForm<z.infer<typeof staffMemberSchema>>({
    resolver: zodResolver(staffMemberSchema),
    defaultValues: {
      VIN: "",
      Name: "",
      Email: "",
      Phone: "",
      Role: "",
      AssignedDate: "",
      WorkedHours: "",
      Wages: "",
      Qualifications: "",
    },
  })

  return(
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger>
        <Button size="sm" className="sm:hidden bg-green-500">
          <Plus className="h-4 w-4" />
        </Button>
        <Button
          size="sm"
          className="hidden sm:flex bg-green-500 hover:bg-green-400"
        >
          <Plus className="mr-2 h-4 w-4" /> Add Staff
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
                    name="Name"
                    label="Staff Member Name"
                    placeholder="staff name"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="Email"
                    label="Staff's Email"
                    placeholder="eg: staff@mail.com"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.SELECT}
                    control={form.control}
                    name="Role"
                    label="Role"
                    placeholder="Staff Role"
                  >
                    {
                        roles.map((role, i) => (
                          <SelectItem key={i} value={role}>
                            {role}
                          </SelectItem>
                        ))
  
                    }
                  </CustomFormField>
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="VIN"
                    label="Vehicle Identification No."
                    placeholder="VIN"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="WorkedHours"
                    label="Hours Worked"
                    placeholder="Hours Worked"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.DATE_PICKER}
                    control={form.control}
                    name="AssignedDate"
                    label="Date Assigned"
                    placeholder="Pick Date"
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
};

export default StaffDataEntryForm
