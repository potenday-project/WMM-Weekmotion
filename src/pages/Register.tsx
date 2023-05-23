import { useState } from 'react';

import weekmotion from '../assets/images/weekmotion.svg';

export default function Register() {
  const [sign, setSign] = useState<boolean>(false);
  return (
    <section className="bg-mono-100 h-screen flex flex-col items-center">
      {sign ? (
        <>
          <article className="form-control w-1/2 py-4">
            <h1 className="text-2xl text-mono-700 font-bold">회원가입</h1>
            <div>
              <label htmlFor="id" className="label">
                <span className="label-text">ID</span>
              </label>
              <input
                type="text"
                name="id"
                placeholder="아이디를 입력하세요."
                required
                className="input input-bordered w-1/2 bg-mono-100 text-mono-700"
              />
              <button className="btn ml-4 rounded-full  text-mono-100 bg-emotion-yellow border-emotion-yellow">
                중복확인
              </button>
            </div>
            <label htmlFor="pw" className="label">
              <span className="label-text">PASSWORD</span>
            </label>
            <input
              type="password"
              name="pw"
              placeholder="비밀번호를 입력하세요."
              required
              className="input input-bordered bg-mono-100 text-mono-700"
            />
            <label htmlFor="verify-pw" className="label">
              <span className="label-text">PASSWORD</span>
            </label>
            <input
              type="password"
              name="verify-pw"
              placeholder="비밀번호를 다시 한번 입력하세요."
              required
              className="input input-bordered bg-mono-100 text-mono-700"
            />
            <label htmlFor="name" className="label">
              <span className="label-text">이름</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="이름를 입력하세요."
              required
              className="input input-bordered bg-mono-100 text-mono-700"
            />
            <label htmlFor="tel" className="label">
              <span className="label-text">휴대폰 번호</span>
            </label>
            <input
              type="tel"
              name="tel"
              placeholder="휴대폰 번호를 숫자만 입력해주세요."
              required
              className="input input-bordered bg-mono-100 text-mono-700"
            />
          </article>
          <div className="flex flex-col gap-4 py-4 w-1/2">
            <button className="btn btn-wide w-full rounded-full bg-emotion-yellow hover:bg-emotion-lightYellow border-emotion-yellow hover:border-emotion-lightYellow text-mono-100">
              가입하기
            </button>
            <button
              onClick={() => setSign(!sign)}
              className="btn btn-wide w-full rounded-full bg-mono-100 hover:bg-mono-100 border-emotion-yellow hover:border-emotion-yellow text-emotion-yellow"
            >
              돌아가기
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="py-4">
            <img src={weekmotion} />
          </div>
          <article className="form-control w-1/2">
            <h1 className="text-2xl text-mono-700 font-bold">로그인</h1>
            <label htmlFor="id" className="label">
              <span className="label-text">ID</span>
            </label>
            <input
              type="text"
              name="id"
              placeholder="아이디를 입력하세요."
              required
              className="input input-bordered bg-mono-100 text-mono-700"
            />
            <label htmlFor="pw" className="label">
              <span className="label-text">PASSWORD</span>
            </label>
            <input
              type="password"
              name="pw"
              placeholder="비밀번호를 입력하세요."
              required
              className="input input-bordered bg-mono-100 text-mono-700"
            />
          </article>
          <div className="flex flex-col gap-4 py-4 w-1/2">
            <button className="btn btn-wide w-full rounded-full bg-emotion-yellow hover:bg-emotion-lightYellow border-emotion-yellow hover:border-emotion-lightYellow text-mono-100">
              로그인
            </button>
            <button
              onClick={() => setSign(!sign)}
              className="btn btn-wide w-full rounded-full bg-mono-100 hover:bg-mono-100 border-emotion-yellow hover:border-emotion-yellow text-emotion-yellow"
            >
              회원가입
            </button>
          </div>
        </>
      )}
    </section>
  );
}