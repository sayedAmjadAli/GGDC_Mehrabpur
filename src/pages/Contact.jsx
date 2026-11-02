export default function Contact() {
  return (
    <>
      <section className="bg-white border-b border-slate-100">
        <div className="container-custom py-16 md:py-20">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">Contact Us</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Reach out to the college administration for admissions, queries, or grievances.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container-custom max-w-3xl">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">College Information</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-xl flex-shrink-0">📍</div>
                <div>
                  <h3 className="font-bold text-slate-900">Address</h3>
                  <p className="text-slate-600 text-sm mt-1">Government Girls Degree College<br />Mehrabpur, Sindh, Pakistan</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-xl flex-shrink-0">📧</div>
                <div>
                  <h3 className="font-bold text-slate-900">Email</h3>
                  <p className="text-slate-600 text-sm mt-1">info@ggdcmehrabpur.edu.pk</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-xl flex-shrink-0">📞</div>
                <div>
                  <h3 className="font-bold text-slate-900">Phone</h3>
                  <p className="text-slate-600 text-sm mt-1">0301-2304220</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-xl flex-shrink-0">🕐</div>
                <div>
                  <h3 className="font-bold text-slate-900">Office Hours</h3>
                  <p className="text-slate-600 text-sm mt-1">Monday – Saturday<br />8:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-blue-50 border border-blue-100 rounded-2xl p-6" id="grievance">
              <h3 className="font-bold text-slate-900 mb-2">Grievance Redressal</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Students and parents may submit grievances in writing to the Principal’s office. All complaints are handled confidentially and in accordance with government guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
