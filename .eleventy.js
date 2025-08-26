const execSync = require('child_process').execSync
const gitHash = execSync('git rev-parse --short HEAD').toString().trim()

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('photo')
    eleventyConfig.addPassthroughCopy({ static: 'static_' + gitHash })

    eleventyConfig.addFilter('bust', (p) => {
        return p.replace('static/', 'static_' + gitHash + '/')
    })

    return {
        dir: {
            input: '.',
            output: '_site',
        },
        passthroughFileCopy: true,
    }
}
