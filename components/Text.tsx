import tw from 'twin.macro';

export interface TextProps {}

export let Text: React.FC<TextProps> = (props) => {
  let { children } = props;
  return <p css={[tw`p-0 m-0`]}>{children}</p>;
};
