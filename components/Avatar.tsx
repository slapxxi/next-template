export interface AvatarProps {
  href: string;
  size?: number;
}

const MASK_ID = 'wjQSKG20L2_6MfWB_XUMn';

export let Avatar: React.FC<AvatarProps> = (props) => {
  let { href, size = 20 } = props;

  return (
    <svg viewBox="0 0 20 20" fill="#fff" width={size}>
      <defs>
        <mask id={MASK_ID}>
          <path d="m0 10a1 1 0 0120 0a1 1 0 01-20 0" />
        </mask>
      </defs>
      <image href={href} width="20" mask={`url(#${MASK_ID})`} />
    </svg>
  );
};
