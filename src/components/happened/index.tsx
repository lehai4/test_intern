import { news } from "@/MockAPI";
import newsImg01 from "@/assets/icon/news-img-01.png";
import newsObject04 from "@/assets/icon/news-object-04.png";
import newsObject05 from "@/assets/icon/news-object-05.png";
import newsObject03 from "@/assets/image/news-object-03.png";
import { Title } from "@/components";

const Happened = () => {
  return (
    <div className="h-full">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <div className="py-[70px] md:py-[90px] lg:py-[120px] text-center">
            <Title
              title="Happened’s issue"
              subTitle="모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요."
              className="uppercase text-[#110e03] text-[24px] md:text-[35px] lg:text-[45px] font-bold text-center leading-[60px] tracking-[5px]"
              subClassName="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] text-[#110e03] font-normal leading-7 block mx-0 md:mx-[100px] lg:mx-[250px] mt-[15px] md:mt-[30px] lg:mt-[35px]"
            />
            <button className="uppercase text-[8px] md:text-[12px] lg:text-[16px] border-black border-[2px] font-[800] px-[25px] lg:px-[30px] py-[8px] lg:py-[10px mt-[15px] md:mt-[15px] lg:mt-[30px]">
              see more
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 relative"></div>
      </div>
      <div className="pb-[90px] md:pb-[120px] lg:pb-[140px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="bg-[#ff5500] relative justify-center items-center flex-col gap-y-[40px] hidden sm:hidden md:hidden lg:flex">
            <h2 className="text-[#110e03] uppercase font-[800] leading-[1.04rem] text-[35px]">
              whpn issue
            </h2>
            <img src={newsImg01} alt="" />
            <img
              src={newsObject03}
              alt=""
              className="absolute bottom-0 right-0 translate-y-[50%]"
            />
          </div>
          {news.map((ns, i) => (
            <div key={i} className="flex flex-col relative">
              <div
                style={{ backgroundColor: `${ns.colorTitleNews}` }}
                className="h-[50px] text-white flex justify-center items-center font-[800] text-[18px]"
              >
                {ns.titleNews}
              </div>
              <div className="news-img">
                <img src={ns.img} alt="" className="w-full" />
              </div>
              {ns.rateStatus ? (
                <div className="absolute left-3 top-0 -translate-y-[50%]">
                  <img src={newsObject04} alt="" />
                </div>
              ) : (
                <></>
              )}
              {i == 2 && (
                <div className="absolute right-0 bottom-0 translate-y-[50%] translate-x-[20%] z-10">
                  <img src={newsObject05} alt="" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Happened;
