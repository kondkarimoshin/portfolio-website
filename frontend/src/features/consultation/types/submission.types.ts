export type SubmissionState =
  | "editing"
  | "submitting"
  | "success"
  | "error";

export interface SubmissionResult {
  success: boolean;
  consultationId?: string;
  error?: string;
}