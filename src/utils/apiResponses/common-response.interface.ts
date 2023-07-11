export interface CommonResponse<T> {
  statusCode: number;
  data?: T;
  message: string;
}
