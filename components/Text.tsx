import tw from 'twin.macro';

export interface TextProps {
  className?: string;
}

export let Text: React.FC<TextProps> = (props) => {
  let { children, ...rest } = props;

  return (
    <p css={[tw`p-0 m-0 leading-normal`]} {...rest}>
      {children}
    </p>
  );
};
