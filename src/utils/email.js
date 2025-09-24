import emailjs from "emailjs-com";

const sendForm = async (serviceId, templateId, form, userId) => {
  try {
    await emailjs.sendForm(serviceId, templateId, form, userId);
  } catch (err) {
    console.error("Email send failed:", err);
  }
};

export default { sendForm };
