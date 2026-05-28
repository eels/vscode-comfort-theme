import color from 'color';

export default (hex, amount = 0.5) => {
  return color(hex).darken(amount).hex();
};
