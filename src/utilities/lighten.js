import color from 'color';

export default (hex, brightness = 0.25) => {
  return color(hex).lighten(brightness).hex();
};
