import { useBreakpoints } from 'lib/hooks/useBreakpoints';

type CompFn = (props: any) => JSX.Element;

export type ResponsiveProps<Component extends CompFn> = {
  children?: React.ReactNode;
  className?: string;
  component: Component;
  sm?: Parameters<Component>[0];
  md?: Parameters<Component>[0];
  lg?: Parameters<Component>[0];
} & Parameters<Component>[0];

export const Responsive = <Component extends CompFn>(props: ResponsiveProps<Component>) => {
  const { component, sm, md, lg, ...rest } = props;
  const breakpoints = useBreakpoints();
  const responsiveParams = {
    ...(breakpoints.sm && sm),
    ...(breakpoints.md && md),
    ...(breakpoints.lg && lg),
  };

  return component({ ...rest, ...responsiveParams });
};
