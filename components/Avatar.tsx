export interface AvatarProps {
  href: string;
  size?: number;
  className?: string;
}

const MASK_ID = 'wjQSKG20L2_6MfWB_XUMn';

export let Avatar: React.FC<AvatarProps> = (props) => {
  let { href, size = 20, ...rest } = props;

  return (
    <svg viewBox="0 0 20 20" fill="#fff" width={size} {...rest}>
      <defs>
        <mask id={MASK_ID}>
          <path d="m0 10a1 1 0 0120 0a1 1 0 01-20 0" />
        </mask>
      </defs>
      <image
        href={href}
        width="20"
        height="20"
        mask={`url(#${MASK_ID})`}
        preserveAspectRatio="xMidYMid slice"
      />
    </svg>
  );
};
