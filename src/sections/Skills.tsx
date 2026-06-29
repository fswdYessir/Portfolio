import { SKILLS } from "../data/skills";
import { useTranslation } from "react-i18next";

type Props = { hoveredSkills: string[] };

export default function Skills({ hoveredSkills }: Props) {
  const { t } = useTranslation();
  const hasHover = hoveredSkills.length > 0;

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center text-center min-h-[30vh]"
      data-aos="fade-up"
      data-aos-offset="100"
    >
      <h1 className="font-display text-3xl font-bold uppercase text-[var(--text)] transition-colors">
        {t("skills.title")}
      </h1>
      <div className="grid m-5 md:grid-cols-7 gap-x-1 gap-y-2 justify-items-center auto-rows-[2.5rem]">
        {SKILLS.map((skill) => {
          const isHighlighted = hoveredSkills.includes(skill);
          const stateClass = isHighlighted
            ? "skill-highlight"
            : hasHover
              ? "skill-dimmed"
              : "";

          return (
            <span
              key={skill}
              className="inline-flex w-[7.25rem] h-10 items-center justify-center shrink-0 [contain:layout]"
            >
              <p
                className={`text-sm font-normal text-[var(--text)] leading-tight text-center w-full px-0.5 transition-[opacity,color] duration-200 ${stateClass}`}
              >
                {skill}
              </p>
            </span>
          );
        })}
      </div>
    </section>
  );
}
