import { animated, useSpring } from '@react-spring/web';
import { createContext, useContext, useRef, useState } from 'react';
import tw from 'twin.macro';
import { useOnClickOutside } from '../lib/hooks/useOnClickOutside';

let DropdownContext = createContext(null);

export interface DropdownProps {
  className?: string;
}

export let Dropdown: React.FC<DropdownProps> = (props) => {
  let { children, ...rest } = props;
  let [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <div css={[tw`relative`]} {...rest}>
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
  let { setIsOpen } = useContext(DropdownContext);

  function handleClick() {
    setIsOpen((o) => !o);
  }

  return (
    <div
      onClick={handleClick}
      // @ts-ignore
      css={[{ ':after': [tw`absolute top-0 bottom-0 left-0 right-0 z-20`, { content: '""' }] }]}
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
  let { isOpen, setIsOpen } = useContext(DropdownContext);
  let ref = useRef(null);
  let spring = useSpring({
    y: isOpen ? '0' : '-20%',
    opacity: isOpen ? 1 : 0,
  });

  useOnClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <animated.div
      ref={ref}
      css={[tw`absolute right-0 z-10 top-full`, { transformOrigin: 'top right' }]}
      style={spring}
      onClick={(e) => e.stopPropagation()}
      {...rest}
    >
      {children}
    </animated.div>
  );
};
