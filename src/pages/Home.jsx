import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const heroImages = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
  '/images/hero4.jpg',
]

const stats = [
  { value: '7+', label: 'Programs' },
  { value: '30+', label: 'Faculty' },
  { value: '1000+', label: 'Students' },
  { value: '60+', label: 'Years Legacy' },
]

const values = [
  {
    title: 'Quality Education',
    desc: 'Accessible and affordable education backed by the Government of Sindh.',
    icon: '🎓',
  },
  {
    title: 'Women Empowerment',
    desc: 'Focused on developing confident, skilled and responsible young women.',
    icon: '👩‍🎓',
  },
  {
    title: 'Holistic Growth',
    desc: 'Academic excellence combined with character building and leadership.',
    icon: '🌱',
  },
]

const notices = [
  {
    date: '10 Aug 2026',
    type: 'Urgent',
    title: 'Independence Day Celebration',
    desc: 'Flag hoisting ceremony and cultural program on 14 August.',
  },
  {
    date: '22 Aug 2026',
    type: 'Exam',
    title: 'Mid-term Examination Schedule',
    desc: 'Mid-term exams will commence from 12 October 2026.',
  },
]

const events = [
  { title: 'Orientation Day', date: '11 Aug', desc: 'Welcome session for new students.' },
  { title: 'Science Exhibition', date: '15 Aug', desc: 'Students showcase innovative projects.' },
  { title: 'Sports Day', date: '12 Dec', desc: 'Inter-class sports competitions.' },
]

const facilities = [
  { title: 'Library', desc: 'Rich collection of books and study resources.', icon: '📚' },
  { title: 'Science Labs', desc: 'Well-equipped Physics, Chemistry & Biology labs.', icon: '🔬' },
  { title: 'Computer Lab', desc: 'Modern computers for practical learning.', icon: '💻' },
  { title: 'Sports Ground', desc: 'Ground for sports and outdoor activities.', icon: '🏆' },
]

export default function Home() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="relative bg-white overflow-hidden">
        <div className="container-custom py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div>
              <div className="inline-block mb-5 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full tracking-wide uppercase">
                Government of Sindh · College Education Department
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-[1.12] mb-6">
                Government Girls<br />
                Degree College<br />
                <span className="text-blue-600">Mehrabpur</span>
              </h1>

              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Empowering young women with quality education, character building, and academic excellence.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  to="/admissions"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition shadow-lg shadow-blue-600/25"
                >
                  Apply for Admission
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-semibold rounded-xl transition"
                >
                  Learn More
                </Link>
              </div>

              {/* Mini stats */}
              <div className="flex flex-wrap gap-8 pt-6 border-t border-slate-100">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-bold text-slate-900">{s.value}</div>
                    <div className="text-sm text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Carousel */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative bg-slate-100">
                {heroImages.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Campus ${i + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      i === current ? 'opacity-100' : 'opacity-0'
                    }`}
                    onError={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, #dbeafe, #e0e7ff)'
                      e.target.alt = 'Add hero images'
                    }}
                  />
                ))}

                {/* Dots */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {heroImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        i === current ? 'bg-white w-6' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <button
                  onClick={() => setCurrent((current - 1 + heroImages.length) % heroImages.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-slate-700 shadow z-10"
                >
                  ‹
                </button>
                <button
                  onClick={() => setCurrent((current + 1) % heroImages.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-slate-700 shadow z-10"
                >
                  ›
                </button>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-xl">📍</div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Mehrabpur</div>
                    <div className="text-xs text-slate-500">Sindh, Pakistan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VALUES ========== */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Why Choose GGDC Mehrabpur</h2>
            <p className="text-slate-600 max-w-xl mx-auto">We are committed to providing the best learning environment for girls.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-5">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== LEADERSHIP & ADMINISTRATION ========== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">College Education Department</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Leadership & Administration</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
              Official education leadership supporting educational quality, student welfare and accountable governance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'Syed Sardar Ali Shah', role: 'Education Minister, Sindh', img: '/images/minister.jpg' },
              { name: 'Nadeem ur Rehman', role: 'Secretary CED, Sindh', img: '/images/secretary.jpg' },
              { name: 'Zahid Rajper', role: 'Director General CED, Sindh', img: '/images/dg.jpg' },
              { name: 'Lala Rukh Baloch', role: 'Regional Director Colleges, SBA', img: '/images/regional.jpg' },
            ].map((person) => (
              <div key={person.name} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center hover:shadow-md transition">
                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-blue-100 border-4 border-white shadow-md">
                  <img 
                    src={person.img} 
                    alt={person.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-3xl text-blue-400">👤</div>'
                    }}
                  />
                </div>
                <h3 className="font-bold text-slate-900 text-sm leading-snug">{person.name}</h3>
                <p className="text-xs text-blue-600 font-medium mt-1">{person.role}</p>
              </div>
            ))}
          </div>

          {/* Principal */}
          <div className="bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 relative min-h-[380px] lg:min-h-[480px] bg-slate-200">
                <img 
                  src="/images/principal.jpg" 
                  alt="Ikhtiar Hussain - Principal" 
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="absolute inset-0 hidden flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-slate-200 text-blue-400">
                  <div className="text-6xl mb-3">👨‍🏫</div>
                  <p className="font-medium text-blue-600/70 text-sm">Add principal.jpg</p>
                </div>
              </div>

              <div className="lg:col-span-3 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">Principal</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">Ikhtiar Hussain Sahito</h3>
                <p className="text-blue-600 font-medium mb-6">Principal & Associate Professor (Commerce)</p>
                
                <p className="text-slate-700 leading-relaxed mb-5">
                  “It is my privilege to serve as the Principal of Government Girls Degree College Mehrabpur. Our college is dedicated to the holistic development of girls through quality education and co-curricular activities. Our mission is to prepare students to face future challenges with knowledge, discipline, and integrity.”
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  I welcome all students and parents to be a part of our academic family. Together we will create an environment where every student can learn, grow and achieve her aspirations.
                </p>

                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm text-slate-500">Government Girls Degree College Mehrabpur</p>
                  <p className="text-sm text-slate-500">College Education Department, Government of Sindh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== NOTICES + EVENTS ========== */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Latest Notices</h2>
                <Link to="/notices" className="text-blue-600 text-sm font-semibold hover:underline">View all →</Link>
              </div>
              <div className="space-y-4">
                {notices.map((n) => (
                  <div key={n.title} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        n.type === 'Urgent' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
                      }`}>{n.type}</span>
                      <span className="text-xs text-slate-400">{n.date}</span>
                    </div>
                    <h3 className="font-semibold text-slate-900">{n.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{n.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Upcoming Events</h2>
                <Link to="/events" className="text-blue-600 text-sm font-semibold hover:underline">View all →</Link>
              </div>
              <div className="space-y-4">
                {events.map((e) => (
                  <div key={e.title} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex gap-4">
                    <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold leading-none">{e.date.split(' ')[0]}</span>
                      <span className="text-[10px] opacity-80">{e.date.split(' ')[1]}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{e.title}</h3>
                      <p className="text-sm text-slate-600 mt-1">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FACILITIES ========== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Campus Facilities</h2>
            <p className="text-slate-600">Everything you need for a complete learning experience</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((f) => (
              <div key={f.title} className="group p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition bg-slate-50 hover:bg-white">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-slate-900 mb-1">{f.title}</h3>
                <p className="text-sm text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/facilities" className="inline-flex items-center text-blue-600 font-semibold hover:underline">
              View all facilities →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-20 bg-blue-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join Us?</h2>
          <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
            Take the first step towards a brighter future. Admissions are open for Intermediate and Degree programs.
          </p>
          <Link
            to="/admissions"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition shadow-lg"
          >
            Start Application
          </Link>
        </div>
      </section>
    </>
  )
}
