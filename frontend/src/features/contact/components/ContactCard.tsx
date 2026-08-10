import ContactItem from "./ContactItem";
import { contactData } from "../constants/contact.data";
import {
    availableRoles,
    workPreferences,
} from "../constants/availability.config";

const ContactCard = () => {
    return (
        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">

            {/* Availability */}

            <div className="mb-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">

                <div className="flex flex-col items-center">

                    <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
                        <span className="mr-2 h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        Available for New Opportunities
                    </span>

                    <p className="mt-4 text-lg font-semibold text-white">
                        Currently Open For
                    </p>

                    <div className="mt-4 flex flex-wrap justify-center gap-2">

                        {availableRoles.map((role) => {

                            const Icon = role.icon;

                            return (
                                <span
                                    key={role.title}
                                    className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400"
                                >
                                    <Icon
                                        aria-hidden="true"
                                        className="h-4 w-4"
                                    />

                                    {role.title}
                                </span>
                            );

                        })}

                    </div>

                    <div className="mt-5 flex flex-wrap justify-center gap-5 text-sm text-slate-300">

                        {workPreferences.map((item) => (

                            <span key={item}>
                                {item}
                            </span>

                        ))}

                    </div>

                </div>

            </div>

            {/* Contact Grid */}

            <div className="grid gap-5 lg:grid-cols-3">

                {contactData.map((item) => (

                    <ContactItem
                        key={item.title}
                        item={item}
                    />

                ))}

            </div>

        </div>
    );
};

export default ContactCard;