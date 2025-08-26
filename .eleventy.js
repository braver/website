const execSync = require('child_process').execSync
const gitHash = execSync('git rev-parse --short HEAD').toString().trim()

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('photo')
    eleventyConfig.addPassthroughCopy({ static: 'static_' + gitHash })

    eleventyConfig.addFilter('bust', (p) => {
        return p.replace('static/', 'static_' + gitHash + '/')
    })

    eleventyConfig.addCollection('travel', () => {
        return [
            { key: 10, name: 'Gran Canaria' },
            { key: 1, name: 'Ameland' },
            { key: 2, name: 'Ameland' },
            { key: 9, name: 'Tiengemeten' },
            { key: 3, name: 'Ameland' },
            { key: 13, name: 'London' },
            { key: 6, name: 'Greece' },
            { key: 7, name: 'Texel' },
            { key: 11, name: 'Maspalomas' },
            { key: 12, name: 'Maspalomas' },
            { key: 8, name: 'Etna' },
            { key: 5, name: 'Vogelwijk' },
            { key: 4, name: 'Terschelling' },
        ]
    })

    eleventyConfig.addCollection('polaroid', () => {
        return [
            { key: 1, name: 'Polaroid 1' },
            { key: 2, name: 'Polaroid 2' },
            { key: 3, name: 'Polaroid 3' },
            { key: 4, name: 'Polaroid 4' },
            { key: 5, name: 'Polaroid 5' },
            { key: 6, name: 'Polaroid 6' },
            { key: 7, name: 'Polaroid 7' },
            { key: 8, name: 'Polaroid 8' },
            { key: 9, name: 'Polaroid 9' },
            { key: 10, name: 'Polaroid 10' },
            { key: 11, name: 'Polaroid 11' },
            { key: 12, name: 'Polaroid 12' },
            { key: 13, name: 'Polaroid 13' },
        ]
    })

    return {
        dir: {
            input: '.',
            output: '_site',
        },
        passthroughFileCopy: true,
    }
}
