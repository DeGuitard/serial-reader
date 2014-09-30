var mongoose = require('mongoose');

var mangaSchema = mongoose.Schema({
    title: String,
    authors: Array,
    artists: Array,
    year: Number,
    summary: String,
    genres: Array,
    chapters: Array,
    suggestions: Array,
    thumbnail: String
})

module.exports = mongoose.model("manga", mangaSchema);