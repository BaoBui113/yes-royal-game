'use client';
import React from 'react';

export const SecretAccountItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <div className="bg-[#4c3023] py-[5px] px-[10px] text-[#fdcc83] border-l-[5px] border-l-[#fdcc83] border-solid w-full my-4">
        {/* 1인전용계좌 */}
        {title}
      </div>
      {children}
    </>
  );
};
export default function SecretAccount() {
  return (
    <>
      <p className="text-white text-sm">
        안녕하세요! 전세계 최대 온라인 카지노 회사입니다. <br /> 현재 우리
        카지노에서는 고객님의 안전거래를 취우선으로 보호하기 위하여 일반 타
        온라인카지노 회사에서 시행하는 <br /> [홈페이지상에 입금계좌를 오픈하는
        방식]이 아닌 [SMS문자서비스 방식을 통한 소수그룹 전용계좌] 발급서비스를
        모든 회원에게 <br /> 무료로 제공하고 있습니다.
      </p>
      <SecretAccountItem title="1인전용계좌">
        <span className="text-xs text-[#948477]">
          {`이계좌는 현재 소수그룹별로 제공되는 전용계좌와 달리 고객님 1인만이 전용으로 사용하시는 계좌입니다.`}
          <br />
          {`따라서 고객님 본인께서 [1인전용계좌] 사용에 대한 사실을 외부에 언급하지 않는 이상 절대 통장거래정보가 노출될 여지가 없어 100% 안전하게 통장거래를 할 수 있습니다.`}
          <br />
          {`< 이용 권장대상 >`}
          <br />
          {`-개인이용자로써 1회 평균 100만원 이상의 씨드머니를 입금하는 고객`}
          <br />
          {`-특수직업 종사자로 통장거래정보 노출시 사회적제약이 큰고객`}
        </span>
      </SecretAccountItem>
      <SecretAccountItem title="지인그룹 전용계좌">
        <span className="text-xs text-[#948477]">
          {`[지인그룹 전용계좌]란 현재 2인이상 함께 우리카지노를 이용중인 회원분 또는 이용을 원하시는 비 회원분들 중에서 본일을 포함하여 믿을만한 몇몇 지인만이 함께 사용하실 수 있는 그룹용 보안계좌 입니다.
이계좌는 현재 제공받고 계신 [소수그룹 전용계좌]와 달리 본인과 지인들 이외에 아무런 관련이 없는 회원들의 통장거래가 개입될 여지가 없으므로 99% 안전하게 통장거래를 하실 수 있습니다. 또한, 한번 [지인그룹 전용계좌]를 발급받은 지인그룹은 이용자를 추가하는 경우에도 별도의 비용이 소요되지 않을 뿐 아니라 지인그룹 인원이 10명 이상일 경우에는 카지노의 파트너가 될 수 있는 특전과 함께 다양한 부가혜택을 누리실 수 있습니다.
< 이용 권장대상 >`}
          <br />
          {`- 주로 친구/선후배와 함께 카지노게임을 즐기는 고객`}
          <br />
          {`- [추천인제도]를 통해 우리카지노를 적극적으로 소개하고 유치하고자 하는 고객`}
        </span>
      </SecretAccountItem>
      <SecretAccountItem title="발급안내">
        <span className="text-xs text-[#948477]">
          {`   [1인전용계좌] 및 [지인그룹 전용계좌]의 발급비용 및 자세한 세부사항은
          24시간 고객만족센터 또는 홈페이지 1대1 실시간 상담을 통해 문의해
          주시면 친절히 상담해 드리겠습니다.`}
        </span>
      </SecretAccountItem>
    </>
  );
}
