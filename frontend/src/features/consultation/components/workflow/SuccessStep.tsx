import Button from "../../../../components/ui/Button";
import Heading from "../../../../components/ui/Heading";
import Text from "../../../../components/ui/Text";

interface SuccessStepProps {
  consultationId: string;
  onFinish: () => void;
}

const SuccessStep = ({
  consultationId,
  onFinish,
}: SuccessStepProps) => {
  return (
    <div className="py-12 text-center">

      <div className="mb-6 text-6xl">
        ✅
      </div>

      <Heading level={2}>
        Consultation Submitted Successfully
      </Heading>

      <Text className="mt-4 text-slate-400">
        Thank you for booking a consultation.
      </Text>

      <Text className="mt-2">
        Consultation ID
      </Text>

      <Text className="mt-1 text-xl font-semibold text-cyan-400">
        {consultationId}
      </Text>

      <Text className="mt-6 text-slate-400">
        We'll review your request and contact you
        within <strong>24–48 hours</strong>.
      </Text>

      <div className="mt-10">
        <Button onClick={onFinish}>
          Book Another Consultation
        </Button>
      </div>

    </div>
  );
};

export default SuccessStep;