const intermediate = [
  { title: 'Pre-Medical', desc: 'Biology-focused stream for students pursuing careers in medicine and health sciences.', icon: '🩺' },
  { title: 'Pre-Engineering', desc: 'Mathematics and physics grounding for students aiming at engineering fields.', icon: '⚙️' },
  { title: 'Computer Science', desc: 'Foundational computing and programming skills alongside core science subjects.', icon: '💻' },
  { title: 'Humanities', desc: 'Social sciences and languages for students interested in arts and civil services.', icon: '📖' },
]

const degree = [
  { title: 'Associate Degree in Arts', desc: 'Two-year program covering humanities and social sciences.' },
  { title: 'Associate Degree in Science', desc: 'Two-year program with focus on science subjects.' },
  { title: 'Associate Degree in Commerce', desc: 'Business and commerce oriented two-year program.' },
]

export default function Academics() {
  return (
    <>
      <section className="bg-white border-b border-slate-100">
        <div className="container-custom py-16 md:py-20">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Academics</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">Academic Programs</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Two levels of study, multiple programs — one goal: a strong foundation for your future.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">HSSC · Grades XI–XII</p>
              <h2 className="text-2xl font-bold text-slate-900">Intermediate Programs</h2>
            </div>
            <span className="text-sm bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full font-medium">Duration: 2 Years</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {intermediate.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Degree Level</p>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Associate Degree Programs</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {degree.map((p) => (
              <div key={p.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 border-l-4 border-l-blue-600">
                <h3 className="font-bold text-slate-900 text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
