import { Link } from 'react-router-dom'

const MENU_ITEMS = [
  {
    to: '/notice',
    title: '공지사항',
    desc: '협회의 주요 소식과 안내사항을 확인하세요.',
  },
  {
    to: '/join',
    title: '협회가입',
    desc: '한국드론앤데이터협회의 회원으로 가입할 수 있습니다.',
  },
  {
    to: '/drone-education',
    title: '드론자격증교육신청',
    desc: '드론 자격증 취득을 위한 교육과정을 신청하세요.',
  },
  {
    to: '/talent-pool',
    title: '인력풀 가입',
    desc: '드론·데이터 전문 인력풀에 등록해 활동 기회를 넓히세요.',
  },
]

function Home() {
  return (
    <>
      <section className="hero">
        <h2>드론과 데이터로 미래 산업을 이끌어갑니다</h2>
        <p>
          한국드론앤데이터협회는 드론 조종 인력 양성, 자격증 교육, 데이터 기반
          신산업 발굴을 통해 회원과 산업의 동반 성장을 지원합니다.
        </p>
      </section>

      <div className="menu-grid">
        {MENU_ITEMS.map((item) => (
          <Link key={item.to} to={item.to} className="menu-card">
            <p className="menu-card__title">{item.title}</p>
            <p className="menu-card__desc">{item.desc}</p>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Home
