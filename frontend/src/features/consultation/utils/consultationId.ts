const pad = (
  value: number,
  length: number
): string =>
  value.toString().padStart(length, "0");

const getCurrentDate = (
  timestamp: number
): string => {
  const date = new Date(timestamp);

  return (
    date.getFullYear().toString() +
    pad(date.getMonth() + 1, 2) +
    pad(date.getDate(), 2)
  );
};

export const generateConsultationId =
  (): string => {
    const timestamp = Date.now();

    return `CONS-${getCurrentDate(
      timestamp
    )}-${timestamp}`;
  };