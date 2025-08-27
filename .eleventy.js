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

    eleventyConfig.addCollection('flamingos', () => {
        return [
            { key: '580-2020-02-16-0008', name: 'Dixi' },
            { key: '638-2023-08-23-0002', name: 'Security' },
            { key: '554-2019-05-19-0003', name: 'Private church' },
            { key: '573-2021-08-29-0002', name: 'Iceland' },
            { key: '505-0001', name: 'Sicily' },
            { key: '550-2019-05-04-0001', name: 'Chairs' },
            { key: '504-0002', name: 'Sicily' },
            { key: 'R0001338', name: 'Delft' },
            { key: '611-2021-07-13-0001', name: 'Flamingo' },
            { key: '220-2020-10-04-0002', name: 'France' },
            { key: '578-2020-01-14-0001', name: 'Tenerife' },
            { key: 'DSC_0491', name: 'Cat' },
            { key: 'L1000004', name: 'Car' },
            { key: '608-2021-04-14-0002', name: 'Flamingo' },
            { key: 'IMG_6043', name: 'Floating flamingo' },
            { key: '612-2021-06-20-0001', name: 'Rectangles' },
            { key: '638-2023-08-23-0001', name: '14' },
            { key: '590-2020-07-05-0007', name: 'Sun' },
            { key: '574-2019-11-06-0001 2', name: 'Airport' },
            { key: '442-2020-03-14-0003 2', name: 'Beach' },
            { key: '595-2020-10-31-0005', name: 'Zandmotor' },
            { key: '630-2022-11-22-0002', name: 'Zeeland' },
            { key: '634-2023-03-12-0004', name: 'Birds' },
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
