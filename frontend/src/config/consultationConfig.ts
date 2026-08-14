export const consultationConfig = {
  emailEnabled:
    import.meta.env.VITE_CONSULTATION_EMAIL_ENABLED === "true",

  persistenceEnabled:
    import.meta.env.VITE_CONSULTATION_PERSISTENCE_ENABLED === "true",
};