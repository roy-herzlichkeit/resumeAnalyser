import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants/index";
import ResumeCard from "~/components/ResumeCard";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Resume React" },
    { name: "description", content: "Get your instant Resume feedback!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>
            Track your Résumés and Applications
          </h1>
          <h2>
            Review your Résumé submissions and check with AI-powered feedback.
          </h2>
        </div>
        {
          resumes.length > 0 &&
          <div className="resumes-section">
            {
              resumes.map((resume) => (
                <ResumeCard key={resume.id} {...resume} />
              ))
            }
          </div>
        }
      </section>
    </main>
  );
}
