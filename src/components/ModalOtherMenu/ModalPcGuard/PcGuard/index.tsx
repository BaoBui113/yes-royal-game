import Image from 'next/image';

const PCGuardItem = ({
  src,
  children,
}: {
  src: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="max-w-[234px]">
      <div className="relative w-full h-[96px]">
        <Image src={src} fill alt="pc01" />
      </div>
      {/* <p className="text-[#948477] text-center my-[14px]">
        V3 Lite는 악성코드 진단 및 치료는 물 <br />
        론, 의심 프로그램 실행 차단/웹 보안 <br /> 등 강력한 PC보안을 제공하는{' '}
        <br /> AhnLab의 대표 무료백신입니다.
      </p> */}
      {children}
    </div>
  );
};

export default function PCGuard() {
  return (
    <div className="text-sm text-white">
      <h3 className="my-[14px]">PC 안녕하세요</h3>
      <span>
        최근들어 해킹등으로 인한 개인정보 유출 사례가 급증하고 있어 당사에서는
        본 사이트를 이용하시는 회원님의 정보보호를 위하여 <br /> 시스템 및
        소프트웨어를 최고 수준의 보안 설비를 갖추어 서비스를 제공하고 있습니다.{' '}
        <br />
        그러나 농협, 현대카드, 네이트 등의 해킹 사례에서 볼 수 있듯 최고 수준의
        설비를 갖추어도 서비스를 이용하는 회원님의 PC가 <br /> 바이러스에
        감염되었을 경우 개인정보를 보호하기가 매우 어려운 실정입니다. <br />{' '}
        이에 당사에서는 공인된 바이러스 백신 프로그램을 설치할것을 회원 여러분께
        권유드리는 바입니다.
      </span>
      <div className="bg-[#4c3023] py-[5px] px-[10px] text-[#fdcc83] border-l-[5px] border-l-[#fdcc83] border-solid w-full my-[14px]">
        백신프로그램
      </div>
      <div className="flex gap-12 mb-12">
        <PCGuardItem src="/assets/image/my-page/bt_pc01.gif">
          <p className="text-[#948477] text-center my-[14px]">
            V3 Lite는 악성코드 진단 및 치료는 물 <br />
            론, 의심 프로그램 실행 차단/웹 보안 <br /> 등 강력한 PC보안을
            제공하는 <br /> AhnLab의 대표 무료백신입니다.
          </p>
        </PCGuardItem>

        <PCGuardItem src="/assets/image/my-page/bt_pc01.gif">
          <p className="text-[#948477] text-center my-[14px]">
            V3 Lite는 악성코드 진단 및 치료는 물 <br />
            론, 의심 프로그램 실행 차단/웹 보안 <br /> 등 강력한 PC보안을
            제공하는 <br /> AhnLab의 대표 무료백신입니다.
          </p>
        </PCGuardItem>
      </div>
      <PCGuardItem src="/assets/image/my-page/bt_pc01.gif">
        <p className="text-[#948477] text-center my-[14px]">
          V3 Lite는 악성코드 진단 및 치료는 물 <br />
          론, 의심 프로그램 실행 차단/웹 보안 <br /> 등 강력한 PC보안을 제공하는{' '}
          <br /> AhnLab의 대표 무료백신입니다.
        </p>
      </PCGuardItem>
    </div>
  );
}
