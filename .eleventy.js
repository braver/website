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
            { key: '1', name: 'Polaroid 1' },
            { key: '1-crop', name: 'Polaroid 1 (detail)' },
            { key: '2', name: 'Polaroid 2' },
            { key: '2-crop', name: 'Polaroid 2 (detail)' },
            { key: '3', name: 'Polaroid 3' },
            { key: '3-crop', name: 'Polaroid 3 (detail)' },
            { key: '4', name: 'Polaroid 4' },
            { key: '4-crop', name: 'Polaroid 4 (detail)' },
            { key: '5', name: 'Polaroid 5' },
            { key: '5-crop', name: 'Polaroid 5 (detail)' },
            { key: '6', name: 'Polaroid 6' },
            { key: '6-crop', name: 'Polaroid 6 (detail)' },
            { key: '7', name: 'Polaroid 7' },
            { key: '7-crop', name: 'Polaroid 7 (detail)' },
            { key: '8', name: 'Polaroid 8' },
            { key: '8-crop', name: 'Polaroid 8 (detail)' },
            { key: '9', name: 'Polaroid 9' },
            { key: '9-crop', name: 'Polaroid 9 (detail)' },
            { key: '10', name: 'Polaroid 10' },
            { key: '10-crop', name: 'Polaroid 10 (detail)' },
            { key: '11', name: 'Polaroid 11' },
            { key: '11-crop', name: 'Polaroid 11 (detail)' },
            { key: '12', name: 'Polaroid 12' },
            { key: '12-crop', name: 'Polaroid 12 (detail)' },
            { key: '13', name: 'Polaroid 13' },
            { key: '13-crop', name: 'Polaroid 13 (detail)' },
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
