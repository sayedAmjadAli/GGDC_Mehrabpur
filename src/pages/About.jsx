export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-slate-100">
        <div className="container-custom py-16 md:py-20">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Government Girls Degree<br />College Mehrabpur
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            A premier educational institution in Sindh dedicated to providing quality higher education to young women and empowering them through knowledge and character building.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-5">👁️</div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                To be a center of excellence in higher education, producing competent, ethical, and socially responsible young women who contribute positively to society.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-5">🎯</div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To provide accessible, affordable, and quality education through dedicated faculty, modern facilities, and a supportive learning environment that fosters intellectual growth and personal development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our History</h2>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p>
              Government Girls Degree College Mehrabpur is committed to serving the educational needs of young women in the region. The college operates under the College Education Department, Government of Sindh.
            </p>
            <p>
              Over the years, the institution has focused on academic excellence, discipline, and character building — preparing students for higher studies and meaningful contributions to society.
            </p>
            <p>
              Today, GGDC Mehrabpur continues to grow as a trusted center for intermediate and degree-level education for girls.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
