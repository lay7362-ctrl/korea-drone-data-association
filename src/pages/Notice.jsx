const NOTICES = [
  {
    id: 1,
    badge: '공지',
    title: '2026년 드론 자격증 교육과정 일정 안내',
    date: '2026-06-15',
  },
  {
    id: 2,
    badge: '안내',
    title: '협회 인력풀 등록 회원 대상 현장 매칭 프로그램 시행',
    date: '2026-06-10',
  },
  {
    id: 3,
    badge: '공지',
    title: '2026년 정기 회원 가입 신청 접수 시작',
    date: '2026-06-02',
  },
  {
    id: 4,
    badge: '안내',
    title: '드론 데이터 활용 세미나 개최 안내',
    date: '2026-05-20',
  },
]

function Notice() {
  return (
    <>
      <div className="page-header">
        <h1>공지사항</h1>
        <p>한국드론앤데이터협회의 새로운 소식을 안내드립니다.</p>
      </div>

      <div className="card notice-list">
        {NOTICES.map((notice) => (
          <div key={notice.id} className="notice-item">
            <span className="notice-item__badge">{notice.badge}</span>
            <span className="notice-item__title">{notice.title}</span>
            <span className="notice-item__date">{notice.date}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default Notice
