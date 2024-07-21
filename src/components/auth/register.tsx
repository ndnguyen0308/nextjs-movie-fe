'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Button, Form, Input, message, notification } from 'antd';
import { useRouter } from 'next/navigation';

type FieldType = {
  fullname?: string;
  email?: string;
  password?: string;
};

const Register = () => {
  const [showOrHide, setShowOrHide] = useState(false);

  const handleSubmit = () => {};

  const router = useRouter();

  const onFinish = async (values: FieldType) => {
    console.log('Success:', values);
    let res = await fetch(`${process.env.customURL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
        fullName: values.fullname?.toString(),
        role: 'ADMIN',
      }),
    });
    res = await res.json();
    //@ts-ignore
    if (res?.data?.id) {
      //@ts-ignore
      notification.success('Đăng ki thành công');
      router.push('/auth/login');
    }
  };

  return (
    <div className="max-w-screen-xl w-full mx-auto">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-4 p-4 text-black h-[70%]">
        <div className=" lg:block hidden lg:mt-20">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className=" translate-x-[-40%] top-[25%] left-[20%]"
          >
            <h1 className="text-[35px] font-medium">
              ƯU ĐÃI DÀNH CHO THÀNH VIÊN HỆ THỐNG
            </h1>
            <p className="text-[20px] my-4">
              Trở thành viên của hệ thống để nhận nhiều ưu đãi. Tích lũy R-start để có cơ
              hội nhận nhiều phần quà hấp dẫn.
            </p>
            <button className="py-1 text-[14px] px-2 text-white bg-[#ce0000]">
              xem thêm
            </button>
          </div>
        </div>

        {/* RegisterForm */}
        <div
          className="relative mt-10 lg:mt-20 flex flex-col justify-center min-h-screen overflow-hidden"
          id="register"
        >
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="text-center py-10 px-10 sm:block lg:hidden"
          >
            <h1 className="text-[25px] font-medium">
              ƯU ĐÃI DÀNH CHO THÀNH VIÊN HỆ THỐNG
            </h1>
            <p className="text-[15px] font-thin mt-5">
              Trở thành viên của hệ thống để nhận nhiều ưu đãi. Tích lũy R-start để có cơ
              hội nhận nhiều phần quà hấp dẫn.
            </p>
          </div>
          <div className="md:w-[60%] border lg:w-[70%] w-[90%] mt-5 p-4 m-auto bg-transparent rounded-md shadow-xl lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-[#e01414]">Đăng Ký</h1>
            {/* <form className="mt-6 " onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="Name"
                  name="name"
                  id="nameRegister"
                  placeholder="Họ và tên"
                  className="placeholder:text-gray-500 block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none "
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  id="emailRegister"
                  placeholder="Email"
                  className="placeholder:text-gray-500 block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none "
                />
              </div>
              <div className="mb-4">
                <input
                  type={showOrHide === true ? '' : 'password'}
                  name="password"
                  id="passwordRegister"
                  placeholder="Mật khẩu"
                  className="placeholder:text-gray-500 block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none"
                />
              </div>
              <div className="flex justify-between">
                <div>
                  <input
                    id="showPassword"
                    type="checkbox"
                    onClick={() => setShowOrHide(!showOrHide)}
                    className="w-[12px] cursor-pointer h-[12px] accent-transparent mr-3"
                  />
                  <label
                    className="text-gray-400 cursor-pointer text-[13px]"
                    htmlFor="showPassword"
                  >
                    Hiển thị mật khẩu
                  </label>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200
                      transform bg-[#e01414] rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                >
                  <svg
                    className="animate-spin h-0 w-5 mr-3 text-white"
                    viewBox="0 0 24 24"
                  ></svg>
                  Đăng ký <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </form> */}
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              style={{ width: '100%' }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                name="fullname"
                rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
                className="!mt-6 !pb-1"
              >
                <Input placeholder="Email" className="!p-2" />
                {/* <input
                  type="email"
                  name="email"
                  id="emailLogin"
                  placeholder="Email"
                  className="placeholder:text-gray-500 block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none "
                /> */}
              </Form.Item>

              <Form.Item<FieldType>
                name="email"
                rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
                // style={{ marginTop: '20px' }}
                className="!mt-6 !pb-1"
              >
                <Input placeholder="Email" className="!p-2" />
              </Form.Item>

              <Form.Item<FieldType>
                name="password"
                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                className="!pb-1"
              >
                <Input.Password placeholder="Mật khẩu" className="!p-2" />
              </Form.Item>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200
                      transform bg-[#e01414] rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                >
                  <svg
                    className="animate-spin h-0 w-5 mr-3 text-white"
                    viewBox="0 0 24 24"
                  ></svg>
                  Đăng ký <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </Form>

            <p className="mt-8 text-[15px] font-light text-center text-primary">
              {' '}
              Bạn đã có tài khoản?{' '}
              <Link
                href="/auth/login"
                className="font-medium text-purple-600 hover:underline"
              >
                Đăng nhập
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
