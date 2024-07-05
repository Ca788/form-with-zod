import { cpfMask, formatBirthDate } from "../utils/masks";
import { ChangeEvent } from "react";


export const formatCpf = (setCpf: (cpf: string) => void) => (e: ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  setCpf(cpfMask(value));
};

export const formatBirthDateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.target.value = formatBirthDate(e.target.value);
};