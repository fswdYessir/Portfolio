import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_ruuhgs8",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_wzwbury",
        { from_name: name, from_email: email, to_name: "Sol", message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "FWj8pDMCGGNjuGGu2",
      );
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center text-center py-15 px-20 min-h-[80vh]"
      data-aos="fade-up"
    >
      <h1 className="font-display text-3xl font-bold uppercase text-[var(--text)] transition-colors">
        {t("contact.title")}
      </h1>
      <p className="text-base font-normal text-[var(--text-muted)] transition-colors">
        {t("contact.subtitle")}
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-10 gap-6 w-full max-w-[250px] md:max-w-[500px] lg:max-w-[600px]"
      >
        <input
          id="name"
          type="text"
          value={name}
          placeholder={t("contact.name")}
          onChange={(e) => setName(e.target.value)}
          required
          aria-label={t("contact.name")}
          className="input-field h-10 px-4 w-full rounded-2xl"
        />
        <input
          id="email"
          type="email"
          value={email}
          placeholder={t("contact.email")}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label={t("contact.email")}
          className="input-field h-10 px-4 w-full rounded-2xl"
        />
        <textarea
          id="message"
          placeholder={t("contact.message")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          aria-label={t("contact.message")}
          className="input-field h-[250px] px-4 py-3 w-full rounded-2xl"
        />
        {status && (
          <p
            className={`text-base font-normal italic rounded transition-colors ${
              status === "success" ? "bg-green-500/30" : "bg-red-500/30"
            }`}
          >
            {t(`contact.${status}`)}
          </p>
        )}
        <div className="flex justify-center mt-4">
          <div className="gradient-btn-wrap">
            <div className="gradient-btn-glow" />
            <button type="submit" className="gradient-btn">
              {t("contact.submit")}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
