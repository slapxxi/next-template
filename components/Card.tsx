import { Title } from './Title';

export type CardProps = {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  footer?: JSX.Element;
};

export let Card = (props: CardProps) => {
  let { children, className = '', title, description, footer, ...rest } = props;
  return (
    <CardContainer {...rest}>
      <div className="p-4 md:pb-7">
        {title && <Title>{title}</Title>}
        {description && <p className="text-gray-500">{description}</p>}
      </div>

      {children}

      {footer && (
        <footer className="rounded-b-lg border border-white bg-gray-light p-2 px-5 uppercase text-gray-base">
          {footer}
        </footer>
      )}
    </CardContainer>
  );
};

export type CardContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

export let CardContainer = (props: CardContainerProps) => {
  let { children, className = '', ...rest } = props;
  return (
    <div className={`${className} big-shadow rounded-lg bg-white text-sm md:rounded-xl`} {...rest}>
      {children}
    </div>
  );
};
