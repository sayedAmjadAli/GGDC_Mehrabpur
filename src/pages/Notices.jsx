const notices = [
  {
    date: '10 Aug 2026',
    type: 'Urgent',
    title: 'Independence Day Celebration',
    desc: 'Flag hoisting ceremony and cultural program on 14 August. All students are requested to attend.',
  },
  {
    date: '22 Aug 2026',
    type: 'Exam',
    title: 'Mid-term Examination Schedule',
    desc: 'The mid-term exams for all classes will commence from 12 October 2026. Check the notice board for detailed timetable.',
  },
  {
    date: '05 Sep 2026',
    type: 'Academic',
    title: 'Class Commencement Notice',
    desc: 'Regular classes for the new academic session will commence from the notified date. Students must ensure 75% attendance.',
  },
  {
    date: '15 Jul 2026',
    type: 'Admission',
    title: 'Admission Open for Intermediate & Degree Programs',
    desc: 'Admissions are open for Intermediate (XI) and Associate Degree programs. Last date will be announced soon.',
  },
]

export default function Notices() {
  return (
    <>
      <section className="bg-white border-b border-slate-100">
        <div className="container-custom py-16 md:py-20">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Notices</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">Notices Board</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Stay updated with the latest announcements, circulars, and important information from the college.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container-custom max-w-3xl">
          <div className="space-y-5">
            {notices.map((n) => (
              <article key={n.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    n.type === 'Urgent' ? 'bg-red-50 text-red-600' :
                    n.type === 'Exam' ? 'bg-amber-50 text-amber-700' :
                    n.type === 'Admission' ? 'bg-green-50 text-green-700' :
                    'bg-blue-50 text-blue-600'
                  }`}>
                    {n.type}
                  </span>
                  <time className="text-sm text-slate-400">{n.date}</time>
                </div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">{n.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{n.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
