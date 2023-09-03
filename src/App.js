import {useEffect, useState} from "react";
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=4a903e6c';
// const movie1 = {
//     "Title": "Spiderman",
//     "Year": "1990",
//     "imdbID": "tt0100669",
//     "Type": "movie",
//     "Poster": "N/A"
// }
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setsearchTerm] = useState('');

    const searchMovies = async (title) => {
        const completeURL = API_URL + "&s=" + title; 
        const response = await fetch(completeURL);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('jalsa');
    }, []);
    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                placeholder="what are we watching today"
                value={searchTerm}
                
                onChange={(e)=> setsearchTerm(e.target.value)}
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={()=> searchMovies(searchTerm)}
                
                />
            </div>
            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie)=> (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>no movie found</h2>
                </div>
            )
        }
        </div>
    );
}

export default App;