import { Link } from 'react-router-dom'

const steps = [
  { num: '01', title: 'Get the admission form', desc: 'Collect the admission form and prospectus from the college admission office.' },
  { num: '02', title: 'Submit form & documents', desc: 'Fill the form carefully and submit it with all required documents before the deadline.' },
  { num: '03', title: 'Merit list', desc: 'Admission is granted on merit according to the policy of the College Education Department.' },
  { num: '04', title: 'Fee payment', desc: 'Selected candidates must deposit the prescribed fee within the given deadline.' },
  { num: '05', title: 'Enrollment', desc: 'Complete enrollment formalities and start attending classes as per the academic calendar.' },
]

const documents = [
  'Matriculation Certificate / Marksheet (attested)',
  'Character Certificate from last institution',
  'CNIC / B-Form of student and father/guardian',
  'Four recent passport-size photographs',
  'Migration Certificate (if applicable)',
  'Domicile Certificate',
]

export default function Admissions() {
  return (
    <>
      <section className="bg-white border-b border-slate-100">
        <div className="container-custom py-16 md:py-20">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Admissions</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">How to Apply</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Follow these simple steps to apply for Intermediate or Associate Degree programs at GGDC Mehrabpur.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Five Steps to Enrolment</h2>
          <div className="space-y-5 max-w-3xl">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-5 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                  {s.num}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{s.title}</h3>
                  <p className="text-slate-600 mt-1 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Required Documents</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {documents.map((doc) => (
              <div key={doc} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                <span className="text-blue-600 mt-0.5 font-bold">✓</span>
                <span className="text-sm text-slate-700">{doc}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition shadow-lg shadow-blue-600/25">
              Contact Admission Office
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
