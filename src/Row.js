import React, {useState , useEffect} from 'react'
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original';
// const API_KEY = '184b8b7304115ccb629d3947d2943df0';
// const fetchUrl1 = `/trending/all/week?api_key=${API_KEY}&language=en-US`;

function Row({title, fetch, isLargeRow}) {
    const [movies, setMovies ] = useState([]);
    const [trailerUrl, setTrailerUrl ] = useState("");

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetch);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetch]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("");
        } else {
            movieTrailer( movie?.title || movie?.name || movie?.original_name || "")
                .then((url) => {
                    //kch
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => console.log(error));
            }
    };

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map((movie) => {
                    return (<img 
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}   
                    />);
                })};
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row
