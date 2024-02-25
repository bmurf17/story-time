interface Props {
  label: string;
  disabled?: boolean;
  labelClasses: string;
  inputClasses: string;
  id: string;
  type: string;
  defaultValue?: string | number | readonly string[] | undefined;
}

export default function CustomInput({
  label,
  disabled = false,
  labelClasses,
  inputClasses,
  defaultValue,
  id,
  type,
}: Props) {
  return (
    <div className='flex items-center'>
      <div className={labelClasses}>
        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
          {label}
        </label>
      </div>
      <input
        className={inputClasses}
        id={id}
        type={type}
        defaultValue={defaultValue}
        disabled={disabled}
      />
    </div>
  );
}
