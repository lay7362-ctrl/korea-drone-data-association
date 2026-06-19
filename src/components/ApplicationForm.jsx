import { useState } from 'react'

function buildInitialState(fields) {
  return fields.reduce((acc, field) => {
    acc[field.name] = field.type === 'select' ? field.options[0] : ''
    return acc
  }, {})
}

function ApplicationForm({ fields, submitLabel }) {
  const [values, setValues] = useState(() => buildInitialState(fields))
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (name) => (event) => {
    setValues((prev) => ({ ...prev, [name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="form-grid">
        {fields.map((field) => (
          <div
            key={field.name}
            className={`form-field ${field.full ? 'full' : ''}`}
          >
            <label htmlFor={field.name}>
              {field.label}
              {field.required ? ' *' : ''}
            </label>
            {field.type === 'select' && (
              <select
                id={field.name}
                value={values[field.name]}
                onChange={handleChange(field.name)}
                required={field.required}
              >
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
            {field.type === 'textarea' && (
              <textarea
                id={field.name}
                value={values[field.name]}
                onChange={handleChange(field.name)}
                required={field.required}
                placeholder={field.placeholder}
              />
            )}
            {(field.type === 'text' ||
              field.type === 'email' ||
              field.type === 'tel') && (
              <input
                id={field.name}
                type={field.type}
                value={values[field.name]}
                onChange={handleChange(field.name)}
                required={field.required}
                placeholder={field.placeholder}
              />
            )}
          </div>
        ))}
      </div>

      <div className="form-submit">
        <button type="submit" className="btn-primary">
          {submitLabel}
        </button>
        <span className="form-note">
          * 본 사이트는 데모 페이지로, 제출 내용은 서버에 저장되지 않습니다.
        </span>
      </div>

      {submitted && (
        <p className="form-success">
          신청서가 접수되었습니다. 담당자가 확인 후 입력하신 연락처로
          안내드리겠습니다.
        </p>
      )}
    </form>
  )
}

export default ApplicationForm
