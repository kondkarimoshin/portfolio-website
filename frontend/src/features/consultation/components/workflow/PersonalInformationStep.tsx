import Button from "../../../../components/ui/Button";
import Text from "../../../../components/ui/Text";

import type { PersonalInformationErrors } from "../../types/consultation.types";

interface PersonalInformationStepProps {
  firstName: string;
  lastName: string;
  phone: string;

  errors: PersonalInformationErrors;

  onChange: (values: {
    firstName?: string;
    lastName?: string;
    phone?: string;
  }) => void;

  onPrevious: () => void;
  onContinue: () => void;
}

const inputClass = (hasError: boolean): string =>
  `w-full rounded-lg border bg-slate-900 px-4 py-3 outline-none transition-colors ${
    hasError
      ? "border-red-500 focus:border-red-500"
      : "border-slate-700 focus:border-cyan-500"
  }`;

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
          type="text"
          autoComplete="given-name"
          placeholder="Enter your first name"
          className={inputClass(!!errors.firstName)}
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
          type="text"
          autoComplete="family-name"
          placeholder="Enter your last name"
          className={inputClass(!!errors.lastName)}
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
          type="tel"
          autoComplete="tel"
          placeholder="Enter your phone number"
          className={inputClass(!!errors.phone)}
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