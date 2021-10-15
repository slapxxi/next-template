import tw from 'twin.macro';

export interface TextProps {
  variant?: 'normal' | 'subtle';
  center?: boolean;
  className?: string;
}

export let Text: React.FC<TextProps> = (props) => {
  let { children, variant = 'normal', center = false, ...rest } = props;

  return (
    <p
      css={(theme) => [
        tw`p-0 m-0 leading-normal`,
        variant === 'subtle' && { color: theme.fgAccent },
        center && tw`text-center`,
      ]}
      {...rest}
    >
      {children}
    </p>
  );
};
