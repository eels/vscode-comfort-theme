import color from 'color';

export default (hex, brightness = 0.7) => {
  return color(hex).lighten(brightness).hex();
};
