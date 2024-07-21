'use client';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

const Payment = () => {
  const searchParams = useSearchParams();

  const movieName = searchParams.get('movieName');
  console.log('🚀 ~ Payment ~ movieName:', movieName);
  const date = searchParams.get('date');
  const time = searchParams.get('time');
  const seat = searchParams.get('seat');
  const count = searchParams.get('count');
  console.log('🚀 ~ Payment ~ count:', count);
  const total = searchParams.get('total');

  return (
    <div className="max-w-screen-lg w-full px-6 lg:mx-auto lg:min-h-[500px] h-dvh my-10">
      <div className="p-[10px] bg-[#7e8eaa] uppercase text-white font-medium text-lg text-center max-w-full">
        Phương thức thanh toán
      </div>
      <div className="text-[21px] text-[#333] font-semibold pt-[30px] pb-[10px]">
        Nội dung thanh toán
      </div>
      <div className="border border-solid border-[#7e8eaa] px-8 py-5 max-w-full">
        <p className="pb-[10px]">
          <span className="text-[18px] text-[#0e1d2f] font-medium w-24 inline-block">
            Phim:
          </span>
          <span>{movieName}</span>
        </p>
        <p className="pb-[10px]">
          <span className="text-[18px] text-[#0e1d2f] font-medium w-24 inline-block">
            Ngày:
          </span>
          <span>{date}</span>
        </p>
        <p className="pb-[10px]">
          <span className="text-[18px] text-[#0e1d2f] font-medium w-24 inline-block">
            Thời gian:
          </span>
          <span>{time}</span>
        </p>
        <p className="pb-[10px]">
          <span className="text-[18px] text-[#0e1d2f] font-medium w-24 inline-block">
            Ghế:
          </span>
          <span>{seat}</span>
        </p>
        <p className="pb-[10px]">
          <span className="text-[18px] text-[#0e1d2f] font-medium w-24 inline-block">
            Số ghế:
          </span>
          <span>{count}</span>
        </p>
        <p className="pb-[10px]">
          <span className="text-[18px] text-[#0e1d2f] font-medium w-24 inline-block">
            Tổng tiền:
          </span>
          <span>{total} VNĐ</span>
        </p>
      </div>
      <div className="mt-8 text-center w-full">
        <Link href="/ticket">
          <button className="px-[15px] py-[6px] bg-[#7e8eaa] text-white rounded-md border-none uppercase font-bold text-[14px]">
            Tiếp tục
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
