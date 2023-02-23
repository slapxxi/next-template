import { styled } from '@mui/material/styles';
import MuiSlider from '@mui/material/Slider';
import tw from 'twin.macro';

export const Slider = styled(MuiSlider)(() => ({
  ...tw`text-mediumBlue-500`,
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    ...tw`h-5 w-5 bg-white border-current border-2`,
    '&:active': {
      boxShadow: `0 0 0 4px hsla(224, 81%, 50%, 0.16)`,
    },
    '&:hover': {
      boxShadow: `0 0 0 4px hsla(224, 81%, 50%, 0.16)`,
    },
  },
  '& .MuiSlider-track': {
    height: 3,
  },
  '& .MuiSlider-rail': {
    ...tw`text-slate-400 h-0.5`,
  },
}));
