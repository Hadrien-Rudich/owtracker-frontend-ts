import InputFieldProps from '../types/inputFieldTypes';

function InputField({
  label,
  type = 'text',
  value,
  placeholder,
  onChange,
  onKeyDown,
  disabled,
  required,
}: InputFieldProps) {
  const inputValue = value || '';

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
        className="input"
      />
    </label>
  );
}

export default InputField;
