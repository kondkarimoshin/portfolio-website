import Button from "../../../../components/ui/Button";
import Text from "../../../../components/ui/Text";

interface PersonalInformationStepProps {
  firstName: string;
  lastName: string;
  phone: string;

  onChange: (
    values: {
      firstName?: string;
      lastName?: string;
      phone?: string;
    }
  ) => void;

  onPrevious: () => void;
  onContinue: () => void;
}

const PersonalInformationStep = ({
  firstName,
  lastName,
  phone,
  onChange,
  onPrevious,
  onContinue,
}: PersonalInformationStepProps) => {
  return (
    <div className="space-y-6">

      <div>

        <Text className="mb-2 font-medium">
          First Name
        </Text>

        <input
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3"
          value={firstName}
          onChange={(event) =>
            onChange({
              firstName: event.target.value,
            })
          }
        />

      </div>

      <div>

        <Text className="mb-2 font-medium">
          Last Name
        </Text>

        <input
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3"
          value={lastName}
          onChange={(event) =>
            onChange({
              lastName: event.target.value,
            })
          }
        />

      </div>

      <div>

        <Text className="mb-2 font-medium">
          Phone Number
        </Text>

        <input
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3"
          value={phone}
          onChange={(event) =>
            onChange({
              phone: event.target.value,
            })
          }
        />

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

export default PersonalInformationStep;