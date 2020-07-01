const app = require('../../index').app;
const LinkModel = require('../models/link-model')

app.get("/api/links", (req, res) => {
  LinkModel.find({}, (err, links) => {
    if (!err) res.send(links)
    else res.status(500).send("Ошибка при получении ссылок")
  })
})