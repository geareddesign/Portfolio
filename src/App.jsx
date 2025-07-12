import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import InterestsSection from "./components/InterestsSection";
import PortfolioSection from "./components/PortfolioSection";

function App() {
  return (
    <div className="flex bg-gray-50 min-h-screen dark:bg-gray-900">
      <Navbar />

      <main className="ml-64 w-full px-6 sm:px-12 py-12 space-y-24">
        {/* About Section */}
        <Section id="about" title="About">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 text-center md:text-left">
                            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-blue-600">Darrell</span> Baker</h1>

              <p className="text-gray-600 dark:text-gray-300">
                State Road NC ·{" "}
                <a
                  href="mailto:BakerD355@Gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  BakerD355@Gmail.com
                </a>
              </p>
              <p className="mt-4 text-gray-700 dark:text-gray-200 leading-relaxed max-w-2xl">
                Experienced programmer and entrepreneur with over 10 years of
                self-employment, specializing in software development, system
                analysis, and project management. Proficient in multiple
                programming languages, database management, and game
                development. Passionate about organization, efficiency, and
                remote collaboration. Seeking a remote Programmer Analyst or
                software development role to leverage my technical expertise
                while working from home.
              </p>
              
            </div>
          </div>
        </Section>

        {/* Section Divider */}
        <div className="h-1 bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 rounded-full" />

        {/* Experience Section */}
        <ExperienceSection />

        <div className="h-1 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 rounded-full" />

        {/* Education Section */}
        <EducationSection />

        <div className="h-1 bg-gradient-to-r from-green-400 via-green-200 to-green-400 rounded-full" />

        {/* Skills Section */}
        <SkillsSection />

        <div className="h-1 bg-gradient-to-r from-purple-400 via-purple-200 to-purple-400 rounded-full" />

        {/* Interests Section */}
        <InterestsSection />

        <div className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 rounded-full" />

        {/* Portfolio Section */}
        <PortfolioSection />
      </main>
    </div>
  );
}

export default App;
