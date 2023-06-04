import { ChangeEvent, KeyboardEvent } from 'react';

interface InputFieldProps {
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  htmlFor?: string;
}

export default InputFieldProps;
