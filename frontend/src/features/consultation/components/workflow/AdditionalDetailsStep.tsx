import Button from "../../../../components/ui/Button";
import Text from "../../../../components/ui/Text";

interface AdditionalDetailsStepProps {
  additionalDetails: string;

  onChange: (value: string) => void;

  onPrevious: () => void;
  onContinue: () => void;
}

const MAX_CHARACTERS = 1000;

const AdditionalDetailsStep = ({
  additionalDetails,
  onChange,
  onPrevious,
  onContinue,
}: AdditionalDetailsStepProps) => {
  return (
    <div className="space-y-6">

      <div>

        <Text className="mb-2 font-medium">
          Additional Details (Optional)
        </Text>

        <textarea
          rows={6}
          maxLength={MAX_CHARACTERS}
          value={additionalDetails}
          onChange={(event) =>
            onChange(event.target.value)
          }
          placeholder="Share any additional information that will help prepare for your consultation."
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 resize-none"
        />

        <Text className="mt-2 text-right text-sm text-slate-400">
          {additionalDetails.length} / {MAX_CHARACTERS}
        </Text>

      </div>

      <div className="flex justify-between">

        <Button
          variant="secondary"
          onClick={onPrevious}
        >
          Previous
        </Button>

        <Button onClick={onContinue}>
          Next
        </Button>

      </div>

    </div>
  );
};

export default AdditionalDetailsStep;