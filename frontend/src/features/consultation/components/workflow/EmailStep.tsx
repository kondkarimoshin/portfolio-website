import { useState } from "react";

import Button from "../../../../components/ui/Button";
import Text from "../../../../components/ui/Text";

import type { ConsultationRequest } from "../../types/consultation.types";

interface EmailStepProps {
  email: string;
  error?: string;
  canContinue: boolean;

  existingConsultation?: ConsultationRequest | null;

  onEmailChange: (email: string) => void;
  onContinue: () => void;
}

const formatStatus = (status: string): string =>
  status
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");

const formatCategory = (
  category: string
): string =>
  category
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");

const EmailStep = ({
  email,
  error,
  canContinue,
  existingConsultation,
  onEmailChange,
  onContinue,
}: EmailStepProps) => {
  const [touched, setTouched] =
    useState(false);

  const showError =
    touched && !!error;

  return (
    <div className="mt-10">
      <Text className="mb-2 font-medium">
        Email Address{" "}
        <span className="text-red-500">*</span>
      </Text>

      <input
        type="email"
        value={email}
        placeholder="Enter your email address"
        onChange={(event) => {
          onEmailChange(
            event.target.value.trimStart()
          );
        }}
        onBlur={() => setTouched(true)}
        className={`w-full rounded-lg border bg-slate-900 px-4 py-3 text-white outline-none transition ${
          showError
            ? "border-red-500 focus:border-red-500"
            : "border-slate-700 focus:border-cyan-500"
        }`}
      />

      {showError && (
        <Text className="mt-2 text-sm text-red-400">
          {error}
        </Text>
      )}

      {existingConsultation && (
        <div className="mt-6 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-5">
          <Text className="font-semibold text-cyan-300">
            Welcome back! 👋
          </Text>

          <Text className="mt-2 text-slate-300">
            We found an existing consultation
            linked to this email. Your previous
            information has been loaded and you
            can continue updating your request.
          </Text>

          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between">
              <Text className="text-slate-400">
                Consultation ID
              </Text>

              <Text className="font-medium">
                {existingConsultation.id}
              </Text>
            </div>

            <div className="flex justify-between">
              <Text className="text-slate-400">
                Status
              </Text>

              <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-medium text-cyan-300">
                {formatStatus(
                  existingConsultation.status
                )}
              </span>
            </div>

            <div>
              <Text className="mb-2 text-slate-400">
                Consultation Services
              </Text>

              <div className="flex flex-wrap gap-2">
                {existingConsultation.consultationServices.map(
                  (service) => (
                    <span
                      key={service.category}
                      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                    >
                      {formatCategory(
                        service.category
                      )}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="flex justify-between pt-2">
              <Text className="text-slate-400">
                Submitted On
              </Text>

              <Text>
                {new Date(
                  existingConsultation.createdAt
                ).toLocaleDateString()}
              </Text>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 flex justify-end">
        <Button
          disabled={!canContinue}
          onClick={onContinue}
        >
          {existingConsultation
            ? "Continue Editing"
            : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default EmailStep;