import Button from "../../../../components/ui/Button";
import Text from "../../../../components/ui/Text";

interface EmailStepProps {
  email: string;
  error?: string;

  onEmailChange: (email: string) => void;
  onContinue: () => void;
}

const EmailStep = ({
  email,
  error,
  onEmailChange,
  onContinue,
}: EmailStepProps) => {
  return (
    <div className="mt-10">

      <Text className="mb-2 font-medium">
        Email Address
      </Text>

      <input
        type="email"
        value={email}
        placeholder="Enter your email address"
        onChange={(event) => onEmailChange(event.target.value)}
        className={`w-full rounded-lg border bg-slate-900 px-4 py-3 text-white outline-none transition ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-slate-700 focus:border-cyan-500"
        }`}
      />

      {error && (
        <Text className="mt-2 text-sm text-red-400">
          {error}
        </Text>
      )}

      <div className="mt-6 flex justify-end">

        <Button onClick={onContinue}>
          Next
        </Button>

      </div>

    </div>
  );
};

export default EmailStep;