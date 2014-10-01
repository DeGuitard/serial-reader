var criteriaFilter = function () {
    return function (data, filters) {
        if (data === undefined) {
            return [];
        }
        if (filters === undefined) {
            return data;
        }
        var filtered = [];

        for (var i = 0; i < data.length; i++) {
            var item = data[i],
                valid = true;

            if (typeof filters.query == 'string') {
                var query = filters.query.toLowerCase();
                valid = false;
                if (item.title.toLowerCase().contains(query)) {
                    valid = true;
                } else if (item.year !== undefined && item.year.toString().contains(query)) {
                    valid = true;
                }
            }

            angular.forEach(filters.artists, function (artist) {
                if (item.artists.indexOf(artist) == -1) {
                    valid = false;
                }
            });

            angular.forEach(filters.authors, function (author) {
                if (item.authors.indexOf(author) == -1) {
                    valid = false;
                }
            });

            angular.forEach(filters.genres, function (genre) {
                if (item.genres.indexOf(genre) == -1) {
                    valid = false;
                }
            });

            if (valid) {
                filtered.push(item);
            }
        }
        return filtered;
    };
};