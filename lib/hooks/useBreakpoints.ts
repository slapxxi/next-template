import useMediaQuery from '@mui/material/useMediaQuery';
import { lgQuery, mdQuery } from '../styles/mq';

export function useBreakpoints() {
  let md = useMediaQuery(mdQuery);
  let lg = useMediaQuery(lgQuery);
  return { sm: true, md, lg };
}
