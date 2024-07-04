export const cpfMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1")
};

export const formatBirthDate = (value: string) => {
  const cleanValue = value.replace(/\D/g, '');
  if (cleanValue.length <= 2) {
    return cleanValue.replace(/^(\d{2})/, '$1');
  } else if (cleanValue.length <= 4) {
    return cleanValue.replace(/^(\d{2})(\d{2})/, '$1/$2');
  } else {
    return cleanValue.replace(/^(\d{2})(\d{2})(\d{4}).*/, '$1/$2/$3');
  }
};
