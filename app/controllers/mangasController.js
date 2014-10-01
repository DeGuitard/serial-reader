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
    var self = this, req = {}, fields = {};

    if (this.param("title") !== undefined) {
        req.title = this.param("title");
    }

    // If the request is going to grab all objects, omit some fields to reduce the load.
    if (isEmptyObject(req)) {
        fields = {chapters: 0, summary: 0, suggestions: 0};
    }

    Manga.find(req, fields, {sort: {title: 1}}).exec(function(err, mangas) {
        if (err || isEmptyObject(mangas)) {
            self.res.status(500).json(err);
        } else {
            self.res.status(200).json(mangas);
        }
    });
};

function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

module.exports = mangasController;