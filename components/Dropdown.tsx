import { animated, useSpring } from '@react-spring/web';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import tw from 'twin.macro';
import { useOnClickOutside } from '../lib/hooks/useOnClickOutside';

let DropdownContext = createContext(null);

export interface DropdownProps {
  className?: string;
  disabled?: boolean;
}

export let Dropdown: React.FC<DropdownProps> = (props) => {
  let { children, disabled = false, ...rest } = props;
  let [isOpen, setIsOpen] = useState(false);
  let ref = useRef(null);

  let setIsOpenWhenActive = (value: any) => {
    if (!disabled) {
      setIsOpen(value);
    }
  };

  useEffect(() => {
    if (disabled) {
      setIsOpen(false);
    }
  }, [disabled]);

  useOnClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen: setIsOpenWhenActive, disabled }}>
      <div css={[tw`relative`]} ref={ref} {...rest}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export interface DropdownTriggerProps {
  className?: string;
}

export let DropdownTrigger: React.FC<DropdownTriggerProps> = (props) => {
  let { children, ...rest } = props;
  let { setIsOpen, disabled } = useContext(DropdownContext);

  function handleClick() {
    setIsOpen((o) => !o);
  }

  return (
    <div
      onClick={handleClick}
      css={[
        // @ts-ignore
        { ':after': [tw`absolute top-0 bottom-0 left-0 right-0 z-20`, { content: '""' }] },
        disabled && tw`opacity-50`,
      ]}
      {...rest}
    >
      {children}
    </div>
  );
};

export interface DropdownContentProps {
  className?: string;
}

export let DropdownContent: React.FC<DropdownContentProps> = (props) => {
  let { children, ...rest } = props;
  let { isOpen } = useContext(DropdownContext);
  let spring = useSpring({
    y: isOpen ? '0' : '-20%',
    opacity: isOpen ? 1 : 0,
  });

  return (
    <animated.div
      css={[tw`absolute right-0 z-10 top-full`, { transformOrigin: 'top right' }]}
      style={spring}
      onClick={(e) => e.stopPropagation()}
      {...rest}
    >
      {children}
    </animated.div>
  );
};
