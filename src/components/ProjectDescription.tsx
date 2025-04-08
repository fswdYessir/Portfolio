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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const Divider = () => <div className="h-[1px] w-full bg-gray-300 my-6"></div>

interface ProjectDescriptionProps {
  overview: string
  keyFeatures: string[]
  challenges: string
  reflection: string
  myContributions?: string[]
  contribution?: { tech: string; percent: number }[]
  extraImages?: string[]
  videoUrl?: string
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
          label: 'My Contribution',
          data: contribution.map(c => c.percent),
          backgroundColor: [
            '#6b7280',
            '#9ca3af',
            '#d1d5db',
            '#e5e7eb',
            '#cbd5e1',
            '#94a3b8',
            '#64748b',
          ],
          barThickness: 26,
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
            callback: (val: string | number) => `${val}%`,
          },
          grid: { color: colors.grid },
          max: 100,
          beginAtZero: true,
        },
        y: {
          ticks: { color: colors.text, font: { weight: 'bold' } },
          grid: { color: colors.grid },
        },
      },
    }

    return (
      <div className="w-full max-w-2xl mx-auto my-4">
        <Bar data={data} options={options} />
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <ScrollAnimation delay={500}>
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-2">Project Overview</h2>
          <p className="text-lg leading-8">{overview}</p>
        </section>
        {videoUrl?.includes('embed') && (
          <>
            <section className="flex justify-center my-6">
              <div className="aspect-[9/16] w-full max-w-xs">
                <iframe
                  className="w-full h-full rounded-xl"
                  src={videoUrl}
                  title="Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </section>
          </>
        )}
        <Divider />
      </ScrollAnimation>

      <ScrollAnimation delay={600}>
        {keyFeatures.length > 0 && (
          <>
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold mb-2">Key Features</h2>
              <ul className="list-disc list-inside text-lg leading-8 space-y-1">
                {keyFeatures.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              {extraImages && extraImages.length > 0 && (
                <div className="flex flex-col md:flex-row flex-wrap items-center mt-5 justify-center gap-2">
                  {extraImages.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Screenshot ${i + 1}`}
                      className="w-full max-w-3xl rounded-sm m-2"
                    />
                  ))}
                </div>
              )}
            </section>
            <Divider />
          </>
        )}
      </ScrollAnimation>

      <ScrollAnimation delay={700}>
        {(myContributions?.length || contribution?.length) && (
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Development Highlights</h2>

            <div className="flex flex-col md:flex-row gap-3 items-start">
              {myContributions && myContributions.length > 0 && (
                <div className="flex-1">
                  <ul className="list-disc list-inside text-lg leading-8 space-y-2">
                    {myContributions.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {contribution && contribution.length > 0 && (
                <div className="flex-1 self-start md:-mt-5">
                  {renderBarChart(contribution)}
                </div>
              )}
            </div>
          </section>
        )}
        <Divider />
      </ScrollAnimation>
      <ScrollAnimation delay={800}>
        {challenges && (
          <>
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">Challenges</h2>
              <p
                className="text-lg leading-8"
                dangerouslySetInnerHTML={{ __html: challenges }}
              />
            </section>
            <Divider />
          </>
        )}
      </ScrollAnimation>
      <ScrollAnimation delay={900}>
        {reflection && (
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold mb-2">Reflection</h2>
            <p
              className="text-lg leading-8"
              dangerouslySetInnerHTML={{ __html: reflection }}
            />
          </section>
        )}
      </ScrollAnimation>
    </div>
  )
}

export default ProjectDescription
