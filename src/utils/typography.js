import Typography from 'typography';
import sternGroveTheme from 'typography-theme-stern-grove';
const typography = new Typography(sternGroveTheme);
sternGroveTheme.bodyFontFamily = ['Nunito Sans', 'sans-serif'];

export const { scale, rhythm, options } = typography
export default typography;
