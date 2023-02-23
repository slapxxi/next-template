import classNames from 'classnames';
import { HTMLProps } from 'react';

export type CheckboxProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
} & HTMLProps<HTMLInputElement>;

export const Checkbox = (props: CheckboxProps) => {
  const { children, className = '', id, ...rest } = props;

  return (
    <div className={classNames(className)}>
      <input type="checkbox" id={id} className="peer hidden" {...rest} />
      <label
        htmlFor={id}
        className="cursor-pointer text-slate-300 hover:text-mediumBlue-500 peer-checked:hidden"
      >
        <svg width={16} height={16} fill="none">
          <rect width={15} height={15} x={0.5} y={0.5} fill="#fff" rx={3.5} className="stroke-current" />
        </svg>
      </label>
      <label htmlFor={id} className="group/label hidden peer-checked:block">
        <svg width={16} height={16} fill="none">
          <rect width={16} height={16} fill="#1951E7" rx={4} />
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth={2}
            d="m3 8.33 3 3L12.67 4"
            className="group-hover/label:hidden"
          />
        </svg>
      </label>
    </div>
  );
};
