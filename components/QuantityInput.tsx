import classNames from 'classnames';
import { Minus, Plus } from 'lucide-react';

export type QuantityInputProps = {
  children?: React.ReactNode;
  className?: string;
  value?: number;
  onChange?: (value: number) => void;
};

export const QuantityInput = (props: QuantityInputProps) => {
  const { children, className = '', value, onChange, ...rest } = props;

  function handleClickMinus() {
    onChange?.((value ?? 0) - 1);
  }

  function handleClickPlus() {
    onChange?.((value ?? 0) + 1);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.currentTarget.value === '' ? '0' : e.currentTarget.value;
    const parsed = parseInt(value, 10);

    if (!isNaN(parsed)) {
      onChange?.(parsed);
    }
  }

  return (
    <div className={classNames(className, 'flex items-center gap-1')} {...rest}>
      <button
        className="h-5 w-5 rounded-full border text-slate-500 hover:border-mediumBlue-500"
        onClick={handleClickMinus}
      >
        <Minus size={18} />
      </button>
      <span className="relative flex-1">
        <input
          type="number"
          className="absolute w-full appearance-none text-center text-lg"
          value={value}
          onChange={handleChange}
          min="0"
          inputMode="numeric"
          pattern="[0-9]*"
          title="Non-negative integral number"
        />
        <span className="invisible text-lg lg:px-3">{value}</span>
      </span>
      <button
        className="h-5 w-5 rounded-full border text-slate-500 hover:border-mediumBlue-500"
        onClick={handleClickPlus}
      >
        <Plus size={18} />
      </button>
    </div>
  );
};
