import styles from './List.module.scss';

export type ListProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: 'disc' | 'empty';
};

export let List = (props: ListProps) => {
  let { children, className = '', variant = 'empty', ...rest } = props;
  return (
    <ul
      className={`${className} flex flex-col 
      ${variant === 'disc' ? `${styles.disc} gap-1.5` : ''}
      ${variant === 'empty' ? 'gap-4' : ''}
    `}
      {...rest}
    >
      {children}
    </ul>
  );
};

export type ListItemProps = {
  children?: React.ReactNode;
  className?: string;
};

export let ListItem = (props: ListItemProps) => {
  let { children, className = '', ...rest } = props;
  return (
    <li className={`${className}`} {...rest}>
      {children}
    </li>
  );
};
