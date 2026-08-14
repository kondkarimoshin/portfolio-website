import emailjs from "@emailjs/browser";

type ConsultationEmailData = {
  consultationId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consultationAreas: string;
  additionalDetails: string;
};

const SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID;

const TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendConsultationEmail = async (
  data: ConsultationEmailData
): Promise<void> => {
  if (
    !SERVICE_ID ||
    !TEMPLATE_ID ||
    !PUBLIC_KEY
  ) {
    throw new Error(
      "Email service configuration is missing."
    );
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      consultation_id: data.consultationId,
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phone,
      consultation_areas:
        data.consultationAreas,
      additional_details:
        data.additionalDetails,
    },
    {
      publicKey: PUBLIC_KEY,
    }
  );
};