import type { IconType } from "react-icons";

export interface ContactItem {
    title: string;
    value: string;
    subtitle?: string;

    href?: string;
    icon: IconType;

    download?: boolean;
    external?: boolean;
    
    copyable?: boolean;
    copyValue?: string;
}