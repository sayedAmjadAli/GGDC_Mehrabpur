const events = [
  {
    title: 'Seventh Sindh Game Competition',
    date: '11',
    month: 'feb',
    year: '2025-2026',
    desc: 'Participation in the 7th Sindh Games Competition, representing the college and promoting sportsmanship, teamwork, and athletic excellence.',
    type: 'Sports',
    images: ['/images/events/event1-1.jpg', '/images/events/event1-2.jpg', '/images/events/event1-3.jpg'],
  },
  {
    title: 'Eid Milad-un-Nabi',
    date: '3',
    month: 'Aug',
    year: '2026',
    desc: 'Celebration of Eid Milad-un-Nabi (PBUH) to honor the birth of Prophet Muhammad (PBUH) and promote his teachings, peace, and brotherhood.',
    type: 'Religious Event',
    images: ['/images/events/event2-1.jpg', '/images/events/event2-2.jpg', '/images/events/event2-3.jpg'],
  },
  {
    title: 'Science Exhibition',
    date: '15',
    month: 'Aug',
    year: '2026',
    desc: 'Students showcase innovative science projects. Open to visitors and judged by experts.',
    type: 'Academic',
    images: ['/images/events/event3-1.jpg', '/images/events/event3-2.jpg', '/images/events/event3-3.jpg'],
  },
  {
    title: 'Sports Day',
    date: '12',
    month: 'Dec',
    year: '2026',
    desc: 'Inter-class competitions in cricket, football, athletics, and more. Celebrate sportsmanship and teamwork.',
    type: 'Sports',
    images: ['/images/events/event4-1.jpg', '/images/events/event4-2.jpg', '/images/events/event4-3.jpg'],
  },
]

export default function Events() {
  return (
    <>
      <section className="bg-white border-b border-slate-100">
        <div className="container-custom py-16 md:py-20">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Activities</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">Events & Activities</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Academic, cultural, and sports events that enrich student life at GGDC Mehrabpur.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8">
            {events.map((e) => (
              <div key={e.title} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 flex flex-col sm:flex-row gap-5">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-xl flex flex-col items-center justify-center">
                    <span className="text-xl font-bold leading-none">{e.date}</span>
                    <span className="text-[11px] opacity-80">{e.month}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600">{e.type}</span>
                      <span className="text-xs text-slate-400">{e.year}</span>
                    </div>
                    <h2 className="text-lg font-bold text-slate-900">{e.title}</h2>
                    <p className="text-slate-600 text-sm mt-1 leading-relaxed">{e.desc}</p>
                  </div>
                </div>

                {/* Event Photos */}
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-3 gap-3">
                    {e.images.map((img, i) => (
                      <div key={i} className="aspect-video rounded-xl overflow-hidden bg-slate-100">
                        <img
                          src={img}
                          alt={`${e.title} ${i + 1}`}
                          className="w-full h-full object-cover"
                          onError={(ev) => {
                            ev.target.style.display = 'none'
                            ev.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-slate-300 text-xs">Photo ${i + 1}</div>`
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
