import Card from "./components/Card";

export default function App() {
  const projects = [
    {
      tags: ["Branding", "Development"],
      title: "Architecture",
      description:
        "Develop a sustainable living app promoting eco-conscious choices with tips, challenges, and a carbon footprint tracker.",
      img: "https://images.unsplash.com/photo-1697389185455-f39c7543cab9?auto=format&fit=crop&q=80&w=2486&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      tags: ["Development"],
      title: "Film",
      description:
        "Develop a sustainable living app promoting eco-conscious choices with tips, challenges, and a carbon footprint tracker.",
      img: "https://images.unsplash.com/photo-1697050200451-c55db478bb6b?auto=format&fit=crop&q=80&w=2009&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      tags: ["Design"],
      title: "Musicman",
      description:
        "Develop a sustainable living app promoting eco-conscious choices with tips, challenges, and a carbon footprint tracker.",
      img: "https://images.unsplash.com/photo-1611703372231-02ffff8abee6?auto=format&fit=crop&q=80&w=2486&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div>
      <div className="h-screen flex flex-col items-end py-20 justify-between  text-white max-w-7xl mx-auto gap-y-5">
        <h1 className="text-9xl tracking-tight uppercase">
          Scrumptious Projects Showcase
        </h1>

        <span className="block text-[#F99500] text-xl font-medium  uppercase">
          scroll down c:
        </span>
      </div>
      <div>
        <Card projects={projects} />
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
