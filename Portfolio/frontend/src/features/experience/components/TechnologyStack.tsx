import Badge from "../../../components/ui/Badge";

import {
    SiApachemaven,
    SiBitbucket,
    SiDocker,
    SiGit,
    SiJenkins,
    SiJira,
    SiLinux,
    SiRedhatopenshift,
    SiSelenium,
    SiCucumber,
    SiConfluence,
    SiTeamcity,

} from "react-icons/si";

import {
    FaJava, 
    FaBolt,
    FaCubes,
    FaDatabase,
    FaGlobe,
    FaServer,
    FaTerminal,
    FaCodeBranch,
} from "react-icons/fa6";

interface TechnologyStackProps {
    technologies: string[];
}

const technologyIcons = {
    Java: FaJava,
    Selenium: SiSelenium,
    Docker: SiDocker,
    OpenShift: SiRedhatopenshift,
    Jenkins: SiJenkins,
    Git: SiGit,
    Bitbucket: SiBitbucket,
    JIRA: SiJira,
    Linux: SiLinux,
    Maven: SiApachemaven,
    Cucumber: SiCucumber,
    Confluence: SiConfluence,
    TeamCity: SiTeamcity,
    "REST Assured": FaGlobe,
    "QuickFIX/J": FaBolt,
    SQL: FaDatabase,
    Oracle: FaServer,
    Microservices: FaCubes,
    "Shell Scripting": FaTerminal,
    "FIX Protocol": FaCodeBranch,
} as const;

const TechnologyStack = ({
    technologies,
}: TechnologyStackProps) => {
    return (
        <div className="mt-4 flex flex-wrap gap-3">

            {technologies.map((technology) => {

                const Icon =
                    technologyIcons[
                    technology as keyof typeof technologyIcons
                    ];

                return (
                    <Badge key={technology}>

                        <div className="flex items-center gap-2">

                            {Icon && (
                                <Icon className="h-4 w-4 shrink-0" />
                            )}

                            <span>{technology}</span>

                        </div>

                    </Badge>
                );

            })}

        </div>
    );
};

export default TechnologyStack;