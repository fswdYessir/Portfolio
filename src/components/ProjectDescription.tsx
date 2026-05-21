import { useTheme } from './ThemeContext'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  TooltipItem,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import ScrollAnimation from './ScrollAnimation'
import {
  FaCheck,
  FaCode,
  FaLightbulb,
  FaTriangleExclamation,
} from 'react-icons/fa6'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface ProjectDescriptionProps {
  overview: string
  keyFeatures: string[]
  challenges: string
  reflection: string
  myContributions?: string[]
  contribution?: { tech: string; percent: number }[]
  extraImages?: string[]
  videoUrl?: string
  aspect?: string
}

const SectionCard = ({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) => {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-full bg-cyan-500 text-black font-bold flex items-center justify-center text-sm">
          {number}
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-white">
          {title}
        </h2>
      </div>

      {children}
    </section>
  )
}

const ProjectDescription = ({
  overview,
  keyFeatures,
  challenges,
  reflection,
  myContributions,
  contribution,
  extraImages,
  videoUrl,
  aspect,
}: ProjectDescriptionProps) => {
  const { theme } = useTheme()

  const colors = {
    text: theme === 'light' ? '#1f2937' : '#f9fafb',
    grid: theme === 'light' ? '#e5e7eb' : '#374151',
  }

  const renderBarChart = (
    contribution: { tech: string; percent: number }[]
  ) => {
    const data = {
      labels: contribution.map(c => c.tech),
      datasets: [
        {
          label: 'Contribution',
          data: contribution.map(c => c.percent),
          backgroundColor: '#22d3ee',
          borderRadius: 999,
          barThickness: 18,
        },
      ],
    }

    const options: ChartOptions<'bar'> = {
      indexAxis: 'y',
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (context: TooltipItem<'bar'>) => `${context.parsed.x}%`,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: colors.text,
            callback: value => `${value}%`,
          },
          grid: {
            color: colors.grid,
          },
          max: 100,
          beginAtZero: true,
        },
        y: {
          ticks: {
            color: colors.text,
          },
          grid: {
            display: false,
          },
        },
      },
    }

    return (
      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
        <Bar data={data} options={options} />
      </div>
    )
  }

  const VideoPlayer = ({
    videoUrl,
    aspect = '16/9',
  }: {
    videoUrl: string
    aspect?: string
  }) => {
    return (
      videoUrl?.includes('embed') && (
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl mt-8">
          <div
            className={`aspect-[${aspect}] relative w-full ${
              aspect === '16/9'
                ? 'pb-[56%]'
                : 'max-w-sm mx-auto pb-[160%]'
            }`}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl + '&autoplay=1&mute=1'}
              title="Demo Video"
              allow="accelerometer; autoplay; encrypted-media;"
              allowFullScreen
            />
          </div>
        </div>
      )
    )
  }

  return (
    <div className="space-y-8 text-white">
      <ScrollAnimation delay={100}>
        <SectionCard number="1" title="Project Overview">
          <p className="text-base md:text-lg leading-8 text-zinc-300 max-w-4xl">
            {overview}
          </p>

          {videoUrl?.includes('embed') && (
            <VideoPlayer videoUrl={videoUrl} aspect={aspect} />
          )}
        </SectionCard>
      </ScrollAnimation>

      {keyFeatures.length > 0 && (
        <ScrollAnimation delay={200}>
          <SectionCard number="2" title="Key Features">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5 hover:border-cyan-400/40 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-cyan-400">
                      <FaCode />
                    </div>

                    <p className="text-zinc-300 leading-7 text-sm md:text-base">
                      {feature}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {extraImages && extraImages.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                {extraImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Screenshot ${i + 1}`}
                    className="rounded-2xl border border-white/10 shadow-xl hover:scale-[1.02] transition-all duration-300"
                  />
                ))}
              </div>
            )}
          </SectionCard>
        </ScrollAnimation>
      )}

      {(myContributions?.length || contribution?.length) && (
        <ScrollAnimation delay={300}>
          <SectionCard number="3" title="Development Highlights">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {myContributions && myContributions.length > 0 && (
                <div className="space-y-4">
                  {myContributions.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <FaCheck className="text-cyan-400 mt-1 shrink-0" />

                      <p className="text-zinc-300 leading-7">{item}</p>
                    </div>
                  ))}
                </div>
              )}

              {contribution && contribution.length > 0 && (
                <div>{renderBarChart(contribution)}</div>
              )}
            </div>
          </SectionCard>
        </ScrollAnimation>
      )}

      {challenges && (
        <ScrollAnimation delay={400}>
          <SectionCard number="4" title="Challenges">
            <div className="flex gap-4">
              <div className="text-yellow-400 mt-1 shrink-0">
                <FaTriangleExclamation />
              </div>

              <p
                className="text-zinc-300 leading-8"
                dangerouslySetInnerHTML={{ __html: challenges }}
              />
            </div>
          </SectionCard>
        </ScrollAnimation>
      )}

      {reflection && (
        <ScrollAnimation delay={500}>
          <SectionCard number="5" title="Reflection">
            <div className="flex gap-4">
              <div className="text-cyan-400 mt-1 shrink-0">
                <FaLightbulb />
              </div>

              <p
                className="text-zinc-300 leading-8"
                dangerouslySetInnerHTML={{ __html: reflection }}
              />
            </div>
          </SectionCard>
        </ScrollAnimation>
      )}
    </div>
  )
}

export default ProjectDescription
