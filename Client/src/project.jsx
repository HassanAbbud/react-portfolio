//Hassan Sharif Abbud Gonzalez / Student#: 301451853 / 2-4-2025

export default function Project() {
  const projects = [
    {
      title: "Something 2 Fear",
      description: (
        <span>
          A cooperative horror game with a focus on solving puzzles as a team.
          Learn more and try the game at:{" "}
          <a
            href="https://andresac90.itch.io/something-2-fear"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Itch.io
          </a>
        </span>
      ),
      image: "/S2F.png",
      footer: "Main logo for the game Something to Fear",
    },
    {
      title: "Job Hunting Simulator Game",
      description:
        "In development game to simulate the process of finding a job through making CVs, going to interviews, etc. in a fun and interactive way.",
      image: "/NeedyStreamerOverload.png",
      footer: "UI Inspiration from Needy Streamer Overload",
    },
    {
      title: "Grid based strategy game (NAME: TBD)",
      description: "A strategy game akin to Fire Emblem with a deck building.",
      image: "/HighConcept.png",
      footer: "High concept of the game's gameplay and UI",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <footer className="text-center text-sm text-gray-500 mt-2">
                {project.footer}
              </footer>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
