import SkillList from '../components/SkillList'

function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center text-center  min-h-[45vh]"
    >
      <div>
        <div className="mb-10">
          <h1 className="text-3xl font-bold uppercase">Skills</h1>
        </div>

        <div className="grid m-10 md:grid-cols-7 gap-5">
          <SkillList skill="JavaScript" />
          <SkillList skill="TypeScript" />
          <SkillList skill="C#" />
          <SkillList skill="ASP.NET" />
          <SkillList skill="Bootstrap" />
          <SkillList skill="HTML" />
          <SkillList skill="CSS" />
          <SkillList skill="React" />
          <SkillList skill="React Native" />
          <SkillList skill="Next.js" />
          <SkillList skill="Expo" />
          <SkillList skill="Tailwind CSS" />
          <SkillList skill="Figma" />
          <SkillList skill="Vite" />
          <SkillList skill="WordPress" />
          <SkillList skill="Node.js" />
          <SkillList skill="Express" />
          <SkillList skill="EJS" />
          <SkillList skill="Strapi" />
          <SkillList skill="Firebase" />
          <SkillList skill="MySQL" />
          <SkillList skill="SQLite" />
          <SkillList skill="PostgreSQL" />
          <SkillList skill="Neon" />
          <SkillList skill="Vercel" />
          <SkillList skill="Render" />
          <SkillList skill="Atom" />
        </div>
      </div>
    </section>
  )
}

export default Skills
