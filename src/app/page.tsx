import Home from '@/components/home/home';

const HomePage = async () => {
  let res = await fetch(`https://669a21fa9ba098ed61fe6e38.mockapi.io/allMovie`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });
  res = await res.json();

  return (
    <Home
      //@ts-ignore
      listMovies={res?.data ?? []}
    />
  );
};

export default HomePage;
