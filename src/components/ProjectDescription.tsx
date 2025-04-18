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
import { FaCheck } from 'react-icons/fa'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const Divider = () => <div className="h-[1px] w-full my-10"></div>

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
          barThickness: 21,
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
            font: {
              family: 'Roboto mono',
              size: 10,
              weight: 'normal',
              style: 'italic',
            },
            callback: (val: string | number) => `${val}%`,
          },
          grid: { color: colors.grid },
          max: 100,
          beginAtZero: true,
        },
        y: {
          ticks: {
            color: colors.text,
            font: {
              family: 'Roboto mono',
              size: 11,
              weight: 'normal',
              style: 'italic',
            },
          },
          grid: { color: colors.grid },
        },
      },
    }

    return (
      <div className="w-full max-w-3xl h-[200px] lg:h-[250px] mx-auto">
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
        <section className="flex justify-center my-6">
          <div
            className={`aspect-[${aspect}] relative w-full  max-w-2xl ${
              aspect === '16/9'
                ? 'max-w-2xl pb-[56%] md:pb-[50%] lg:pb-[36%]'
                : 'max-w-xs pb-[160%] md:pb-[85%] lg:pb-[60%] '
            }`}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              src={videoUrl + '&autoplay=1&mute=1'}
              title="Demo Video"
              allow="accelerometer; autoplay; encrypted-media;"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      )
    )
  }

  return (
    <div className="space-y-5">
      <ScrollAnimation delay={300}>
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-2 italic">Project Overview</h2>
          <p className="text-lg leading-8">{overview}</p>
        </section>
        {videoUrl?.includes('embed') && (
          <>
            <VideoPlayer videoUrl={videoUrl} aspect={aspect} />
          </>
        )}
        <Divider />
      </ScrollAnimation>

      {keyFeatures.length > 0 && (
        <>
          <section className="flex flex-col gap-4">
            <ScrollAnimation delay={300}>
              <h2 className="text-2xl font-bold mb-2 italic">Key Features</h2>
              <ul className="custom-list list-disc list-inside text-lg leading-10">
                {keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FaCheck className="text-yellow-400 mt-3 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
            {extraImages && extraImages.length > 0 && (
              <div className="flex flex-col md:flex-row flex-wrap items-center mt-5 justify-center gap-2">
                {extraImages.map((img, i) => (
                  <ScrollAnimation
                    animation="fade-in"
                    key={i}
                    offset={300}
                    delay={i * 300}
                  >
                    <img
                      key={i}
                      src={img}
                      alt={`Screenshot ${i + 1}`}
                      className="w-full max-w-3xl rounded-sm m-2 my-5"
                    />
                  </ScrollAnimation>
                ))}
              </div>
            )}
          </section>
          <Divider />
        </>
      )}

      <ScrollAnimation delay={300}>
        {(myContributions?.length || contribution?.length) && (
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold mb-2 italic">
              Development Highlights
            </h2>

            <div className="flex flex-col md:flex-row gap-3 items-start">
              {myContributions && myContributions.length > 0 && (
                <div className="flex-1">
                  <ul className="text-lg leading-10">
                    {myContributions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <FaCheck className="text-yellow-400 mt-3 shrink-0" />
                        <span>{item}</span>
                      </li>
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
      <ScrollAnimation delay={300}>
        {challenges && (
          <>
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold mb-2 italic">Challenges</h2>
              <p
                className="text-lg leading-8"
                dangerouslySetInnerHTML={{ __html: challenges }}
              />
            </section>
            <Divider />
          </>
        )}
      </ScrollAnimation>
      <ScrollAnimation delay={300}>
        {reflection && (
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold mb-2 italic">Reflection</h2>
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
