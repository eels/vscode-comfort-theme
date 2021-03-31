export default (hex, opacity = 1) => {
  return `${hex}${('0' + Math.floor(opacity * 255).toString(16)).slice(-2)}`
}
