const feeData = [
  { program: 'Intermediate (Pre-Medical / Pre-Engineering / CS / Humanities)', admission: 'As per Govt. policy', annual: 'As per Govt. policy' },
  { program: 'Associate Degree (Arts / Science / Commerce)', admission: 'As per Govt. policy', annual: 'As per Govt. policy' },
]

export default function Fees() {
  return (
    <>
      <section className="bg-white border-b border-slate-100">
        <div className="container-custom py-16 md:py-20">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Fees</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">Fee Structure</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Transparent and affordable fee structure as prescribed by the College Education Department, Government of Sindh.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="px-6 py-4 font-semibold">Program</th>
                    <th className="px-6 py-4 font-semibold">Admission Fee</th>
                    <th className="px-6 py-4 font-semibold">Annual / Semester Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {feeData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-6 py-4 font-medium text-slate-900">{row.program}</td>
                      <td className="px-6 py-4 text-slate-600">{row.admission}</td>
                      <td className="px-6 py-4 text-slate-600">{row.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <h3 className="font-bold text-slate-900 mb-2">Important Note</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Exact fee amounts are notified by the College Education Department from time to time. Please contact the college office or check the latest notices for the current academic year’s fee schedule. Fee concessions and scholarships may be available for deserving students as per government policy.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
