import ProgramCard from "./ProgramCard";
import { programs } from "../constants/programs";

const ProgramsGrid = () => {
    return (
        <section className="mt-8">

            <div className="mb-10 text-center">

                <h2 className="text-4xl font-bold text-white">
                    Featured Programs
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-400">
                    Choose the learning path that best matches your career goals.
                    Every program is designed around practical enterprise experience
                    and real-world problem solving.
                </p>

            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                {programs.map((program) => (
                    <ProgramCard
                        key={program.id}
                        program={program}
                    />
                ))}
            </div>

        </section>
    );
};

export default ProgramsGrid;