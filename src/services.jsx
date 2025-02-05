//Hassan Sharif Abbud Gonzalez / Student#: 301451853 / 2-4-2025

export default function Services() {
  const services = [
    {
      title: "Fullstack Web Development",
      description: "Creating responsive and dynamic websites using modern technologies like Angular, Springboot and database management with SQLServer."
    },
    {
      title: "Game Development",
      description: "Designing fun and interactive games using industry standard technologies like Unity and Unreal engine 5."
    },
    {
      title: "Mobile Development",
      description: "Building cross-platform mobile applications using Flutter and other modern mobile development frameworks."
    },
    {
      title: "Video Editing",
      description: "High-quality video editing services using DaVinci Resolve. Specializing smooth transitions, motion graphics, and audio enhancement to create compelling and polished content for YouTube, social media, corporate projects, and more."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
       
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Services</h1>
          <p className="text-lg text-gray-600">
            Providing comprehensive solutions for your digital needs
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
