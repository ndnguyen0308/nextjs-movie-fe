'use client';
import { Button, Form, Input } from 'antd';
import { useCookies } from 'next-client-cookies';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { redirect } from 'next/navigation';
import { sendRequest } from '../../../utils/api';

type FieldType = {
  email?: string;
  password?: string;
};

interface IUser {
  accessToken?: string;
  refresh_token?: string;
  name: string;
}

interface IUserContext {
  currentUser: IUser;
  setCurrentUser: (v: IUser) => void;
}

const Login = () => {
  const [showOrHide, setShowOrHide] = useState(false);
  const router = useRouter();
  const cookies = useCookies();

  const onFinish = async (values: FieldType) => {
    console.log('Success:', values);
    // let res = await fetch(`${process.env.customURL}/auth/login`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email: values.email,
    //     password: values.password,
    //   }),
    // });
    // res = await res.json();
    // console.log('🚀 ~ onFinish ~ res:', res);

    const res = await sendRequest<IBackendRes<IUser>>({
      url: `${process.env.customURL}/auth/login`,
      method: 'POST',
      body: { email: values.email, password: values.password },
    });

    if (res?.data?.accessToken) {
      await fetch('/api/auth', {
        method: 'POST',
        body: JSON.stringify({
          accessToken: res?.data?.accessToken,
        }),
      });
      router.push('/');
      setTimeout(() => {
        window.location.reload();
      }, 200);
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

        {/* LoginForm */}
        <div
          className="relative mt-10 lg:mt-20 flex flex-col justify-center min-h-screen overflow-hidden"
          id="login"
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
            <h1 className="text-3xl font-semibold text-center text-[#e01414]">
              Đăng Nhập
            </h1>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              style={{ width: '100%' }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                name="email"
                rules={[
                  { required: true, message: 'Vui lòng nhập email!', type: 'email' },
                ]}
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
                  Đăng nhập <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </Form>

            <p className="mt-8 text-[15px] font-light text-center text-primary">
              {' '}
              Bạn chưa có tài khoản?{' '}
              <Link
                href="/auth/register"
                className="font-medium text-purple-600 hover:underline"
              >
                Đăng ký
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
