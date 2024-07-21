export {};

declare global {
  interface ISchedule {
    id: number;
    date: string;
    timeStart: string;
    timeEnd: string;
    roomId: number;
  }

  interface IListMovie {
    id: number;
    name: string;
    duration: number;
    releaseDate: string;
    desc: string;
    director: string;
    actor: string;
    language: string;
    urlTrailer: string;
    imagePath: string;
    category: {
      id: number;
      name: string;
      desc: string;
    };
    schedule: ISchedule[];
  }

  interface IRequest {
    url: string;
    method: string;
    body?: { [key: string]: any };
    queryParams?: any;
    useCredentials?: boolean;
    headers?: any;
    nextOption?: any;
  }

  interface IBackendRes<T> {
    error?: string | string[];
    message: string;
    statusCode: number | string;
    data?: T;
  }
}
