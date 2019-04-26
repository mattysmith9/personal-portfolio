import Typography from 'typography';
import sternGroveTheme from 'typography-theme-stern-grove';

const typography = new Typography(sternGroveTheme);

sternGroveTheme.bodyFontFamily = ['Roboto', 'sans-serif'];

typography.toString()

export const { scale, rhythm, options } = typography;
export default typography;
