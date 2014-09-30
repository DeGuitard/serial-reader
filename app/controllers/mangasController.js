var locomotive = require('locomotive'),
    Controller = locomotive.Controller,
    console = require('console');

var Manga = require('../models/manga');

var mangasController = new Controller();

mangasController.index = function() {
    this.title = "Manga List";
    this.render();
};

mangasController.query = function() {
    var self = this;
    Manga.find({}, {chapters: 0}, {sort: {title: 1}}).exec(function(err, mangas) {
        if (err) {
            self.res.status(500).json(err);
        } else {
            self.res.status(200).json(mangas);
        }
    });
};

module.exports = mangasController;