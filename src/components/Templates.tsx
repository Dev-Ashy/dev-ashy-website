export default function Templates() {
  const templates = [
    {
      name: "Starter",
      description: "Clean minimal template with navigation and basic UI components",
      tags: ["TypeScript", "Expo Router"],
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "E-Commerce",
      description: "Full shopping app with cart, checkout, and payment integration",
      tags: ["Stripe", "Cart", "Auth"],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      name: "Social",
      description: "Social media app with feeds, messaging, and user profiles",
      tags: ["Chat", "Feed", "Auth"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Dashboard",
      description: "Admin dashboard with charts, tables, and analytics",
      tags: ["Charts", "Tables", "Auth"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "Fitness",
      description: "Health and fitness tracking with workouts and progress",
      tags: ["Health", "Charts", "Sensors"],
      gradient: "from-pink-500 to-rose-500",
    },
    {
      name: "Food Delivery",
      description: "Restaurant ordering with maps, payments, and real-time tracking",
      tags: ["Maps", "Payments", "Realtime"],
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section id="templates" className="section-padding bg-[#0d0d14]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-white">Start with a</span>{" "}
            <span className="text-gradient">template</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Production-ready templates to jumpstart your project. Fully
            customizable and MIT licensed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div key={template.name} className="card p-6 group">
              <div
                className={`w-full h-32 rounded-xl bg-gradient-to-br ${template.gradient} mb-4 opacity-80 group-hover:opacity-100 transition-opacity`}
              />
              <h3 className="text-lg font-bold mb-2">{template.name}</h3>
              <p className="text-sm text-slate-400 mb-4">
                {template.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {template.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-[#1a1a25] text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
