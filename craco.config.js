const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    
    webpack: {
        alias: {
            '@components': resolvePath('./src/components'),
            '@scss': resolvePath('./src/scss'),
            '@image': resolvePath('./src/image')
        }
    },
 
}