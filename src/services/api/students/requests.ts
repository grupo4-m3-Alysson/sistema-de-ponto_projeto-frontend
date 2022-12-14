import api from "../api";
import {
  ICheckInStudentProps,
  ICheckInStudentResponse,
  IEditStudentInfoProps,
  IGetStudentInfoResponse,
} from "./interfaces";

export const getStudentInfo = async (userId: number) => {
  const { data } = await api.get<IGetStudentInfoResponse[]>(
    `users?id=${userId}`
  );
  return data;
};

export const getCheckInStudent = async (
  userId: number
): Promise<ICheckInStudentResponse[]> => {
  const { data } = await api.get<ICheckInStudentResponse[]>(
    `checkin?userId=${userId}`
  );
  return data;
};

export const checkInStudent = async (
  dataInput: ICheckInStudentProps,
  userId: number
): Promise<ICheckInStudentResponse> => {
  const { data } = await api.post<ICheckInStudentResponse>("checkin", {
    ...dataInput,
    userId: userId,
  });
  return data;
};

export const editStudentInfo = async (
  id: number,
  dataInput: IEditStudentInfoProps
) => {
  const { data } = await api.patch(`users/${id}`, dataInput);
  console.log(data);
  return data;
};
