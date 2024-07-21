'use client';
//import logic
import React, { useEffect, useState, useCallback } from 'react';
//import components
import { Dialog, DialogBody, DialogFooter } from '@material-tailwind/react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export interface IMovieList {
  _id: string;
  image: string;
  name: string;
  namevn: string;
}

interface Iprops {
  movie: IListMovie;
}

const DetailMovie = ({ movie }: Iprops) => {
  const movieId = useParams();
  // const [size, setSize] = useState(null);
  const [vlYoutube, setVlYoutube] = useState(false);
  const [content, setContent] = useState(true);
  const [loadingPage, setLoadingPage] = useState(false);

  // const movie = {
  //   _id: '1',
  //   actors: 'Việt Hào',
  //   bg: 'https://metiz.vn/media/poster_film/1080x1350-insideout_TCkGnfY.jpg',
  //   country: 'Việt Nam',
  //   createdAt: '2024-06-16T17:27:38.977Z',
  //   director: 'Quốc Cường',
  //   discription: 'PHIM ĐƯỢC PHÉP PHỔ BIẾN RỘNG RÃI ĐẾN MỌI ĐUỐI TƯỢNG.',
  //   duration: 100,
  //   image:
  //     'https://kenh14cdn.com/thumb_w/660/203336854389633024/2024/6/7/photo-1-17177771541821969933834.jpg',
  //   limitAge: 13,
  //   name: 'GIA TÀI CỦA NGOẠI ',
  //   namevn: ' EMOTIONAL PIECE 2 ',
  //   poster: 'https://metiz.vn/media/poster_film/1080x1350-insideout_TCkGnfY.jpg',
  //   released: '2024-06-18',
  //   trailer: 'Y_qYJ6To93k?si=n5yPR0nBtNd9wBsm',
  //   type: 'Hoạt Hình',
  //   updatedAt: '2024-06-29T22:18:27.758Z',
  //   year: 2024,
  // };

  return (
    <>
      <div className="w-full mx-auto max-w-screen-lg mt-5 mb-10">
        <div className=" grid lg:grid-cols-custom lg:gap-x-8 grid-cols-1 md:py-10 py-10">
          <div className=" flex justify-center">
            <div className="relative">
              <img src={movie.imagePath} className="w-[200px] h-[281px]" alt=""></img>
              <div className="absolute opacity-0 hover:opacity-100 transition duration-500 ease-in-out top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden bg-fixed bg-black/60">
                <button
                  // onClick={() => handleOpen('xl', movie.trailer)}
                  className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-200
                          border text-[17px] border-white py-[13px] rounded-lg px-[35px] hover:bg-[#c40404] hover:border-none"
                >
                  <i className="fas fa-play"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="px-0 pt-3">
            <h1 className="text-[22px] truncate font-bold uppercase text-[#0E1D2F]">
              {movie.name}
            </h1>
            <div className="text-[15px] leading-7 pt-6">
              <p>
                <span className="w-[100px] inline-block font-bold text-[#0e1d2f]">
                  Đạo diễn :
                </span>
                <span>{movie.director}</span>
              </p>
              <p>
                <span className="w-[100px] inline-block font-bold text-[#0e1d2f]">
                  Diễn viên:
                </span>
                <span>{movie.actor}</span>
              </p>
              <p>
                <span className="w-[100px] inline-block font-bold text-[#0e1d2f]">
                  Thể loại:
                </span>
                <span>{movie.category.name}</span>
              </p>
              <p>
                <span className="w-[100px] inline-block font-bold text-[#0e1d2f]">
                  Khởi chiếu:
                </span>
                <span>{movie.releaseDate}</span> phút
              </p>
              <p>
                <span className="w-[100px] inline-block font-bold text-[#0e1d2f]">
                  Thời lượng:
                </span>
                <span>{movie.duration}</span>
              </p>
              <p>
                <span className="w-[100px] inline-block font-bold text-[#0e1d2f]">
                  Ngôn ngữ:
                </span>
                <span>Tiếng Anh - Phụ đề tiếng Việt</span>
              </p>
              <p>
                <span className="w-[100px] inline-block font-bold text-[#0e1d2f]">
                  Rated:
                </span>
                <span>C13 - PHIM CẤM PHỔ BIẾN ĐẾN KHÁN GIẢ DƯỚI 13 TUỔI</span>
              </p>
            </div>
          </div>
          <div className="mt-3">
            <Link href="/schedule">
              <button className="px-[23px] py-[10px] bg-[#0e1d2f] text-white rounded-3xl border-none uppercase font-bold text-[13px]">
                đặt vé
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-3 flex justify-center gap-6">
          <button
            className={`px-[25px] py-[10px] rounded-3xl font-semibold text-[18px] ${
              content
                ? 'bg-[#ff5400] text-white border-none'
                : 'bg-transparent text-[#0e1d2f] border-solid border border-[#0e1d2f]'
            }`}
            // style={{
            //   background: content ? '#ff5400' : 'transparent',
            //   color: content ? '#fff' : '#0e1d2f',
            // }}
            onClick={() => {
              setContent(true), setVlYoutube(false);
            }}
          >
            Chi tiết
          </button>
          <button
            className={`px-[25px] py-[10px] rounded-3xl font-semibold text-[18px] ${
              vlYoutube
                ? 'bg-[#ff5400] text-white border-none'
                : 'bg-transparent text-[#0e1d2f] border-solid border border-[#0e1d2f]'
            }`}
            onClick={() => {
              setContent(false), setVlYoutube(true);
            }}
          >
            Trailer
          </button>
          <button className="px-[25px] py-[10px] bg-transparent text-[#0e1d2f] border-solid border border-[#0e1d2f] rounded-3xl font-semibold text-[18px]">
            Đánh giá
          </button>
        </div>
        <p
          className=" mt-10 font-normal text-sm md:text-[15px] text-justify"
          style={{ display: content ? 'block' : 'none' }}
        >
          {movie.desc}
        </p>
        <div
          style={{
            display: vlYoutube ? 'flex' : 'none',
            justifyContent: 'center',
            marginTop: '40px',
          }}
        >
          <iframe
            title="youtube"
            width="55%"
            height="315px"
            // src={`https://www.youtube.com/embed/${movie.urlTrailer}`}
            src={movie.urlTrailer}
            // frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/schedule">
            <button className="px-[23px] py-[10px] bg-[#0e1d2f] text-white rounded-3xl border-none uppercase font-bold text-[13px]">
              đặt vé
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DetailMovie;
