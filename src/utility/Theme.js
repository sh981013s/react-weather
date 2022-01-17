// dark and light themes vars

export const LightTheme = {
  themeName: 'lightTheme',
  body: '#FFFFFF',
  text: '#000000',
  fontFamily: "'Source Sans Pro', sans-serif",
  bodyRgba: '252, 246, 244',
  textRgba: '0,0,0',
  background: `linear-gradient(
    90deg,
    rgba(94, 231, 223, 1) 35%,
    rgba(102, 166, 255, 1) 100%
  )`,
  transition: `background-color 500ms linear`,
  sidebar: '#64b784',
  navbar: '#FFFFFF',
  card: '#FFFFFF',
  detailBackground: `linear-gradient(to top, #86dbff 0, #e0c3fc 100%)`,
  circleBackground: `linear-gradient(to bottom,#ffd1ff,#ffe29f)`,
};

export const DarkTheme = {
  themeName: 'darkTheme',
  body: '#000000',
  text: '#FCF6F4',
  fontFamily: "'Source Sans Pro', sans-serif",
  bodyRgba: '252, 246, 244',
  textRgba: '0,0,0',
  background: `linear-gradient(90deg, rgba(55,40,101,1) 35%, rgba(0,0,0,1) 100%)`,
  transition: `background-color 500ms linear`,
  sidebar: '#A188A6',
  navbar: '#282043',
  card: '#020122',
  detailBackground: `linear-gradient(#fc7db8,#495cfc)`,
  circleBackground: `linear-gradient(to bottom,#ff8b8b,#6676ff)`,
};

export const breakpoints = {
  sm: 20, //em
  md: 30,
  lg: 45,
  xl: 60,
  xxl: 75,
};

export const mediaQueries = (key) => {
  return (style) => `@media (max-width: ${key}em) { ${style} }`;
};
