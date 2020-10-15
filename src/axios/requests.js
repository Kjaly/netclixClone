const API_KEY = '076af62a1ec955c8c3fbb8720cc67957';

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=ru=RU`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=ru-Ru&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=ru-Ru`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&language=ru-Ru&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&language=ru-Ru&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&language=ru-Ru&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&language=ru-Ru&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&language=ru-Ru&with_genres=99`,
}

export default requests;