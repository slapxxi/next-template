import classNames from 'classnames';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Children, createContext, useContext, useState } from 'react';
import { isComponentType } from '../lib/isComponentType';
import { Button } from './Button';

export type ListProps = {
  children?: React.ReactNode;
  className?: string;
};

type ListContextType = { depth: number; setActive: (active: boolean) => void };

const ListContext = createContext<ListContextType | null>(null);

export const List = (props: ListProps) => {
  const { children, className = '', ...rest } = props;
  const [active, setActive] = useState(false);
  const listContext = useContext(ListContext);
  const depth = (listContext?.depth ?? 0) + 1;

  return (
    <ul className="relative overflow-hidden" {...rest}>
      <div
        style={{ transform: `translateX(${active ? -100 : 0}%)` }}
        className={classNames(className, 'transition-transform')}
      >
        {listContext && (
          <Button
            onClick={() => listContext.setActive(false)}
            className="flex items-center py-2.5 text-mediumBlue-500"
          >
            <ChevronLeft size={18} /> Назад
          </Button>
        )}
        <ListContext.Provider value={{ setActive, depth }}>{children}</ListContext.Provider>
      </div>
    </ul>
  );
};

export type ListItemProps = {
  children?: React.ReactNode;
  className?: string;
};

export const ListItem = (props: ListItemProps) => {
  const { children, className = '', ...rest } = props;
  const listContext = useContext(ListContext);
  let containsSublist = false;

  const mappedChildren = Children.map(children, (child) => {
    if (isComponentType(child, List)) {
      containsSublist = true;
      return <div className="absolute top-0 left-0 right-0 translate-x-full">{child}</div>;
    }
    return child;
  });

  return (
    <li className={classNames(className, 'flex items-center border-b py-3')} {...rest}>
      {mappedChildren}
      {containsSublist && (
        <Button className="ml-auto" onClick={() => listContext?.setActive(true)}>
          <ChevronRight />
        </Button>
      )}
    </li>
  );
};
