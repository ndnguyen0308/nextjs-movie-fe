'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Router from 'next/router';
import { useState } from 'react';

interface ISeat {
  id: number;
  name: string;
  status: boolean;
  type: string;
  price: number;
}

const BookingSeat = () => {
  const router = useRouter();
  const seats: ISeat[] = [
    { id: 1, name: 'A1', status: false, type: 'standard', price: 65000 },
    { id: 2, name: 'A2', status: false, type: 'standard', price: 65000 },
    { id: 3, name: 'A3', status: false, type: 'standard', price: 65000 },
    { id: 4, name: 'A4', status: false, type: 'standard', price: 65000 },
    { id: 5, name: 'A5', status: false, type: 'standard', price: 65000 },
    { id: 6, name: 'A6', status: false, type: 'standard', price: 65000 },
    { id: 7, name: 'A7', status: false, type: 'standard', price: 65000 },
    { id: 8, name: 'A8', status: false, type: 'standard', price: 65000 },
    { id: 9, name: 'A9', status: false, type: 'standard', price: 65000 },
    { id: 10, name: 'A10', status: false, type: 'standard', price: 65000 },
    { id: 11, name: 'B1', status: false, type: 'standard', price: 65000 },
    { id: 12, name: 'B2', status: false, type: 'standard', price: 65000 },
    { id: 13, name: 'B3', status: false, type: 'standard', price: 65000 },
    { id: 14, name: 'B4', status: false, type: 'standard', price: 65000 },
    { id: 15, name: 'B5', status: false, type: 'standard', price: 65000 },
    { id: 16, name: 'B6', status: false, type: 'standard', price: 65000 },
    { id: 17, name: 'B7', status: false, type: 'standard', price: 65000 },
    { id: 18, name: 'B8', status: false, type: 'standard', price: 65000 },
    { id: 19, name: 'B9', status: false, type: 'standard', price: 65000 },
    { id: 20, name: 'B10', status: false, type: 'standard', price: 65000 },
    { id: 21, name: 'C1', status: false, type: 'standard', price: 65000 },
    { id: 22, name: 'C2', status: false, type: 'standard', price: 65000 },
    { id: 23, name: 'C3', status: false, type: 'standard', price: 65000 },
    { id: 24, name: 'C4', status: false, type: 'standard', price: 65000 },
    { id: 25, name: 'C5', status: false, type: 'standard', price: 65000 },
    { id: 26, name: 'C6', status: false, type: 'standard', price: 65000 },
    { id: 27, name: 'C7', status: false, type: 'standard', price: 65000 },
    { id: 28, name: 'C8', status: false, type: 'standard', price: 65000 },
    { id: 29, name: 'C9', status: false, type: 'standard', price: 65000 },
    { id: 30, name: 'C10', status: false, type: 'standard', price: 65000 },
    { id: 31, name: 'D1', status: false, type: 'vip', price: 75000 },
    { id: 32, name: 'D2', status: false, type: 'vip', price: 75000 },
    { id: 33, name: 'D3', status: true, type: 'vip', price: 75000 },
    { id: 34, name: 'D4', status: false, type: 'vip', price: 75000 },
    { id: 35, name: 'D5', status: false, type: 'vip', price: 75000 },
    { id: 36, name: 'D6', status: false, type: 'vip', price: 75000 },
    { id: 37, name: 'D7', status: false, type: 'vip', price: 75000 },
    { id: 38, name: 'D8', status: true, type: 'vip', price: 75000 },
    { id: 39, name: 'D9', status: false, type: 'vip', price: 75000 },
    { id: 40, name: 'D10', status: false, type: 'vip', price: 75000 },
    { id: 41, name: 'E1', status: false, type: 'vip', price: 75000 },
    { id: 42, name: 'E2', status: false, type: 'vip', price: 75000 },
    { id: 43, name: 'E3', status: false, type: 'vip', price: 75000 },
    { id: 44, name: 'E4', status: false, type: 'vip', price: 75000 },
    { id: 45, name: 'E5', status: true, type: 'vip', price: 75000 },
    { id: 46, name: 'E6', status: false, type: 'vip', price: 75000 },
    { id: 47, name: 'E7', status: false, type: 'vip', price: 75000 },
    { id: 48, name: 'E8', status: false, type: 'vip', price: 75000 },
    { id: 49, name: 'E9', status: false, type: 'vip', price: 75000 },
    { id: 50, name: 'E10', status: false, type: 'vip', price: 75000 },
  ];

  // Router.push({
  //   pathname: '/booking',
  //   query: {
  //     movieName: 'AcLinhTrongMe',
  //     date: '17/07/2024',
  //     time: '22:20-23:55',
  //     seat: 'B05,B06',
  //     count: 2,
  //     total: 130000,
  //   },
  // });

  const [selectSeats, setSelectSeats] = useState<string[]>([]);
  let [countPrice, setCountPrice] = useState<number>(0);

  const handleSeat = (seat: ISeat) => {
    setSelectSeats((prev: string[]) => [...prev, seat.name]);
    setCountPrice((prev) => prev + seat.price);
    if (selectSeats.includes(seat.name) === true) {
      const newItems = selectSeats.filter((item) => item !== seat.name);
      setSelectSeats(newItems);
      setCountPrice(countPrice - seat.price);
    }
  };

  return (
    <div className="max-w-screen-lg w-full mx-auto my-5 lg:my-[50px] px-5 lg:p-0">
      <h2 className="text-[22px] font-bold text-primary ">Chọn ghế</h2>
      <div className="grid lg:grid-cols-booking mb-12">
        <div className="lg:ml-[95px] p-5 md:border-r md:border-dotted md:border-[#adadad] ">
          <div
            style={{
              backgroundImage:
                'repeating-linear-gradient(50deg, #E3E3E3 0px, #E3E3E3 3px, transparent 3px, transparent 4px, #E3E3E3 0px)',
            }}
            className="mx-8 mt-[5px] mb-12 text-primary p-[10px] text-center rounded-md"
          >
            màn hình
          </div>
          <div>
            <ul className="grid grid-cols-10 gap-2 w-[90%] md:w-[60%] mx-auto">
              {seats.map((seat) =>
                seat.status == false ? (
                  <li
                    key={seat.id}
                    className={`border-2 border-[#c9c2b5] border-solid hover:bg-[#72BA14] hover:border-[#72BA14] text-[11px] font-light text-center text-[#777] cursor-pointer h-7 w-7 flex items-center justify-center ${
                      seat.type === 'vip' && ' border-[#ffc000] '
                    } ${selectSeats.includes(seat.name) && 'bg-[#72BA14] border-none'}`}
                    onClick={() => handleSeat(seat)}
                  >
                    {seat.name}
                  </li>
                ) : (
                  <li
                    key={seat.id}
                    className="text-[11px] font-light text-center text-[#777] h-7 w-7 flex items-center justify-center bg-booked"
                  >
                    {seat.name}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Thông tin movie */}
        <div className="px-[15px] text-[18px] text-[#666] font-light">
          <img
            src="https://metiz.vn/media/poster_film/350x495-aclinh.jpg"
            className="w-[200px] h-[281px] mb-3 mx-auto lg:mx-0"
            alt=""
          ></img>
          <p className="mb-3">
            <span className="pr-1">Phim:</span>
            <span className="uppercase">Ác linh trong xác mẹ</span>
          </p>
          <p className="mb-3">
            <span className="pr-1">Ngày:</span>
            <span>17/07/2024</span>
          </p>
          <p className="mb-3">
            <span className="pr-1">Thời gian:</span>
            <span>22:20-23:55</span>
          </p>
          <div className="mb-3">
            <span className="pr-1">Ghế:</span>
            <div className="grid grid-cols-4 gap-3 pl-4 pt-3">
              {selectSeats.map((seat, index) => (
                <div
                  key={index}
                  className=" h-[26px] bg-[#f7f7f7] border border-solid border-[#d3d3d3] text-center"
                >
                  {seat}
                </div>
              ))}
            </div>
          </div>
          <p className="mb-3">
            <span className="pr-1">Số vé:</span>
            <span>{selectSeats.length}</span>
          </p>
          <p className="mb-5">
            <span className="mr-1">Tổng tiền:</span>
            <span>{countPrice} VNĐ</span>
          </p>
          <div>
            <ul>
              <li className="flex items-center gap-5 mb-6">
                <div className="h-7 w-7 bg-booked"></div>
                <span>Ghế đã đặt</span>
              </li>
              <li className="flex items-center gap-5 mb-6">
                <div className="h-7 w-7 bg-[#72BA14]"></div>
                <span>Ghế đang chọn</span>
              </li>
              <li className="flex items-center gap-5 mb-6">
                <div className="h-7 w-7 border-2 border-[#c9c2b5] border-solid"></div>
                <span>Ghế thường</span>
              </li>
              <li className="flex items-center gap-5 mb-6">
                <div className="h-7 w-7 border-2 border-[#ffc000] border-solid"></div>
                <span>Ghế VIP</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-[30px] py-[15px] bg-[#cdc197]">
        <Link href="/schedule">
          <div className="flex gap-3 cursor-pointer">
            <img src="/assets/btn_total_prev.png" alt="" />
            <span>Đổi suất chiếu</span>
          </div>
        </Link>
        <Link
          href={`/payment?movieName=${'AcLinhTrongme'}&count=${2}`}
          as={`/payment`}
          passHref
        >
          <div className="flex gap-3">
            <span>Tiếp tục</span>
            <img src="/assets/btn_total_next.png" alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BookingSeat;
