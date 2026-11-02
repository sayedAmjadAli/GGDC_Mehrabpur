const teachingStaff = [
  { name: 'Ikhtiar Hussain Sahito', role: 'Principal', dept: 'Associate Professor - Commerce', img: '/images/staff/principal.jpg' },
  { name: 'Ghulam Batool Jokhio', role: 'Associate Professor', dept: 'Statistics', img: '/images/staff/staff2.jpg' },
  { name: 'Naushad Begum', role: 'Assistant Professor', dept: 'Chemistry', img: '/images/staff/staff3.jpg' },
  { name: 'Shabana Mumtaz', role: 'Assistant Professor', dept: 'Education', img: '/images/staff/staff4.jpg' },
  { name: 'Janib Naz Ghori', role: 'Assistant Professor', dept: 'Commerce', img: '/images/staff/staff5.jpg' },
  { name: 'Shazia Jokhio', role: 'Assistant Professor', dept: 'English', img: '/images/staff/staff6.jpg' },
  { name: 'Farzana Qurban', role: 'Assistant Professor', dept: 'Commerce', img: '/images/staff/staff7.jpg' },
  { name: 'Lubna Akbar', role: 'Assistant Professor', dept: 'Zoology', img: '/images/staff/staff8.jpg' },
  { name: 'Huma Siddique', role: 'Lecturer', dept: 'Education', img: '/images/staff/staff9.jpg' },
  { name: 'Razia Bibi', role: 'Lecturer', dept: 'Urdu', img: '/images/staff/staff10.jpg' },
  { name: 'Aqsa Javaid', role: 'Lecturer', dept: 'Pakistan Study', img: '/images/staff/staff11.jpg' },
  { name: 'Qamar Abbas', role: 'Lecturer', dept: 'Physics', img: '/images/staff/staff12.jpg' },
  { name: 'Saba Shahid', role: 'Lecturer', dept: 'Mathematics', img: '/images/staff/staff13.jpg' },
  { name: 'Naeem Ahmed', role: 'Lecturer', dept: 'Physics', img: '/images/staff/staff14.jpg' },
  { name: 'Aqsa Rafique', role: 'Lecturer', dept: 'Sindhi', img: '/images/staff/staff15.jpg' },
  { name: 'Moin Ahmed', role: 'Lecturer', dept: 'Zoology', img: '/images/staff/staff16.jpg' },
  { name: 'Tahir Hussain', role: 'Lecturer', dept: 'Mathematics', img: '/images/staff/staff17.jpg' },
  { name: 'Maheen Bhatti', role: 'Lecturer', dept: 'Mathematics', img: '/images/staff/staff18.jpg' },
  { name: 'Nagma Chandio', role: 'Librarian', dept: 'Library', img: '/images/staff/staff19.jpg' },
]

const nonTeachingStaff = [
  { name: 'Ghulam Shabir', role: 'Assistant', img: '/images/staff/nt1.jpg' },
  { name: 'Ali Sher', role: 'Assistant', img: '/images/staff/nt2.jpg' },
  { name: 'Sayed Amjad Ali Shah', role: 'Computer Operator', img: '/images/staff/nt3.jpg' },
  { name: 'Zayyab Raza', role: 'Junior Clerk', img: '/images/staff/nt4.jpg' },
  { name: 'Mehar Ali', role: 'Lab Assistant', img: '/images/staff/nt5.jpg' },
  { name: 'Muzafar Ali', role: 'Lab Assistant', img: '/images/staff/nt6.jpg' },
  { name: 'Qadir Solangi', role: 'Naib Qasid', img: '/images/staff/nt7.jpg' },
]

function StaffCard({ person }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center hover:shadow-md transition">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-blue-50 border-4 border-white shadow">
        <img
          src={person.img}
          alt={person.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-3xl text-blue-300">👤</div>'
          }}
        />
      </div>
      <h3 className="font-bold text-slate-900 text-sm leading-snug">{person.name}</h3>
      <p className="text-sm text-blue-600 font-medium mt-1">{person.role}</p>
      {person.dept && <p className="text-xs text-slate-500 mt-0.5">{person.dept}</p>}
    </div>
  )
}

export default function Staff() {
  return (
    <>
      <section className="bg-white border-b border-slate-100">
        <div className="container-custom py-16 md:py-20">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">People</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">Staff Directory</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Meet our dedicated teaching and non-teaching staff committed to student success.
          </p>
        </div>
      </section>

      {/* Teaching Staff */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Teaching Staff</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {teachingStaff.map((s) => (
              <StaffCard key={s.name} person={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Non-Teaching Staff */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Non-Teaching Staff</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
            {nonTeachingStaff.map((s) => (
              <StaffCard key={s.name} person={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
