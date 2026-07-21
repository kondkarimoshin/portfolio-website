import Container from "../../components/ui/Container";
import Heading from "../../components/ui/Heading";
import Text from "../../components/ui/Text";

import ConsultationForm from "./components/ConsultationForm";

const ConsultationPage = () => {
  return (
    <main className="flex flex-1 items-start bg-slate-950 pt-24">

      <Container className="max-w-5xl py-8">

        <div className="mb-6">

          <Heading level={1}>
            Book a Consultation
          </Heading>

          <Text className="mt-3 max-w-4xl text-lg leading-8">
            Schedule a one-on-one consultation for career mentorship,
            automation guidance, interview preparation,
            or enterprise automation coaching.
          </Text>

        </div>

        <ConsultationForm />

      </Container>

    </main>
  );
};

export default ConsultationPage;