import classNames from 'classnames';
import { useState } from 'react';

type Data = {
  [key: string]: string;
};

export type KeyValueTableProps = {
  data: Data;
  collapsible?: boolean;
  children?: React.ReactNode;
  className?: string;
  maxItems?: number;
};

export const KeyValueTable = (props: KeyValueTableProps) => {
  const { children, className = '', data, collapsible = false, maxItems = 3, ...rest } = props;
  const [collapsed, setCollapsed] = useState(true);
  const args = collapsible && collapsed ? [0, maxItems] : [];

  function handleClick() {
    setCollapsed((c) => !c);
  }

  return (
    <ul className={classNames(className, 'kv_table')} {...rest}>
      {Object.entries(data)
        .slice(...args)
        .map(([key, value]) => (
          <li className="flex items-end justify-between gap-2" key={key}>
            <div className="max-w-[50%] shrink-0 leading-none text-gray-500">{key}</div>
            <svg className="h-px w-0 flex-1 text-gray-300" aria-hidden>
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="currentColor"
                strokeWidth={2}
                strokeDasharray="5"
              />
            </svg>
            <div className="max-w-[50%] shrink-0 text-right leading-none">{value}</div>
          </li>
        ))}
      {collapsible && (
        <li>
          <button className="text-sm text-mediumBlue-500" onClick={handleClick}>
            {collapsed ? 'Развернуть' : 'Свернуть'}
          </button>
        </li>
      )}
    </ul>
  );
};
