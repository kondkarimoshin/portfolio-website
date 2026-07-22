import Button from "../../../../components/ui/Button";
import Text from "../../../../components/ui/Text";

import type { PersonalInformationErrors } from "../../types/consultation.types";

interface PersonalInformationStepProps {
  firstName: string;
  lastName: string;
  phone: string;

  errors: PersonalInformationErrors;

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
  errors,
  onChange,
  onPrevious,
  onContinue,
}: PersonalInformationStepProps) => {
  return (
    <div className="space-y-6">
      <div>
        <Text className="mb-2 font-medium">
          First Name{" "}
          <span className="text-red-500">*</span>
        </Text>

        <input
          className={`w-full rounded-lg bg-slate-900 px-4 py-3 outline-none transition-colors ${errors.firstName
            ? "border border-red-500"
            : "border border-slate-700"
            }`}
          value={firstName}
          onChange={(event) =>
            onChange({
              firstName: event.target.value,
            })
          }
        />

        {errors.firstName && (
          <Text className="mt-2 text-sm text-red-400">
            {errors.firstName}
          </Text>
        )}
      </div>

      <div>
        <Text className="mb-2 font-medium">
          Last Name{" "}
          <span className="text-xs font-normal text-slate-400">
            (Optional)
          </span>
        </Text>

        <input
          className={`w-full rounded-lg bg-slate-900 px-4 py-3 outline-none transition-colors ${errors.lastName
            ? "border border-red-500"
            : "border border-slate-700"
            }`}
          value={lastName}
          onChange={(event) =>
            onChange({
              lastName: event.target.value,
            })
          }
        />

        {errors.lastName && (
          <Text className="mt-2 text-sm text-red-400">
            {errors.lastName}
          </Text>
        )}
      </div>

      <div>
        <Text className="mb-2 font-medium">
          Phone Number{" "}
          <span className="text-xs font-normal text-slate-400">
            (Optional)
          </span>
        </Text>

        <input
          className={`w-full rounded-lg bg-slate-900 px-4 py-3 outline-none transition-colors ${errors.phone
            ? "border border-red-500"
            : "border border-slate-700"
            }`}
          value={phone}
          onChange={(event) =>
            onChange({
              phone: event.target.value,
            })
          }
        />

        {errors.phone && (
          <Text className="mt-2 text-sm text-red-400">
            {errors.phone}
          </Text>
        )}
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