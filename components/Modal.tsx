import classNames from 'classnames';
import { createPortal } from 'react-dom';
import { useMounted } from '../lib/hooks/useMounted';

export type ModalProps = {
  children?: React.ReactNode;
  className?: string;
  open?: boolean;
};

export const Modal = (props: ModalProps) => {
  const { children, className = '', open = false, ...rest } = props;
  let mounted = useMounted();

  if (mounted && open) {
    return createPortal(
      <div className={classNames(className)} {...rest}>
        {children}
      </div>,
      document.getElementById('__next')!,
    );
  }

  return null;
};
