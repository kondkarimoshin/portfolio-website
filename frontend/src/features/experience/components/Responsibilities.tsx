import { FaCheckCircle } from "react-icons/fa";

interface ResponsibilitiesProps {
    responsibilities: string[];
}

const Responsibilities = ({
    responsibilities,
}: ResponsibilitiesProps) => {
    return (
        <ul className="mt-5 space-y-4">

            {responsibilities.map((responsibility, index) => (

                <li
                    key={index}
                    className="flex items-start gap-3"
                >

                    <FaCheckCircle
                        className="mt-1 h-4 w-4 shrink-0 text-cyan-400"
                    />

                    <span className="leading-7 text-slate-300">
                        {responsibility}
                    </span>

                </li>

            ))}

        </ul>
    );
};

export default Responsibilities;