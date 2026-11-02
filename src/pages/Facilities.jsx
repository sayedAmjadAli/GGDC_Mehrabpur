const facilities = [
  { title: 'College Library', desc: 'Well-stocked library with thousands of books, journals, reference materials, and growing digital resources. A quiet space for study and research.', icon: '📚' },
  { title: 'Science Laboratories', desc: 'Fully equipped laboratories for Physics, Chemistry, and Biology supporting practical work for Intermediate and degree students.', icon: '🔬' },
  { title: 'Computer Laboratory', desc: 'The college is working to establish a dedicated computer laboratory with modern equipment for practical learning.', icon: '💻' },
  { title: 'Sports Ground', desc: 'Spacious playground for cricket, football, athletics, and other sports. Encourages physical fitness and healthy competition.', icon: '🏆' },
  { title: 'Classrooms', desc: 'Spacious and well-ventilated classrooms designed for effective teaching and learning.', icon: '🏫' },
  { title: 'Administrative Block', desc: 'Principal office, admission office, and administrative support for students and parents.', icon: '🏛️' },
]

export default function Facilities() {
  return (
    <>
      <section className="bg-white border-b border-slate-100">
        <div className="container-custom py-16 md:py-20">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Campus</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">Our Facilities</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Infrastructure and resources that support teaching, learning, and student life on campus.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
