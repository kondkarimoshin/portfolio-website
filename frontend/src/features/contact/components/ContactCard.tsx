import Text from "../../../components/ui/Text";
import Reveal from "../../../components/animations/Reveal";
import ContactItem from "./ContactItem";
import { contactData } from "../constants/contact.data";
import {
    availableRoles,
    workPreferences,
} from "../constants/availability.config";

const ContactCard = () => {
    return (
        <div className="mt-14 rounded-2xl border border-slate-800 bg-slate-900/40 p-8">

            {/* Availability */}

            {/* Availability */}

            <Reveal>
                <div className="mb-10 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">

                    <div className="flex flex-col items-center">

                        <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
                            <span className="mr-2 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                            Available for New Opportunities
                        </span>

                        <p className="mt-5 text-lg font-semibold text-white">
                            Currently Open For
                        </p>

                        <div className="mt-4 flex flex-wrap justify-center gap-3">

                            {availableRoles.map((role) => {

                                const Icon = role.icon;

                                return (

                                    <span
                                        key={role.title}
                                        className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300"
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

                        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-slate-300">

                            {workPreferences.map((item) => (

                                <span key={item}>
                                    {item}
                                </span>

                            ))}

                        </div>

                    </div>

                </div>
            </Reveal>

            {/* Contact Grid */}

            <Reveal delay={0.15}>
                <div className="grid gap-5 lg:grid-cols-3">

                    {contactData.map((item) => (

                        <ContactItem
                            key={item.title}
                            item={item}
                        />

                    ))}

                </div>
            </Reveal>

            {/* Closing Message */}

            <Reveal delay={0.30}>
                <Text className="mx-auto mt-12 max-w-3xl text-center text-lg leading-8 text-slate-300">
                    Looking for a <span className="font-semibold text-cyan-400">Senior Automation Engineer</span>,{" "}
                    <span className="font-semibold text-cyan-400">Automation Architect</span>, or{" "}
                    <span className="font-semibold text-cyan-400">Engineering Leader</span> to drive enterprise quality and automation?

                    <br />
                    <br />

                    I'd welcome the opportunity to discuss how my experience in enterprise automation,
                    capital markets, and engineering leadership can help your team deliver reliable,
                    scalable software solutions.
                </Text>
            </Reveal>

        </div>
    );
};

export default ContactCard;