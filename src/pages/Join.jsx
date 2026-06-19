import ApplicationForm from '../components/ApplicationForm'

const FIELDS = [
  { name: 'name', label: '이름', type: 'text', required: true },
  { name: 'phone', label: '연락처', type: 'tel', required: true, placeholder: '010-0000-0000' },
  { name: 'email', label: '이메일', type: 'email', required: true },
  {
    name: 'memberType',
    label: '가입 유형',
    type: 'select',
    options: ['개인회원', '기관회원', '학생회원'],
  },
  { name: 'organization', label: '소속(기관/학교)', type: 'text' },
  {
    name: 'message',
    label: '가입 사유 및 하고 싶은 말',
    type: 'textarea',
    full: true,
    placeholder: '협회 가입 사유를 간단히 작성해 주세요.',
  },
]

function Join() {
  return (
    <>
      <div className="page-header">
        <h1>협회가입</h1>
        <p>한국드론앤데이터협회와 함께할 회원을 모십니다.</p>
      </div>
      <ApplicationForm fields={FIELDS} submitLabel="가입 신청하기" />
    </>
  )
}

export default Join
