let sequence = 1;

const pad = (
  value: number,
  length: number
): string =>
  value.toString().padStart(length, "0");

const getCurrentDate = (): string => {
  const now = new Date();

  return (
    now.getFullYear().toString() +
    pad(now.getMonth() + 1, 2) +
    pad(now.getDate(), 2)
  );
};

export const generateConsultationId =
  (): string => {
    const id = `CONS-${getCurrentDate()}-${pad(
      sequence,
      6
    )}`;

    sequence += 1;

    return id;
  };