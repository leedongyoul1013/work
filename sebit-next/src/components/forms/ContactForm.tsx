'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name:    z.string().min(1, '이름을 입력해 주세요'),
  company: z.string().optional(),
  phone:   z.string().min(1, '연락처를 입력해 주세요'),
  email:   z.string().email('올바른 이메일 형식이 아닙니다').optional().or(z.literal('')),
  type:    z.string(),
  message: z.string().min(5, '문의 내용을 5자 이상 입력해 주세요'),
});

type FormData = z.infer<typeof schema>;

const inputStyle: React.CSSProperties = {
  background:  'rgba(255,255,255,0.04)',
  border:      '1px solid rgba(255,255,255,0.08)',
  borderRadius: '8px',
  padding:     '12px 16px',
  color:       '#F0F5FF',
  fontSize:    '0.9rem',
  width:       '100%',
  outline:     'none',
  fontFamily:  'var(--font-body)',
  transition:  'border-color 0.2s',
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { type: 'SI / 개발 외주' },
  });

  const onSubmit = async (data: FormData) => {
    // TODO: 실제 제출 로직 (API route or email service)
    console.log('문의 데이터:', data);
    await new Promise((r) => setTimeout(r, 800));
    reset();
  };

  if (isSubmitSuccessful) {
    return (
      <div
        className="card-base card-accent-top p-10 flex flex-col items-center justify-center text-center"
        style={{ minHeight: '400px' }}
      >
        <div className="text-4xl mb-4">✅</div>
        <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
          문의가 접수되었습니다
        </h3>
        <p className="text-sm" style={{ color: '#C0CEEA' }}>
          1~2 영업일 내로 담당자가 연락드립니다.
        </p>
      </div>
    );
  }

  return (
    <div className="card-base card-accent-top p-10">
      <h3 className="font-bold text-xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
        프로젝트 문의하기
      </h3>
      <p className="text-sm mb-7" style={{ color: '#C0CEEA' }}>
        간단한 정보를 남겨주시면 1~2 영업일 내로 연락드립니다.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold mb-1.5" style={{ color: '#C0CEEA' }}>이름 *</label>
            <input
              {...register('name')}
              type="text"
              placeholder="홍길동"
              style={inputStyle}
              onFocus={e => (e.target.style.borderColor = '#00C9E0')}
              onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
            />
            {errors.name && <p className="text-xs mt-1" style={{ color: '#F87171' }}>{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1.5" style={{ color: '#C0CEEA' }}>회사명</label>
            <input
              {...register('company')}
              type="text"
              placeholder="(주)회사명"
              style={inputStyle}
              onFocus={e => (e.target.style.borderColor = '#00C9E0')}
              onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold mb-1.5" style={{ color: '#C0CEEA' }}>연락처 *</label>
            <input
              {...register('phone')}
              type="tel"
              placeholder="010-0000-0000"
              style={inputStyle}
              onFocus={e => (e.target.style.borderColor = '#00C9E0')}
              onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
            />
            {errors.phone && <p className="text-xs mt-1" style={{ color: '#F87171' }}>{errors.phone.message}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1.5" style={{ color: '#C0CEEA' }}>이메일</label>
            <input
              {...register('email')}
              type="email"
              placeholder="hello@company.com"
              style={inputStyle}
              onFocus={e => (e.target.style.borderColor = '#00C9E0')}
              onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
            />
            {errors.email && <p className="text-xs mt-1" style={{ color: '#F87171' }}>{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: '#C0CEEA' }}>문의 유형</label>
          <select
            {...register('type')}
            style={{ ...inputStyle, color: '#C0CEEA' }}
            onFocus={e => (e.target.style.borderColor = '#00C9E0')}
            onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
          >
            <option>SI / 개발 외주</option>
            <option>GIS 솔루션</option>
            <option>SmartGeoKit</option>
            <option>IT 컨설팅</option>
            <option>기타</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: '#C0CEEA' }}>문의 내용 *</label>
          <textarea
            {...register('message')}
            rows={4}
            placeholder="프로젝트 개요, 일정, 예산 등 간략히 작성해 주세요."
            style={{ ...inputStyle, resize: 'none', lineHeight: '1.6' }}
            onFocus={e => (e.target.style.borderColor = '#00C9E0')}
            onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
          />
          {errors.message && <p className="text-xs mt-1" style={{ color: '#F87171' }}>{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 rounded-lg font-bold tracking-wider transition-all duration-200"
          style={{
            background:  isSubmitting ? '#00a0b2' : '#00C9E0',
            color:       '#060D1F',
            fontSize:    '0.95rem',
            boxShadow:   '0 0 24px rgba(0,201,224,0.25)',
            cursor:      isSubmitting ? 'not-allowed' : 'pointer',
          }}
        >
          {isSubmitting ? '전송 중...' : '문의 보내기 ✦'}
        </button>
      </form>
    </div>
  );
}
