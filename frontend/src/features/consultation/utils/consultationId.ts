let sequence = 1;

const pad = (value: number, length: number): string =>
  value.toString().padStart(length, "0");

export const generateConsultationId = (): string => {
  const now = new Date();

  const date =
    now.getFullYear().toString() +
    pad(now.getMonth() + 1, 2) +
    pad(now.getDate(), 2);

  const id = `CONS-${date}-${pad(sequence, 6)}`;

  sequence += 1;

  return id;
};