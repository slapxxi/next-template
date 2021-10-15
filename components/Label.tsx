import styled from '@emotion/styled';

export interface LabelProps {
  subtle?: boolean;
}

export let Label = styled.label<LabelProps>(({ subtle = false, theme }) => [
  subtle && { color: theme.fgAccent },
]);
