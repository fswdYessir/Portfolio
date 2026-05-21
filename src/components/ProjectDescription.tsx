import { useTheme } from "./ThemeContext";
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
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ScrollAnimation from "./ScrollAnimation";
import {
  FaCheck,
  FaGlobe,
  FaCode,
  FaServer,
  FaMapMarkedAlt,
  FaCamera,
} from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const Divider = () => <div className="w-full h-[1px] bg-white/10 my-14"></div>;

interface ProjectDescriptionProps {
  overview: string;
  keyFeatures: string[];
  challenges: string;
  reflection: string;
  myContributions?: string[];
  contribution?: { tech: string; percent: number }[];
  extraImages?: string[];
  videoUrl?: string;
  aspect?: string;
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
  const { theme } = useTheme();

  const colors = {
    text: theme === "light" ? "#1f2937" : "#f9fafb",
    grid: theme === "light" ? "#e5e7eb" : "#374151",
  };

  const renderBarChart = (
    contribution: { tech: string; percent: number }[],
  ) => {
    const data = {
      labels: contribution.map((c) => c.tech),
      datasets: [
        {
          label: "Contribution",
          data: contribution.map((c) => c.percent),
          backgroundColor: "#3B82F6",
          borderRadius: 999,
          barThickness: 14,
        },
      ],
    };

    const options: ChartOptions<"bar"> = {
      indexAxis: "y",
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (context: TooltipItem<"bar">) => `${context.parsed.x}%`,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: colors.text,
            callback: (val: string | number) => `${val}%`,
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
    };

    return (
      <div className="w-full">
        <Bar data={data} options={options} />
      </div>
    );
  };

  const VideoPlayer = ({
    videoUrl,
    aspect = "16/9",
  }: {
    videoUrl: string;
    aspect?: string;
  }) => {
    return (
      videoUrl?.includes("embed") && (
        <section className="my-8">
          <div
            className={`relative overflow-hidden rounded-3xl border border-white/10 bg-black ${
              aspect === "16/9"
                ? "aspect-video"
                : "aspect-[9/16] max-w-sm mx-auto"
            }`}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl + "&autoplay=1&mute=1"}
              title="Demo Video"
              allow="accelerometer; autoplay; encrypted-media;"
              allowFullScreen
            />
          </div>
        </section>
      )
    );
  };

  const featureIcons = [
    <FaMapMarkedAlt />,
    <FaGlobe />,
    <FaServer />,
    <FaCamera />,
    <FaCode />,
    <FaCheck />,
  ];

  return (
    <div className="space-y-10">
      {/* OVERVIEW */}
      <ScrollAnimation delay={200}>
        <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              1
            </div>

            <h2 className="text-3xl font-bold">Project Overview</h2>
          </div>

          <p className="text-zinc-300 leading-8 text-lg max-w-4xl">
            {overview}
          </p>

          {videoUrl?.includes("embed") && (
            <VideoPlayer videoUrl={videoUrl} aspect={aspect} />
          )}
        </section>
      </ScrollAnimation>

      {/* FEATURES */}
      {keyFeatures.length > 0 && (
        <>
          <ScrollAnimation delay={300}>
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  2
                </div>

                <h2 className="text-3xl font-bold">Key Features</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-xl mb-5">
                      {featureIcons[idx % featureIcons.length]}
                    </div>

                    <p className="text-zinc-300 leading-7">{feature}</p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollAnimation>

          <Divider />
        </>
      )}

      {/* CONTRIBUTIONS */}
      {(myContributions?.length || contribution?.length) && (
        <>
          <ScrollAnimation delay={300}>
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  3
                </div>

                <h2 className="text-3xl font-bold">Development Highlights</h2>
              </div>

              {/* contribution 있을때 */}
              {contribution && contribution.length > 0 ? (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  {/* LIST */}
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                    <ul className="space-y-5">
                      {myContributions?.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className="mt-1 text-cyan-400">
                            <FaCheck />
                          </div>

                          <span className="text-zinc-300 leading-7">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* DONUT */}
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                    <h3 className="text-xl font-semibold mb-6">
                      My Contribution
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                      {contribution.map((item, idx) => (
                        <div
                          key={idx}
                          className="rounded-2xl border border-white/10 bg-black/20 p-5 flex flex-col items-center justify-center"
                        >
                          <div className="relative w-24 h-24">
                            <svg className="w-full h-full rotate-[-90deg]">
                              {/* background */}
                              <circle
                                cx="48"
                                cy="48"
                                r="40"
                                stroke="rgba(255,255,255,0.08)"
                                strokeWidth="8"
                                fill="none"
                              />

                              {/* progress */}
                              <circle
                                cx="48"
                                cy="48"
                                r="40"
                                stroke="#3B82F6"
                                strokeWidth="8"
                                fill="none"
                                strokeLinecap="round"
                                strokeDasharray={251.2}
                                strokeDashoffset={
                                  251.2 - (251.2 * item.percent) / 100
                                }
                              />
                            </svg>

                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-lg font-bold text-white">
                                {item.percent}%
                              </span>
                            </div>
                          </div>

                          <p className="mt-4 text-sm text-zinc-300 text-center">
                            {item.tech}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* contribution 없으면 FULL WIDTH */
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 w-full">
                  <ul className="space-y-5">
                    {myContributions?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="mt-1 text-cyan-400">
                          <FaCheck />
                        </div>

                        <span className="text-zinc-300 leading-7 text-lg">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          </ScrollAnimation>

          <Divider />
        </>
      )}

      {/* CHALLENGES + REFLECTION */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {challenges && (
          <ScrollAnimation delay={300}>
            <section className="rounded-3xl border border-orange-500/20 bg-orange-500/[0.03] p-8 h-full">
              <h2 className="text-2xl font-bold mb-5">Challenges</h2>

              <p
                className="text-zinc-300 leading-8"
                dangerouslySetInnerHTML={{ __html: challenges }}
              />
            </section>
          </ScrollAnimation>
        )}

        {reflection && (
          <ScrollAnimation delay={400}>
            <section className="rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.03] p-8 h-full">
              <h2 className="text-2xl font-bold mb-5">Reflection</h2>

              <p
                className="text-zinc-300 leading-8"
                dangerouslySetInnerHTML={{ __html: reflection }}
              />
            </section>
          </ScrollAnimation>
        )}
      </div>

      {/* IMAGES */}
      {extraImages && extraImages.length > 0 && (
        <>
          <Divider />

          <ScrollAnimation delay={300}>
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  4
                </div>

                <h2 className="text-3xl font-bold">Screenshots</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {extraImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
                  >
                    <img
                      src={img}
                      alt={`Screenshot ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-[1.02] transition duration-500"
                    />
                  </div>
                ))}
              </div>
            </section>
          </ScrollAnimation>
        </>
      )}
    </div>
  );
};
export default ProjectDescription;
