import classNames from 'classnames';
import { createPortal } from 'react-dom';

export type ModalProps = {
  children?: React.ReactNode;
  className?: string;
  open?: boolean;
};

export const Modal = (props: ModalProps) => {
  const { children, className = '', open = false, ...rest } = props;

  if (open) {
    return createPortal(
      <div className={classNames(className)} {...rest}>
        {children}
      </div>,
      document.getElementById('__next')!,
    );
  }

  return null;
};
