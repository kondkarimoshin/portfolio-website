import PageLayout from "../../layouts/PageLayout";

import ServicesHero from "./components/ServicesHero";
import ProgramsGrid from "./components/ProgramsGrid";
import ConsultationCTA from "./components/ConsultationCTA";

const Services = () => {
    return (
        <PageLayout contentClassName="py-0">
            <ServicesHero />
            <ProgramsGrid />
            <ConsultationCTA />
        </PageLayout>
    );
};

export default Services;