import ProfileLight from "../assets/hero/1.png";
import ProfileDark from "../assets/hero/2.png";
import resume from "../assets/resume.pdf";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-[82vh] sm:gap-15 gap-5 text-center p-10 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-50">
        <div className="w-1 h-12 sm:h-18 lamp-stem" />
        <div className="sm:w-36 sm:h-20 w-24 h-12 lamp-shade rounded-t-full" />
      </div>

      <div
        className={`absolute sm:top-20 top-15 left-1/2 -translate-x-1/2 w-150 h-[350px] pointer-events-none z-30 transition-opacity duration-700 ${
          theme === "dark" ? "opacity-80 animate-pulse" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,223,0,0.9), rgba(255,223,0,0.2), rgba(255,223,0,0))",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          filter: "blur(30px)",
        }}
      />

      <div
        className="relative flex flex-col items-center md:items-start pt-30 z-10"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className={`absolute top-30 right-0 flex items-center w-8 h-4 sm:w-10 sm:h-5 rounded-full transition-colors hover:cursor-pointer ${
            theme === "light" ? "bg-yellow-500" : "bg-gray-500"
          }`}
        >
          <div
            className={`sm:w-4 sm:h-4 w-3 h-3 rounded-full bg-white shadow-md transition-transform ${
              theme === "light"
                ? "sm:translate-x-5 translate-x-4"
                : "translate-x-1"
            }`}
          />
        </button>
        <img
          className="rounded-t-full w-60 md:w-72 lg:w-86"
          src={theme === "light" ? ProfileLight : ProfileDark}
          alt="Profile picture"
        />
      </div>

      <div
        className="flex flex-col gap-3 lg:gap-5 items-center md:items-start text-center md:text-left z-10 pt-5 md:pt-30 lg:pt-35 md:ml-3"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <h1 className="font-display text-[32px] font-bold uppercase text-[var(--text)] transition-colors">
          Sol Kim
        </h1>
        <h2 className="font-display text-xl uppercase text-[var(--text)] transition-colors">
          {t("hero.role")}
        </h2>

        <span className="flex gap-6">
          <a
            href="https://github.com/fswdYessir"
            className="hover:scale-110 transition-transform"
          >
            <GrGithub size={24} className="gitIcon" />
          </a>
          <a
            href="https://www.linkedin.com/in/yeseol/"
            className="hover:scale-110 transition-transform"
          >
            <GrLinkedin size={24} className="linkedinIcon" />
          </a>
        </span>

        <p className="text-base font-normal text-[var(--text)] max-w-[30ch] transition-colors">
          {t("hero.tagline")}
        </p>
        <div className="gradient-btn-wrap">
          <div className="gradient-btn-glow" />
          <button
            type="button"
            onClick={() => window.open(resume, "_blank")}
            className="gradient-btn"
          >
            {t("hero.resume")}
          </button>
        </div>
      </div>
    </section>
  );
}
