import { FormData, Errors } from "@/types/contactTypes";

export function validate(formData: FormData): Errors {
  const errs: Errors = {};

  if (!formData.fname.trim()) errs.fname = 'Please enter your first name';
  if (!formData.lname.trim()) errs.lname = 'Please enter your last name';
  if (!formData.email.trim()) errs.email = 'Please enter your email';
  else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim()))
    errs.email = 'Please enter a valid email';
  if (!formData.pnum.trim()) errs.pnum = 'Please enter your phone number';

  return errs;
}

export function getUnderlineStyle(
  field: keyof FormData,
  formData: FormData,
  errors: Errors
): React.CSSProperties {
  if (errors[field]) return { borderBottom: '2px solid red' };
  if (formData[field].trim()) return { borderBottom: '2px solid limegreen' };
  return { borderBottom: '1px solid white' };
}
