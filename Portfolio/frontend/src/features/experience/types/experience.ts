export interface BusinessImpact {
    title: string;
    description: string;
}

export interface Project {
    name: string;
    category: string;
    overview: string;
    keyContributions: string[];
}

export interface Experience {
    company: string;
    role: string;
    duration: string;
    location: string;
    domain: string[];
    summary: string;
    responsibilities: string[];
    businessImpacts: BusinessImpact[];
    projects: Project[];
    technologies: string[];
}