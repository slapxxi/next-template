import { defaultTheme } from './styles/theme';

export type Theme = typeof defaultTheme & { data?: any };
