import { lgQuery, mdQuery } from '../styles/mq';
import useMediaQuery from './useMediaQuery';

export function useBreakpoints() {
  let md = useMediaQuery(mdQuery);
  let lg = useMediaQuery(lgQuery);
  return { sm: true, md, lg };
}
