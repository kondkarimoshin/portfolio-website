interface ResponsibilitiesProps {
    responsibilities: string[];
}

const Responsibilities = ({
    responsibilities,
}: ResponsibilitiesProps) => {
    return (
        <ul className="mt-5 space-y-4 text-slate-300">

            {responsibilities.map((responsibility, index) => (

                <li key={index}>
                    ✔ {responsibility}
                </li>

            ))}

        </ul>
    );
};

export default Responsibilities;