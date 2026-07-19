import Button from "../../../components/ui/Button";
import BenefitChip from "./BenefitChip";
import { consultationBenefits } from "../constants/consultationBenefits";


const ConsultationCTA = () => {
  return (
    <section className="mt-10 mb-8">
      <div className="
mx-auto
max-w-6xl
rounded-3xl
border
border-cyan-500/20
bg-gradient-to-r
from-slate-900
to-slate-800
px-8
pt-12
pb-6
text-center
">

        <h2 className="text-4xl font-bold text-white">
          Ready to
          <span className="text-cyan-400"> Accelerate </span>
          Your Career?
        </h2>

        <p className="mx-auto mt-6 max-w-7xl text-lg leading-8 text-slate-300">
          Whether you're preparing for technical interviews, mastering enterprise automation, or planning your next career move, you'll receive personalized guidance tailored to your goals.
        </p>

        <p className="mx-auto mt-5 max-w-7xl text-lg leading-8 text-slate-300">
          Learn from real enterprise projects, industry best practices, and practical strategies designed to build confidence, strengthen your technical skills, and accelerate your career.
        </p>

        <div className="mt-5">
          <Button size="lg" className="min-w-[180px]">
            Book a Free Consultation
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {consultationBenefits.map((benefit) => (
            <BenefitChip key={benefit}>
              {benefit}
            </BenefitChip>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ConsultationCTA;