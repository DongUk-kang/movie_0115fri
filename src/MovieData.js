import React from 'react';

const Movie = () => {
    const movies = [
        {
            adult: false,
            backdrop_path: "/srYya1ZlI97Au4jUYAktDe3avyA.jpg",
            genre_ids: [
                14,
                28,
                12
            ],
            id: 464052,
            original_language: "en",
            original_title: "Wonder Woman 1984",
            overview: "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.",
            popularity: 3342.686,
            poster_path: "/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
            release_date: "2020-12-16",
            title: "Wonder Woman 1984",
            video: false,
            vote_average: 7.2,
            vote_count: 2641
        },
        {
            adult: false,
            backdrop_path: "/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg",
            genre_ids: [
                16,
                35,
                18,
                10402,
                14
            ],
            id: 508442,
            original_language: "en",
            original_title: "Soul",
            overview: "Joe Gardner is a middle school teacher with a love for jazz music. After a successful gig at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.",
            popularity: 2849.972,
            poster_path: "/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg",
            release_date: "2020-12-25",
            title: "Soul",
            video: false,
            vote_average: 8.4,
            vote_count: 3477
        },
        {
            adult: false,
            backdrop_path: "/aHYUj0hICtWZ5tPiCIm6pWUcjYK.jpg",
            genre_ids: [
                28,
                18,
                27,
                10752
            ],
            id: 675327,
            original_language: "en",
            original_title: "Shadow in the Cloud",
            overview: "A WWII pilot traveling with top secret documents on a B-17 Flying Fortress encounters an evil presence on board the flight.",
            popularity: 2653.638,
            poster_path: "/t7EUMSlfUN3jUSZUJOLURAzJzZs.jpg",
            release_date: "2020-12-31",
            title: "Shadow in the Cloud",
            video: false,
            vote_average: 6.1,
            vote_count: 130
        }
    ]


    return (
        <div>
            {movies.map(item => (
                <>
                    <h1>{item.title}</h1>
                    <img src={item.poster_path} alt={item.title} />
                </>
            ))}
        </div>
    );
};

export default Movie;
