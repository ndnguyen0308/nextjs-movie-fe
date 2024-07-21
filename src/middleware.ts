import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// const isPaymentRoute = (pathname: string) => {
//   return pathname.startsWith('/payment');
// };

const isTicketRoute = (pathname: string) => {
  return pathname.startsWith('/ticket');
};

export async function middleware(req: NextRequest) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');
  const { pathname } = req.nextUrl;

  // if (isPaymentRoute(pathname) && !accessToken) {
  //   return NextResponse.redirect(new URL('/auth/login', req.url));
  // }

  if (isTicketRoute(pathname) && !accessToken) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/payment', '/ticket'],
};
