import { useState } from "react";

import Button from "../../../../components/ui/Button";
import Heading from "../../../../components/ui/Heading";
import Text from "../../../../components/ui/Text";

interface SuccessStepProps {
  consultationId: string;
  isEditing: boolean;
  onFinish: () => void;
}

const SuccessStep = ({
  consultationId,
  isEditing,
  onFinish,
}: SuccessStepProps) => {
  const [copied, setCopied] =
    useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        consultationId
      );

      setCopied(true);

      setTimeout(
        () => setCopied(false),
        2000
      );
    } catch {
      // Ignore clipboard errors
    }
  };

  return (
    <div className="py-12 text-center">
      <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500/10 text-5xl">
        ✅
      </div>

      <Heading level={2}>
        {isEditing
          ? "Consultation Updated Successfully"
          : "Consultation Submitted Successfully"}
      </Heading>

      <Text className="mt-4 text-slate-400">
        {isEditing
          ? "Your consultation has been updated successfully."
          : "Thank you for booking a consultation. Your request has been received and is now in our review queue."}
      </Text>

      <div className="mx-auto mt-8 max-w-md rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6">
        <Text className="text-sm uppercase tracking-wide text-slate-400">
          Consultation Reference
        </Text>

        <Text className="mt-2 break-all text-2xl font-bold text-cyan-400">
          {consultationId}
        </Text>

        <Button
          className="mt-5 w-full"
          variant="secondary"
          onClick={handleCopy}
        >
          {copied
            ? "✓ Copied"
            : "Copy Consultation ID"}
        </Button>
      </div>

      <div className="mx-auto mt-8 max-w-xl rounded-xl border border-slate-700 bg-slate-900 p-6 text-left">
        <Text className="mb-4 text-lg font-semibold">
          What happens next?
        </Text>

        <ul className="space-y-3 text-slate-300">
          <li>
            ✓ Your consultation request has been securely recorded.
          </li>

          <li>
            ✓ Our team will review your requirements.
          </li>

          <li>
            ✓ We'll contact you within{" "}
            <strong>24–48 hours</strong>.
          </li>

          <li>
            ✓ Please keep your Consultation ID for future communication.
          </li>
        </ul>
      </div>

      <div className="mt-10 flex justify-center">
        <Button onClick={onFinish}>
          {isEditing
            ? "Finish"
            : "Book Another Consultation"}
        </Button>
      </div>
    </div>
  );
};

export default SuccessStep;