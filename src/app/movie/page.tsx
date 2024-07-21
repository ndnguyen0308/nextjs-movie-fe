import MovieList from '@/components/movie/movie-page/movieList';

const MoviePage = async () => {
  let res = await fetch(`https://669a21fa9ba098ed61fe6e38.mockapi.io/allMovie`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });
  res = await res.json();
  console.log('🚀 ~ MoviePage ~ res:', res);

  return (
    <MovieList
      //@ts-ignore
      listMovies={res ?? []}
    />
  );
};

export default MoviePage;
