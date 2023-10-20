

export default function Card({ projects }) {
  return (
    <>
      {projects.map((project, index) => (
        <div
          key={index}
          className="max-w-7xl bg-neutral-100 mx-auto rounded-xl sticky top-20 mt-72 shadow-2xl"
        >
          <div className="grid grid-cols-2 gap-x-10 p-6 items-end">
            {/* left column */}
            <div className="space-y-6 pb-5">
              <div>
                <div className="pb-1">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="uppercase tracking-[0.1575rem] text-orange font-bold text-sm pr-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="uppercase text-6xl tracking-[-0.04em]">
                  {project.title}
                </h2>
              </div>
              <div className="gap-y-4 flex-col flex items-start">
                <p className="text-lg max-w-sm font-light">
                  {project.description}
                </p>
                <button className="flex items-center gap-x-2 bg-orange px-4 py-2 rounded-full group">
                  <span>View Case Study</span>
                  <span className="rounded-full bg-black p-1 group-hover:-rotate-45 transition-all ease-[0.22, 1, 0.36, 1] duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#f5f5f5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h13M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* image right column */}
            <div className="aspect-square overflow-hidden rounded-lg flex">
              <img
                className="h-full w-full object-cover"
                src={project.img}
                alt={project.title}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
