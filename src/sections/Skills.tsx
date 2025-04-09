import SkillList from '../components/SkillList'
import ScrollAnimation from '../components/ScrollAnimation'

function Skills() {
  return (
    <ScrollAnimation offset={100}>
      <section
        id="skills"
        className="flex flex-col items-center justify-center text-center min-h-[30vh]"
      >
        <div>
          <h1 className="text-3xl font-bold uppercase">Skills</h1>

          <div className="grid m-5 md:grid-cols-7 gap-5">
            <SkillList skill="JavaScript" />
            <SkillList skill="TypeScript" />
            <SkillList skill="C#" />
            <SkillList skill="PHP" />
            <SkillList skill="ASP.NET" />
            <SkillList skill="Bootstrap" />
            <SkillList skill="HTML" />
            <SkillList skill="CSS" />
            <SkillList skill="React" />
            <SkillList skill="React Native" />
            <SkillList skill="Next.js" />
            <SkillList skill="Tailwind CSS" />
            <SkillList skill="Vite" />
            <SkillList skill="WordPress" />
            <SkillList skill="Express" />
            <SkillList skill="EJS" />
            <SkillList skill="Strapi" />
            <SkillList skill="Firebase" />
            <SkillList skill="MySQL" />
            <SkillList skill="PostgreSQL" />
            <SkillList skill="Azure" />
          </div>
        </div>
      </section>
    </ScrollAnimation>
  )
}

export default Skills
