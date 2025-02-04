//Hassan Sharif Abbud Gonzalez / Student#: 301451853 / 2-4-2025

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/A01568439_3_FB.jpg"
                  alt="Profile image"
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Hassan Sharif Abbud Gonzalez
                </h2>
                <h3>
                Software engineer | Web developer | Game developer
                </h3>
                <p className="text-gray-600 mb-6">
                  Former entrepreneur in the high impact business incubator
                  program NOVA ORION and graduate of the Instituto Tecnológico y
                  de Estudios Superiores de Monterrey. Experience as a software
                  engineer in the field of videogame development with a strong
                  dedication for studying and exploring new grounds in software
                  development. Worked as a game designer and lead programmer at
                  the indie video game company Nefarious Game Studios, always
                  broadening my skills to deliver the most enjoyable user
                  experience within a project.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Professional experience
                </h2>

                <h3 className="grid grid-cols-2 items-center text-gray-900 mb-4">
                  <span className="text-lg font-bold uppercase tracking-wide">
                    Blueweb Software Solutions
                  </span>
                  <span className="text-lg font-bold uppercase tracking-wide text-right">
                    Chihuahua, Mexico
                  </span>
                  <span className="text-md font-medium italic text-gray-700">
                    Web Developer and Designer
                  </span>
                  <span className="text-md font-medium italic text-gray-700 text-right">
                    June 2024 – December 2024
                  </span>
                </h3>

                <ul className="list-disc ml-5 mb-6">
                  <li>
                    Designed, programmed and deployed various frontend and
                    backend web apps following clean architecture and
                    implementing CRUD operations.
                  </li>
                  <li>
                    Developed an automated messaging system for sending phone
                    reminders, integrating a custom API with a relational
                    database and external web applications to streamline the use
                    of the WhatsApp API.
                  </li>
                  <li>
                    Employed industry-standard technologies such as Angular,
                    Spring Boot, .NET, and Flutter to develop robust web
                    applications in a coordinated environment.
                  </li>
                </ul>

                <h3 className="grid grid-cols-2 items-center text-gray-900 mb-4">
                  <span className="text-lg font-bold uppercase tracking-wide">
                    Nefarious Game Studios
                  </span>
                  <span className="text-lg font-bold uppercase tracking-wide text-right">
                    Chihuahua & Monterrey, Mexico
                  </span>
                  <span className="text-md font-medium italic text-gray-700">
                    Lead Programmer and Gameplay Designer
                  </span>
                  <span className="text-md font-medium italic text-gray-700 text-right">
                    August 2019 – November 2023
                  </span>
                </h3>

                <ul className="list-disc ml-5 mb-6">
                  <li>
                    Designed and programmed major in-game gameplay systems for
                    the games <strong>The Book of Glory</strong> and{" "}
                    <strong>Colors</strong> using Unreal Engine and Unity.
                  </li>
                  <li>
                    Structured the object-oriented software architecture in C++
                    for developing <strong>The Book of Glory</strong> video
                    game.
                  </li>
                  <li>
                    Managed projects using agile Scrum methodology to coordinate
                    a 12-person team, ensuring timely delivery and effective
                    project management.
                  </li>
                  <li>
                    Facilitated collaborative development and version control
                    with GitHub to streamline and organize projects.
                  </li>
                </ul>

                <a
                  href="/CV_HassanAbbud_EN.pdf"
                  target="_blank"
                  className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Download Resume (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
