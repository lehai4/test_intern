import { FooterTop, IconFooter } from "@/MockAPI";
import { Divider, Space, Typography } from "antd";

const Footer = () => {
  return (
    <div className="px-[30px] sm:px-[60px] md:px-[80px] lg:px-[100px] pb-[50px] sm:pb-[70px] md:pb-[90px] lg:pb-[115px] pt-[40px] sm:pt-[50px] md:pt-[60px] lg:pt-[80px]">
      <div className="container">
        <Divider />
        <div className="footer-top">
          <div className="flex flex-col lg:flex-row item-center justify-between gap-x-16 gap-y-8">
            <div className="flex flex-col items-start gap-y-5">
              <h3 className="font-[600] leading-[2.86rem]">what happened</h3>
              <div className="text-[#333] text-[12px] tracking-tighter">
                [공지] 개인 정보 처리 방침 변경 사전 안내
              </div>
              <div className="text-[#333] text-[12px] tracking-tighter">
                [공지] iOS 10 이하 버전 지원 중단 안내
              </div>
              <div className="text-[#333] text-[12px] tracking-tighter">
                [공지] 29CM 강남 스토어 영업 종료
              </div>
              <div className="text-[#333] text-[12px] tracking-tighter">
                [공지] 개인 정보 처리 방침 변경 사전 안내
              </div>
              <div className="text-[#333] text-[12px] tracking-tighter">
                버전 지원 중단 안내 [공지] 개인 정보 처리 방침 변경 사전 안내
              </div>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between gap-5 sm:gap-8 md:gap-10 lg:gap-12">
              {FooterTop.map((footer) => (
                <div
                  className="flex flex-col items-start gap-y-5"
                  key={footer.id}
                >
                  <h3 className="font-[600] leading-[2.86rem]">
                    {footer.title}
                  </h3>
                  <div className="text-[#333] text-[12px] tracking-tighter">
                    {footer.desc1}
                  </div>
                  <div className="text-[#333] text-[12px] tracking-tighter">
                    {footer.desc2}
                  </div>
                  <div className="text-[#333] text-[12px] tracking-tighter">
                    {footer.desc3}
                  </div>
                  <div className="text-[#333] text-[12px] tracking-tighter">
                    {footer.desc4}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Divider />
        <div className="footer-bottom">
          <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row justify-between items-start md:items-start lg:items-center gap-y-5">
            <Space direction="vertical">
              <Typography.Text className="text-[#a9a9a9]">
                © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동
                ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what
                happened.co.kr
              </Typography.Text>
              <Typography.Text className="text-[#a9a9a9]">
                서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l
                서비스 이용약관 l 개인정보처리방침
              </Typography.Text>
            </Space>
            <Space direction="horizontal">
              {IconFooter.map((icon) => (
                <img key={icon.id} src={icon.icon} className="cursor-pointer" />
              ))}
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
