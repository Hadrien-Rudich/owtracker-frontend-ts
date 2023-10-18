import { useEffect } from 'react';
import { InputFieldProps } from '../types/inputFieldTypes';

function InputField({
  label,
  type = 'text',
  value,
  placeholder,
  onChange,
  onKeyDown,
  disabled,
  required,
  invalid,
  setInvalid,
  invalidMessage,
}: InputFieldProps) {
  const inputValue = value || '';

  useEffect(() => {
    if (invalid) {
      setTimeout(() => {
        if (setInvalid) {
          setInvalid(false);
        }
      }, 4000);
    }
  }, [invalid, setInvalid]);

  return (
    <label htmlFor={label}>
      <p className="sm:text-xl text-lg">{label}</p>
      <input
        value={inputValue}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={
          !invalid
            ? 'input outline-altColor outline-offset-0 relative'
            : 'input outline-warning outline-none relative '
        }
      />
      {invalid && (
        <div
          className="flexdiv absolute sm:w-36 sm:h-10 w-28 h-8 
          sm:mt-[-1rem] mt-[-0.95rem]"
        >
          <p className="absolute text-sm text-warning tracking-wide italic animate-blink">
            {invalidMessage}
          </p>
        </div>
      )}
    </label>
  );
}

export default InputField;
