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
            { key: '600-2021-01-01-0001', name: 'Zandmotor' },
            { key: '286-2018-08-15-0001', name: 'Terschelling' },
            { key: '508-0001', name: 'Etna' },
            { key: '570-2022-01-09-0001', name: 'Driving' },
            { key: '37-2024-11-03-0002', name: 'Berlin' },
            { key: '194-2018-08-31-0001', name: 'Ameland' },
            { key: '98-2024-11-03-0001', name: 'Blijdorp' },
            { key: '249-2021-12-15-0001', name: 'Amsterdam' },
            { key: '249-2026-04-18-0001', name: 'Amsterdam' },
            { key: '570-2024-08-15-0001', name: 'Driving' },
            { key: '534-2018-09-14-0001', name: 'Flying' },
            { key: '282-2024-10-21-0001', name: 'Terschelling' },
            { key: '452-2016-01-31-0001', name: 'Tenerife' },
            { key: '547-2019-04-27-0001', name: 'Delft' },
            { key: '303-2018-08-28-0001', name: 'Den Haag' },
            { key: '560-2019-10-21-0003', name: 'Iceland' },
            { key: '569-2019-10-06-0001', name: 'Iceland' },
            { key: '617-2021-12-04-0001', name: 'Veluwe' },
            { key: '561-2019-10-21-0001', name: 'Iceland' },
            { key: '615-2021-07-24-0001', name: 'Naarden' },
            { key: '209-2023-08-11-0001', name: 'Museon' },
            { key: '371-2018-08-29-0001', name: 'Nafplio' },
            { key: '650-2024-04-21-0001', name: 'Rijksmuseum' },
            { key: '372-2026-04-22-0001', name: 'Griekenland' },
            { key: '479-2018-08-29-0001', name: 'Camden' },
            { key: '496-2025-01-03-0003', name: 'Louvre' },
            { key: '226-2026-04-18-0002', name: 'Den Haag' },
            { key: '227-2020-09-27-0001', name: 'Den Haag' },
            { key: '226-2026-02-21-0001', name: 'Den Haag' },
            { key: '583-2020-03-24-0002', name: 'Rotterdam' },
            { key: '615-2021-07-24-0004', name: 'Elburg' },
            { key: '385-2020-03-08-0001', name: 'Schiphol' },
            { key: '620-2021-12-01-0002', name: 'Tiengemeten' },
            { key: '660-2025-12-31-0001', name: 'Battenoord' },
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

    eleventyConfig.addCollection('wetfeet', () => {
        return [
            { key: 'R0000602', name: '602' },
            { key: 'R0000603', name: '603' },
            { key: 'R0000607', name: '607' },
            { key: 'R0002369', name: '2369' },
            { key: 'R0000664', name: '664' },
            { key: 'R0002355', name: '2355' },
            { key: 'R0003239', name: '3239' },
            { key: 'R0000803', name: '803' },
            { key: 'R0002307', name: '2307' },
            { key: 'R0000723', name: '723' },
            { key: 'R0000792', name: '792' },
            { key: 'R0002718', name: '2718' },
            { key: 'R0003150', name: '3150' },
            { key: 'R0002281', name: '2281' },
        ]
    })

    eleventyConfig.addCollection('kites', () => {
        return [
            { key: '645-2023-12-29-0003', name: 'Board flip' },
            { key: '599-2020-12-28-0009', name: 'Schitter' },
            { key: '600-2020-12-27-0005', name: 'Kite' },
            { key: '623-2022-03-23-0001', name: 'Going in' },
            { key: '645-2023-12-27-0001', name: 'Board grab' },
            { key: '645-2023-12-29-0001', name: 'Flying' },
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
