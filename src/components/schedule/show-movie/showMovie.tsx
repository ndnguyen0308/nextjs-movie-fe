import Link from 'next/link';

interface IShowTime {
  date: string;
  roomName: string;
  timeStart: string;
  timeEnd: string;
}

interface IShowMovies {
  id: number;
  name: string;
  imageId: string;
  showTimes: IShowTime[];
}

interface Iprops {
  showMovie: IListMovie;
}

const ShowMovie = ({ showMovie }: Iprops) => {
  return (
    <div className="mx-[85px] mb-8">
      <h3 className="text-base truncate font-bold uppercase text-[#0E1D2F] pt-4 pb-5">
        {showMovie.name}
      </h3>
      <div className="md:flex pl-4">
        {/* <img src={showMovie.imagePath} className="w-[117px] h-[166px] mr-16" alt=""></img> */}
        <div className="w-[117px] h-[166px] mr-16">
          <img
            className="w-full h-full bg-cover object-cover"
            src={showMovie.imagePath}
            alt=""
          />
        </div>
        <div className="md:h-1/2 md:flex grid grid-cols-2">
          {showMovie.schedule.map((showTime) => (
            <Link href={`/booking?id=${`idSchedule`}`} key={showTime.timeStart}>
              <div className="hover:bg-[#ff5400] transition duration-500 ease-in-out hover:text-white cursor-pointer h-full mt-3 md:mt-0">
                <div className="border border-solid border-[#e5e5e5]  px-3 py-1 text-lg font-medium">
                  <span>{showTime.timeStart}</span>-<span>{showTime.timeEnd}</span>
                </div>
                <div className="border border-t-0 border-solid border-[#e5e5e5]  px-3 text-center">
                  <p>Phòng chiếu</p>
                  <p>{showTime.roomId}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowMovie;
