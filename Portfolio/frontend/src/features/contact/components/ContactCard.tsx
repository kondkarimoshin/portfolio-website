import Text from "../../../components/ui/Text";
import ContactItem from "./ContactItem";
import { contactData } from "../constants/contactData";

const ContactCard = () => {
    return (
        <div className="mt-14 rounded-2xl border border-slate-800 bg-slate-900/40 p-8">

            {/* Availability */}

            <div className="mb-8 flex justify-center">

                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-400">
                    🟢 Available for New Opportunities
                </span>

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

            {/* Closing Message */}

            <Text className="mx-auto mt-12 max-w-3xl text-center text-lg leading-8 text-slate-300">

                Thank you for taking the time to explore my portfolio.
                I'm always open to meaningful conversations about automation,
                engineering leadership, capital markets, and opportunities
                to build innovative software solutions.

            </Text>

        </div>
    );
};

export default ContactCard;