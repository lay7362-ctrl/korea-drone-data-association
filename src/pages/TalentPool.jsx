import ApplicationForm from '../components/ApplicationForm'

const FIELDS = [
  { name: 'name', label: '이름', type: 'text', required: true },
  { name: 'phone', label: '연락처', type: 'tel', required: true, placeholder: '010-0000-0000' },
  { name: 'email', label: '이메일', type: 'email', required: true },
  { name: 'certificate', label: '보유 자격증', type: 'text', placeholder: '예: 무인멀티콥터 1종' },
  { name: 'career', label: '경력', type: 'text', placeholder: '예: 드론 촬영 3년' },
  { name: 'region', label: '활동 가능 지역', type: 'text', placeholder: '예: 수도권 전역' },
  {
    name: 'intro',
    label: '자기소개 및 특이사항',
    type: 'textarea',
    full: true,
    placeholder: '주요 활동 분야, 보유 장비 등을 작성해 주세요.',
  },
]

function TalentPool() {
  return (
    <>
      <div className="page-header">
        <h1>인력풀 가입</h1>
        <p>드론·데이터 전문 인력풀에 등록하고 다양한 활동 기회를 만나보세요.</p>
      </div>
      <ApplicationForm fields={FIELDS} submitLabel="인력풀 등록하기" />
    </>
  )
}

export default TalentPool
