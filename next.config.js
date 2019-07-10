const prefixPath = process.env.NODE_ENV === 'production' ? '/portfolio/out/' : ''

module.exports = {
  assetPrefix: prefixPath,
  plugins: ['babel-plugin-styled-components']
}
