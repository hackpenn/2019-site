const { writeFile, removeSync, mkdirSync } = require('fs-extra')
const axios = require('axios')
const Jimp = require('jimp')
const data = require('./src/data.json')

const imageFolder = './public/judges/'

const avatarUrl = username =>
  `https://twitter.com/${username}/profile_image?size=original`

const downloadImage = username =>
  axios
    .get(avatarUrl(username), {
      responseType: 'arraybuffer'
    })
    .catch(err => {
      throw error
    })
    .then(res => {
      const fileName = `${username}.png`
      writeFile(imageFolder + fileName, res.data, 'binary', err => {
        if (err) throw err
      })
      return imageFolder + fileName
    })
    .then(path =>
      Jimp.read(path)
        .then(img =>
          img
            .resize(256, 256)
            .quality(64)
            .write(path)
        )
        .catch(err => console.error(err))
    )

exports.onPreBootstrap = () => {
  removeSync(imageFolder)
  mkdirSync(imageFolder)
  // Download avatars
  data.judges.map(judge => downloadImage(judge.twitter))
}
