import Links from "../components/common/Links";
import SEO from "../components/SEO";
import useScrollState from "../hooks/useScrollState";
export default function ProjectPage() {
  const { activeProject, activeProjectProgress, onScrollToProject } =
    useScrollState();
  return (
    <>
      <SEO
        title="projects"
        description="Welcome to my Portfolio website,These are my Full stack projects implemented with modern web technologies and best practices"
        path="/projects"
      />
      <section className="sticky grid min-h-screen w-ful place-content-center overflow-hidden top-0">
        <h2 className="relative z-0 text-[14vw] font-black text-neutral-800 dark:text-neutral-300 md:text-[200px]">
          Projects<span className="text-purple-500">.</span>
        </h2>
      </section>
      <section className="sticky top-0 min-h-screen w-full flex items-start justify-center bg-zinc-200 dark:bg-zinc-800 rounded-t-[80px] transition-colors "></section>
      <footer className="group">
        <section className="rounded-t-ful sticky top-10 md:top-01">
          <Links />
        </section>
      </footer>
    </>
  );
}
