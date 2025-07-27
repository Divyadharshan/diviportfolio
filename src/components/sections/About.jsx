import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const programmingLanguages = ["C", "C++", "Python", "JavaScript", "Java"];
  const webDevelopment = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Flask"];
  const databases = ["MongoDB", "MySQL"];
  const authentication = ["Passport.js", "JWT", "OAuth"];
  const tools = ["Git", "GitHub", "Google Collab", "VS Code", "Postman"]
  const deployments = ["Netlify","Vercel", "Render", "Microsoft Azure"];

  const educationTimeline = [
    {
      year: "2022 - 2026",
      title: "B.E Computer Science and Engineering",
      institution: "Sri Venkateswara College of Engineering",
      description: "Currently pursuing Computer Science with focus on Data Structures, Algorithms, Cloud Computing, DBMS, and Computer Networks",
      icon: "🎓",
      status: "current"
    },
    {
      year: "2020 - 2022",
      title: "Higher Secondary Education",
      institution: "St.Ann's Matriculation Higher Secondary School",
      description: "Completed 12th grade with Computer Science stream, focusing on programming fundamentals and mathematics",
      icon: "🏫",
      status: "completed"
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span>👨‍💻</span>{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all mb-8">
            <p className="text-gray-300 mb-6">
            Passionate full-stack developer with expertise in building scalable web applications and crafting innovative, secure, and efficient solutions using modern web technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 💻 Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {programmingLanguages.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 🌐 Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  {webDevelopment.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 🗄️ Databases </h3>
                <div className="flex flex-wrap gap-2">
                  {databases.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 🔐 Authentication </h3>
                <div className="flex flex-wrap gap-2">
                  {authentication.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 🛠️ Tools </h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 🚀 Deployment </h3>
                <div className="flex flex-wrap gap-2">
                  {deployments.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all mb-8">
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span>🎓</span>{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Educational Journey
              </span>
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-400"></div>
              
              {educationTimeline.map((education, index) => (
                <div key={index} className={`relative mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all hover:-translate-y-1">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl">{education.icon}</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            education.status === 'current' 
                              ? 'bg-blue-500/20 text-blue-400' 
                              : 'bg-green-500/20 text-green-400'
                          }`}>
                            {education.status === 'current' ? 'Current' : 'Completed'}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">{education.title}</h4>
                        <p className="text-blue-400 font-medium mb-2">{education.institution}</p>
                        <p className="text-gray-400 text-sm mb-3">{education.description}</p>
                        <span className="text-cyan-400 text-sm font-mono">{education.year}</span>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-blue-500 bg-black flex items-center justify-center z-10 ${
                      education.status === 'current' ? 'animate-pulse' : ''
                    }`}>
                      <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all bg-white/5 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">💼</span>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Work Experience
                </h3>
              </div>
              <div className="space-y-6">
                <div className="bg-black/20 rounded-lg p-6 border border-white/5 hover:border-blue-500/30 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-white text-lg">
                      Web Developer Intern
                    </h4>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                      Aug 2023 - Sep 2023
                    </span>
                  </div>
                  <p className="text-blue-400 font-medium mb-3">
                    Cognifyz Technologies
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to design and implement new features, gaining hands-on experience in modern web development practices.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["React", "Node.js", "Web Development", "Team Collaboration"].map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all bg-white/5 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">🎯</span>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Achievements
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    icon: "🏆",
                    title: "Academic Excellence",
                    description: "Consistent academic excellence throughout educational journey with outstanding performance in computer science subjects"
                  },
                  {
                    icon: "⚡",
                    title: "Coding Competitions",
                    description: "Active participation in coding competitions and hackathons, demonstrating problem-solving skills"
                  },
                  {
                    icon: "🚀",
                    title: "Project Portfolio",
                    description: "Successfully completed multiple web development projects showcasing full-stack capabilities"
                  },
                  {
                    icon: "💡",
                    title: "Technical Foundation",
                    description: "Strong foundation in computer science fundamentals and modern development practices"
                  }
                ].map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-black/20 border border-white/5 hover:border-blue-500/30 transition-all">
                    <span className="text-2xl flex-shrink-0">{achievement.icon}</span>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{achievement.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
