import ApplicationForm from '../components/ApplicationForm'

const FIELDS = [
  { name: 'name', label: '이름', type: 'text', required: true },
  { name: 'phone', label: '연락처', type: 'tel', required: true, placeholder: '010-0000-0000' },
  { name: 'email', label: '이메일', type: 'email', required: true },
  {
    name: 'course',
    label: '신청 과정',
    type: 'select',
    options: [
      '초경량무인비행장치 무인멀티콥터 1종',
      '초경량무인비행장치 무인멀티콥터 2종',
      '초경량무인비행장치 무인멀티콥터 3종',
      '초경량무인비행장치 무인멀티콥터 4종',
      '드론 정비 교육과정',
    ],
  },
  { name: 'region', label: '희망 교육 지역', type: 'text', placeholder: '예: 서울, 부산' },
  {
    name: 'note',
    label: '비고',
    type: 'textarea',
    full: true,
    placeholder: '희망 교육 일정이나 문의사항을 작성해 주세요.',
  },
]

function DroneEducation() {
  return (
    <>
      <div className="page-header">
        <h1>드론자격증교육신청</h1>
        <p>드론 자격증 취득을 위한 전문 교육과정을 신청하세요.</p>
      </div>
      <ApplicationForm fields={FIELDS} submitLabel="교육 신청하기" />
    </>
  )
}

export default DroneEducation
