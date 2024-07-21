'use client';
import { useCallback, useEffect, useState } from 'react';
import Movie from './movie';
import dayjs from 'dayjs';

export interface IMoviePageList {
  _id: string;
  image: string;
  name: string;
  namevn: string;
  type: string;
  duration: number;
  released: string;
}

interface Iprops {
  listMovies: IListMovie[];
}

const MovieList = (props: Iprops) => {
  const { listMovies } = props;
  const [stateMovie, setStateMovie] = useState(true);

  const filterMovie = (data: IListMovie[]) => {
    if (stateMovie) {
      return data.filter((movie) => {
        const releaseDate = new Date(movie.releaseDate).getTime() + 25200000;
        return releaseDate <= dayjs().valueOf();
      });
    }

    if (!stateMovie) {
      return data.filter((movie) => {
        const releaseDate = new Date(movie.releaseDate).getTime() + 25200000;
        return releaseDate > dayjs().valueOf();
      });
    }
  };

  const [movies, setMovies] = useState<IListMovie[]>(filterMovie(listMovies) || []);

  const handleClickMovie = useCallback(() => {
    setStateMovie(!stateMovie);
    const newListMovie = filterMovie(listMovies);
    setMovies(newListMovie || []);
  }, [stateMovie]);

  const SearchMovie = async (data: string) => {
    if (data) {
      let res = await fetch(
        `https://669a21fa9ba098ed61fe6e38.mockapi.io/allMovie/${data}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          cache: 'no-store',
        }
      );
      res = await res.json();
      console.log('🚀 ~ SearchMovie ~ res:', res);
      //@ts-ignore
      const infoSearch = filterMovie(res);
      return setMovies(infoSearch || []);
    }

    // if dost not paramater data,
    const newListMovie = filterMovie(listMovies);
    return setMovies(newListMovie || []);
  };

  return (
    <div className="w-full mx-auto max-w-screen-lg min-h-[600px]">
      <div className="font-medium mt-4 flex flex-col md:flex-row justify-between px-3 md:px-0">
        <div>
          <button
            className="md:mx-3 mx-2 text-[13px] lg:text-[15px] py-[16px] uppercase border-[#E50914]"
            onClick={handleClickMovie}
            style={{
              borderBottom: stateMovie === true ? '3px solid #E50914' : 'none',
            }}
          >
            phim đang chiếu
          </button>
          <button
            className="md:mx-3 ml-2 py-[16px] text-[13px] lg:text-[15px] uppercase"
            onClick={handleClickMovie}
            style={{
              borderBottom: stateMovie === false ? '3px solid #E50914' : 'none',
            }}
          >
            phim sắp chiếu
          </button>
        </div>
        <div className="relative flex items-center w-1/3 mt-3 md:mt-0">
          <input
            type="search"
            className="relative m-0 block flex-auto rounded-lg border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary h-fit "
            placeholder="Search"
            onChange={(e) => SearchMovie(e.target.value)}
          />
          <span
            className="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5"
            id="button-addon2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-x-16 lg:gap-y-10 md:gap-3 gap-3 justify-items-center my-12"
      >
        {movies.map((movie, index) => (
          <div key={movie.id}>{index < 9 && <Movie movie={movie ?? {}} />}</div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
