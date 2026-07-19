import Badge from "../../../components/ui/Badge";
import Heading from "../../../components/ui/Heading";
import Text from "../../../components/ui/Text";

const highlights = [
  "16+ Years Enterprise Experience",
  "1:1 Career Mentorship",
  "US Patent Contributor",
  "Fortune 500 Banking Domain",
  "Enterprise Framework Architect",  
  "Practical Industry Learning",
];

const ServicesHero = () => {
  return (
    <section className="grid gap-12 pt-8 pb-6 lg:grid-cols-[1.2fr_0.8fr]">

      {/* Left */}

      <div>

        <Badge className="border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
          Professional Training & Career Development
        </Badge>

        <Heading className="mt-6 max-w-3xl">
          Accelerate Your Career with
          <span className="block text-cyan-400">
            Industry-Focused Programs
          </span>
        </Heading>

        <Text className="mt-6 max-w-2xl text-lg leading-8">
          Practical training, interview preparation, enterprise
          automation and career mentoring designed to help
          students and professionals build real-world skills
          employers value.
        </Text>
      </div>

      {/* Right */}

      <div
  className="
    group
    rounded-3xl
    border
    border-slate-800
    bg-slate-900/50
    p-8
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-cyan-400
    hover:bg-slate-900/70
  "
>

        <h3 className="text-2xl font-semibold text-white">
          Why Choose Me
        </h3>

        <p className="mt-3 text-slate-400">
          Learn directly from real enterprise experience.
        </p>

        <div className="mt-8 space-y-5">

          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3"
            >
              <span className="mt-1 text-cyan-400">
                ✓
              </span>

              <span className="text-slate-300">
                {item}
              </span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ServicesHero;