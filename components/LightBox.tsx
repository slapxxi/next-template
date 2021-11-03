import { XCircle } from 'lucide-react';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import tw from 'twin.macro';
import { useLightbox } from '../lib/hooks/useLightbox';
import { Button } from './Button';

export interface LightBoxProps {
  open?: boolean;
  onToggle?: (open: boolean) => void;
  className?: string;
}

export let LightBox: React.FC<LightBoxProps> = (props) => {
  let { children, onToggle, ...rest } = props;
  let lb = useLightbox();

  useEffect(() => {
    function handler(e) {
      if (e.key === 'Escape') {
        lb.close();
      }
    }

    if (lb.isOpen) {
      document.addEventListener('keydown', handler);
      document.documentElement.style.height = '100%';
      document.documentElement.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handler);
      document.documentElement.style.height = null;
      document.documentElement.style.overflow = null;
    };
  }, [lb.isOpen]);

  if (!lb.isOpen) {
    return null;
  }

  function handleToggle() {
    lb.toggle();
    onToggle?.(!lb.isOpen);
  }

  return ReactDOM.createPortal(
    <div
      css={[tw`fixed top-0 z-20 w-full h-screen p-4`, { background: '#000d', overflowY: 'scroll' }]}
      {...rest}
    >
      <div css={[tw`sticky top-0 z-10 flex justify-end`]}>
        <Button onClick={handleToggle}>
          <XCircle />
        </Button>
      </div>

      {children}
    </div>,
    document.querySelector('#__next'),
  );
};
