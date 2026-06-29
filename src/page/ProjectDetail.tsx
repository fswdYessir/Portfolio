import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaAws, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa'
import { VscAzure } from 'react-icons/vsc'
import { TbBrandCSharp } from 'react-icons/tb'
import {
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiExpress,
  SiEjs,
  SiExpo,
  SiReact,
  SiFirebase,
  SiSupabase,
  SiNextdotjs,
  SiStrapi,
  SiTailwindcss,
  SiVite,
  SiDotnet,
  SiWordpress,
  SiMysql,
  SiPhp,
} from 'react-icons/si'
import { useProject } from '../data/projects-data'
import type { LabelKey } from '../data/projects-data'

const labelColor: Record<LabelKey, string> = {
  personal: 'bg-indigo-500',
  group: 'bg-rose-500',
  client: 'bg-lime-600',
  company: 'bg-sky-600',
  professional: 'bg-amber-500',
}

const techIcons: Record<string, React.ReactNode> = {
  EJS: <SiEjs size={26} />,
  Express: <SiExpress size={26} />,
  TypeScript: <SiTypescript size={26} />,
  JavaScript: <SiJavascript size={26} />,
  PHP: <SiPhp size={26} />,
  PostgreSQL: <SiPostgresql size={26} />,
  MySQL: <SiMysql size={26} />,
  HTML: <FaHtml5 size={26} />,
  CSS: <FaCss3Alt size={26} />,
  AWS: <FaAws size={26} />,
  Expo: <SiExpo size={26} />,
  'React Native': <SiReact size={26} />,
  Firebase: <SiFirebase size={26} />,
  Supabase: <SiSupabase size={26} />,
  'Next.js': <SiNextdotjs size={26} />,
  Strapi: <SiStrapi size={26} />,
  'Tailwind CSS': <SiTailwindcss size={26} />,
  React: <SiReact size={26} />,
  Vite: <SiVite size={26} />,
  'C#': <TbBrandCSharp size={26} />,
  'ASP.NET': <SiDotnet size={26} />,
  Bootstrap: <FaBootstrap size={26} />,
  WordPress: <SiWordpress size={26} />,
  Azure: <VscAzure size={26} />,
}

function DetailSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="py-8">
      <h2 className="font-display text-xl font-semibold mb-4 text-[var(--text)] transition-colors">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = useProject(id ?? '')
  const { t } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <div className="pt-20 p-10 text-center text-red-500">
        {t('projectDetail.notFound')}
      </div>
    )
  }

  const {
    banner,
    labelKeys,
    title,
    techStack,
    overview,
    keyFeatures,
    myContributions,
    contribution,
    challenges,
    reflection,
    extraImages,
    videoUrl,
    aspect,
    link,
    bannerCompact,
  } = project

  const screenshots = extraImages ?? []
  const features = keyFeatures.slice(0, 4)

  return (
    <main className="pt-20 pb-16 px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors mb-8"
        >
          ‹ {t('projectDetail.back')}
        </button>

        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            {labelKeys.map(key => (
              <span
                key={key}
                className={`px-2.5 py-0.5 text-xs font-medium text-white rounded-full ${labelColor[key]}`}
              >
                {t(`labels.${key}`)}
              </span>
            ))}
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text)] mb-4 transition-colors">
            {title}
          </h1>
          <div className="flex flex-wrap gap-3 mt-1">
            {techStack.map(tech => (
              <div
                key={tech}
                className="relative group text-[var(--icon)] hover:scale-110 transition-transform"
                title={tech}
              >
                {techIcons[tech] ?? (
                  <span className="text-xs text-[var(--text-muted)]">{tech}</span>
                )}
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 text-xs text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </header>

        {bannerCompact ? (
          <div className="flex justify-center items-center max-h-28 sm:max-h-32 mb-8 py-4 rounded-lg bg-[var(--border)]/20">
            <img
              src={banner}
              alt={title}
              className="max-h-20 sm:max-h-24 w-auto object-contain"
            />
          </div>
        ) : (
          <img src={banner} alt={title} className="w-full rounded-lg object-cover mb-10" />
        )}

        <article>
          <DetailSection title={t('projectDetail.overview')}>
            <p className="text-base font-normal text-[var(--text-muted)] leading-relaxed transition-colors">
              {overview}
            </p>
            {videoUrl?.includes('embed') && (
              <div
                className={`relative overflow-hidden rounded-lg mt-6 bg-black ${
                  aspect === '16/9' ? 'aspect-video' : 'aspect-[9/16] max-w-xs mx-auto'
                }`}
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`${videoUrl}&autoplay=1&mute=1`}
                  title="Demo Video"
                  allow="accelerometer; autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            )}
          </DetailSection>

          {features.length > 0 && (
            <DetailSection title={t('projectDetail.keyFeatures')}>
              <ul className="space-y-2 text-[var(--text-muted)] leading-relaxed">
                {features.map(item => (
                  <li
                    key={item}
                    className="text-base font-normal pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-[var(--accent)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </DetailSection>
          )}

          {myContributions.length > 0 && (
            <DetailSection title={t('projectDetail.highlights')}>
              <ol className="space-y-2 text-[var(--text-muted)] leading-relaxed">
                {myContributions.map((item, i) => (
                  <li key={item} className="flex gap-3 text-base font-normal">
                    <span className="text-[var(--accent)] font-medium shrink-0 tabular-nums">
                      {i + 1}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
              {contribution && contribution.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {contribution.map(item => (
                    <span
                      key={item.tech}
                      className="text-sm px-3 py-1 rounded-full text-[var(--text-muted)]"
                    >
                      {item.tech}{' '}
                      <span className="text-[var(--accent)] font-medium">
                        {item.percent}%
                      </span>
                    </span>
                  ))}
                </div>
              )}
            </DetailSection>
          )}

          {(challenges || reflection) && (
            <div className="grid grid-cols-1 gap-0 md:gap-8">
              {challenges && (
                <DetailSection title={t('projectDetail.challenges')}>
                  <p className="text-base font-normal text-[var(--text-muted)] leading-relaxed transition-colors">
                    {challenges}
                  </p>
                </DetailSection>
              )}
              {reflection && (
                <DetailSection title={t('projectDetail.reflection')}>
                  <p className="text-base font-normal text-[var(--text-muted)] leading-relaxed transition-colors">
                    {reflection}
                  </p>
                </DetailSection>
              )}
            </div>
          )}
        </article>

        {screenshots.length > 0 && (
          <section className="w-full py-8">
            <h2 className="font-display text-xl font-semibold mb-4 text-[var(--text)] transition-colors">
              {t('projectDetail.screenshots')}
            </h2>
            {screenshots.length === 1 ? (
              <img
                src={screenshots[0]}
                alt="Screenshot"
                className="w-full rounded-lg object-cover"
              />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {screenshots.map((img, idx) => (
                  <img
                    key={img}
                    src={img}
                    alt={`Screenshot ${idx + 1}`}
                    className="w-full rounded-lg object-cover"
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {link && (
          <div className="flex justify-center mt-10 pt-8 border-t border-[var(--border)]">
            <div className="gradient-btn-wrap">
              <div className="gradient-btn-glow" />
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-btn inline-flex items-center px-5 py-2"
              >
                <span className="text-red-500 text-xs p-1">●</span>
                {t('projectDetail.liveDemo')}
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
