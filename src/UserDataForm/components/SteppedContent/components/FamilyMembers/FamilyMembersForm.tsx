import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';

import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { InputField, SelectField } from '@/components/form';
import { PreviousStepButton } from '@/components/PreviousStepButton/PreviousStepButton';
import { useUserData } from '@/state/hooks/useUserData';
import { useStepper } from '@/state/hooks/useStepper';
import { FamilyMember } from '@/@types/userData';
import { TableBody, TableCell, TableHead, TableHeader, TableRow, Table, TableCaption } from '@/components/ui/table';
import { NavigationButtons } from '@/components/NavigationButtons/NavigationButtons';

const defaultValues = {
  name: '',
  sex: '',
  birthday: '',
  citizenship: '',
  isApplying: '',
  isDependent: '',
  kinship: '',
  residencePlace: '',
};

const formSchema = z.object({
  name: z.string().min(1, 'Required'),
  sex: z.string().min(1, 'Required'),
  birthday: z.string().min(1, 'Required'),
  kinship: z.string().min(1, 'Required'),
  citizenship: z.string().min(1, 'Required'),
  residencePlace: z.string().min(1, 'Required'),
  isApplying: z.string().min(1, 'Required'),
  isDependent: z.string().min(1, 'Required'),
});

export const FamilyMembersForm = () => {
  const { t } = useTranslation();
  const { userData, setUserData } = useUserData();
  const { goToNextStep } = useStepper();
  const [editingMemberId, setEditingMemberId] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const member = values as FamilyMember;
    const newData = { ...userData };

    if (!newData.familyMemebers) {
      newData.familyMemebers = [];
    }

    if (editingMemberId) {
      newData.familyMemebers = newData.familyMemebers.map((item) =>
        item.id === editingMemberId ? { ...member, id: editingMemberId } : item,
      );
    } else {
      newData.familyMemebers.push({ ...member, id: Math.random().toString() });
    }

    setUserData(newData);
    setEditingMemberId(null);
    form.reset(defaultValues);
  };

  const handleDeleteMember = (id: string) => {
    const updatedFamilyMembers = userData?.familyMemebers?.filter((member) => member.id !== id);
    setUserData({ ...userData, familyMemebers: updatedFamilyMembers });
    setEditingMemberId(null);
    form.reset(defaultValues);
  };

  const handleEditMember = (member: FamilyMember) => {
    setEditingMemberId(member.id);
    form.reset(member);
  };

  const handleCancelEdditing = () => {
    form.reset(defaultValues);
    setEditingMemberId(null);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-4">
            <div className="border p-2 rounded-md">
              <Table className="text-xs">
                <TableCaption>{t('main_form.field.has_family_in_poland.label')}</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('main_form.field.family_member.name_surname')}</TableHead>
                    <TableHead>{t('main_form.field.family_member.sex')}</TableHead>
                    <TableHead>{t('main_form.field.family_member.birthday')}</TableHead>
                    <TableHead>{t('main_form.field.family_member.kinship')}</TableHead>
                    <TableHead>{t('main_form.field.family_member.residence_place')}</TableHead>
                    <TableHead>{t('main_form.field.family_member.is_applying')}</TableHead>
                    <TableHead>{t('main_form.field.family_member.is_dependent')}</TableHead>
                    <TableHead>{t('common.action')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userData?.familyMemebers?.map((member) => (
                    <TableRow key={member.id} className={member.id === editingMemberId ? 'bg-slate-100' : ''}>
                      <TableCell>{member.name}</TableCell>
                      <TableCell>{member.sex}</TableCell>
                      <TableCell>{member.birthday}</TableCell>
                      <TableCell>{member.kinship}</TableCell>
                      <TableCell>{member.residencePlace}</TableCell>
                      <TableCell>{member.isApplying}</TableCell>
                      <TableCell>{member.isDependent}</TableCell>
                      <TableCell>
                        <div className="flex justify-end space-x-2 mt-2">
                          <Button
                            onClick={() => handleEditMember(member)}
                            variant="outline"
                            type="button"
                            className="w-8 h-8 p-0 flex items-center justify-center"
                          >
                            <Pencil size={16} />
                          </Button>
                          <Button
                            onClick={() => handleDeleteMember(member.id)}
                            type="button"
                            variant="destructive"
                            className="w-8 h-8 p-0 flex items-center justify-center"
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            {userData?.familyMemebers && userData?.familyMemebers.length <= 5 && (
              <div className="border p-4 rounded-md">
                <div className="mt-2 space-y-2">
                  <InputField
                    controllerProps={{
                      control: form.control,
                      name: 'name',
                    }}
                    label={t('main_form.field.family_member.name_surname')}
                  />
                  <InputField
                    controllerProps={{
                      control: form.control,
                      name: 'sex',
                    }}
                    label={t('main_form.field.family_member.sex')}
                  />
                  <InputField
                    controllerProps={{
                      control: form.control,
                      name: 'birthday',
                    }}
                    label={t('main_form.field.family_member.birthday')}
                  />
                  <InputField
                    controllerProps={{
                      control: form.control,
                      name: 'kinship',
                    }}
                    label={t('main_form.field.family_member.kinship')}
                  />
                  <InputField
                    controllerProps={{
                      control: form.control,
                      name: 'citizenship',
                    }}
                    label={t('main_form.field.family_member.citizenship')}
                  />
                  <InputField
                    controllerProps={{
                      control: form.control,
                      name: 'residencePlace',
                    }}
                    label={t('main_form.field.family_member.residence_place')}
                  />
                  <SelectField
                    options={[
                      { value: 'yes', label: t('common.yes') },
                      { value: 'no', label: t('common.no') },
                    ]}
                    controllerProps={{
                      control: form.control,
                      name: 'isApplying',
                    }}
                    label={t('main_form.field.family_member.is_applying')}
                  />
                  <SelectField
                    options={[
                      { value: 'yes', label: t('common.yes') },
                      { value: 'no', label: t('common.no') },
                    ]}
                    controllerProps={{
                      control: form.control,
                      name: 'isDependent',
                    }}
                    label={t('main_form.field.family_member.is_dependent')}
                  />
                  <div className="flex justify-between p-4 pb-0">
                    {editingMemberId && (
                      <Button variant="outline" type="button" onClick={handleCancelEdditing}>
                        {t('common.cancel')}
                      </Button>
                    )}
                    <Button variant="default" type="submit">
                      {userData?.familyMemebers?.some((member) => member.id === editingMemberId)
                        ? t('common.edit')
                        : t('common.add')}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <NavigationButtons nextButtonType="submit" />
        </form>
      </Form>
    </div>
  );
};
