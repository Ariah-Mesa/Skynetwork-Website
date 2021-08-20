const express = require('express')
const app = express()
const PORT = port = process.env.PORT || 3000
const { renderFile: render } = require('ejs')
const path = require('path').resolve()

app.use('/css', express.static(path + '/css'))
app.use('/js', express.static(path + '/js'))
app.use('/webfonts', express.static(path + '/webfonts'))
app.use('/images', express.static(path + '/images'))

app.get('/', async (_, res) => {
    const str = await render(path + '/pages/index.ejs')

    res.send(str)
})

app.listen(PORT, () => { console.log(`Express server is now on http://localhost:${PORT}`) })