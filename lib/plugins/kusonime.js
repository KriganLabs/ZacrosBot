const axios = require('axios')
const cheerio = require('cheerio')

async function kusonime(Query) {
  try {
    var {
      data
    } = await axios.get('https://kusonime.com/?s=' + Query + '&post_type=post')
    var $ = cheerio.load(data)

    let urlAccess = $('div.thumb > a').attr('href')
    var {
      data
    } = await axios.get(urlAccess)
    var $ = cheerio.load(data)
    let title = $('h1.jdlz').text()
    let thumbnail = $('div.post-thumb > img').attr('src')
    let infox = []
    let info = {}
    let sinopsis = $('div.lexot > p').text()
    let link_dl = []
    let dl_link = {}

    $('div.info').each(function(b, c) {
      $(c).find('p').each(function(d, e) {
        infox.push($(e).text())
      })
    })
    $('div.smokeurl').each(function(b, c) {
      $(c).find('a').each(function(d, e) {
        link_dl.push($(e).attr('href'))
      })
    })

    info.Japanese = infox[0].split(':')[1].trim()
    info.Genre = infox[1].split(':')[1].trim()
    info.Season = infox[2].split(':')[1].trim()
    info.Producers = infox[3].split(':')[1].trim()
    info.Type = infox[4].split(':')[1].trim()
    info.Status = infox[5].split(':')[1].trim()
    info.Episodes = infox[6].split(':')[1].trim()
    info.Scores = infox[7].split(':')[1].trim()
    info.Duration = infox[8].split(':')[1].trim()
    info.Released = infox[9].split(':')[1].trim()

    dl_link.Resolusi360 = link_dl[0].trim()
    dl_link.Resolusi480 = link_dl[6].trim()
    dl_link.Resolusi720 = link_dl[12].trim()
    dl_link.Resolusi1080 = link_dl[18].trim()

    return {
      title,
      thumbnail,
      info,
      sinopsis,
      dl_link
    }
  } catch (err) {
    return err
  }
}

module.exports = { kusonime }
