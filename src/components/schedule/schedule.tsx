'use client';
import { useEffect, useState } from 'react';
import ShowMovie from './show-movie/showMovie';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';

const Schedule = () => {
  const [pickDate, setPickDate] = useState(dayjs());
  const [showMovies, setShowMovies] = useState<IListMovie[]>();
  console.log('🚀 ~ Schedule ~ showMovies:', showMovies);
  const currentDate = dayjs();

  let futureDates = [];
  for (let i = 0; i < 6; i++) {
    futureDates.push(currentDate.add(i + 1, 'day'));
  }

  const fetchSchedule = async () => {
    let res = await fetch(`${process.env.customURL}/movie/getMovieFollowDay`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: pickDate,
      }),
      cache: 'no-store',
    });
    res = await res.json();
    //@ts-ignore
    setShowMovies(res.data);
  };

  useEffect(() => {
    fetchSchedule();
  }, [pickDate]);

  return (
    <div className="max-w-screen-xl w-full mx-auto mb-28 min-h-[500px]">
      <h2 className="px-[15px] py-[25px] text-2xl text-[#ff5400] font-medium">
        Lịch chiếu
      </h2>
      <div className="bg-[#F9F6EC] py-10">
        <h3 className="mt-5 mb-3 pl-[15px] font-medium text-[24px]">Chọn ngày chiếu</h3>
        <div>
          <div className="text-center text-[22px]">Tháng 7</div>
          <ul className="flex justify-center md:gap-16 gap-4 mt-6">
            <li
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setPickDate(currentDate)}
            >
              <div className="text-lg mb-1">{currentDate.format('dddd')}</div>
              <div
                className={`text-base inline px-[13px] py-[6px] ${
                  currentDate.format('DD') === pickDate.format('DD')
                    ? 'bg-[#ff5400] text-white rounded-[50%]'
                    : ''
                }`}
                key="current"
              >
                {currentDate.format('DD')}
              </div>
            </li>
            {futureDates.map((date, index) => (
              <li
                key={index}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setPickDate(date)}
              >
                <div className="text-lg mb-1">{date.format('dddd')}</div>
                <div
                  className={`text-base inline px-[13px] py-[6px] ${
                    date.format('DD') === pickDate.format('DD')
                      ? 'bg-[#ff5400] text-white rounded-[50%]'
                      : ''
                  }`}
                  key={index}
                >
                  {date.format('DD')}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h2 className="text-2xl pt-[20px] pb-[10px] pl-[15px] font-medium">
        Chọn lịch chiếu
      </h2>
      {showMovies?.map((showMovie) => (
        <ShowMovie key={showMovie.id} showMovie={showMovie ?? {}} />
      ))}
    </div>
  );
};

export default Schedule;
