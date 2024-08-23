import windowImg from "@/assets/image/window.png";
import object04 from "@/assets/image/object-04.png";
import object05 from "@/assets/image/object-05.png";
import object06 from "@/assets/image/object-06.png";
import object07 from "@/assets/image/object-07.png";

import { Title } from "@/components";
const BrandStory = () => {
  return (
    <div className="h-full relative ">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <div className="py-[70px] md:py-[90px] lg:py-[120px] text-center">
            <Title
              title="Brand Story"
              subTitle="모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요."
              className="uppercase text-[#fcd32a] text-[24px] md:text-[35px] lg:text-[45px] font-bold text-center leading-[60px] tracking-[5px]"
              subClassName="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] text-[#fcd32a] font-normal leading-7 block mx-0 md:mx-[100px] lg:mx-[250px] mt-[15px] md:mt-[30px] lg:mt-[35px]"
            />
          </div>
        </div>
        <div className="pb-[90px] md:pb-[120px] lg:pb-[140px]">
          <div className="grid grid-cols-1 relative">
            <img src={windowImg} alt="" className="z-50" />
            <div className="absolute right-0 top-[50%] w-3/6 -translate-y-[50%] pr-[14px] z-50">
              <Title
                title="What Happened’s Brand story"
                subTitle="청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을 
봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다."
                className="uppercase text-[#222222] text-[10px] md:text-[14px] lg:text-[18px] font-[800] lg:leading-[60px]"
                subClassName="text-[7px] md:text-[10px] lg:text-[12px] text-[#222222] font-normal lg:leading-7 block m-auto my-[12px] lg:my-0 truncate md:whitespace-nowrap lg:whitespace-normal"
              />
              <button className="uppercase text-[8px] md:text-[12px] lg:text-[16px] border-black border-[2px] font-[800] px-[25px] lg:px-[30px] py-[8px] lg:py-[10px] md:mt-[15px] lg:mt-[30px]">
                see more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-[50%] -translate-y-[50%] translate-x-[35%] hidden lg:block">
        <img src={object04} alt="" />
      </div>
      <div className="absolute right-0 top-[60%] translate-x-[5%] hidden lg:block">
        <img src={object05} alt="" />
      </div>
      <div className="absolute left-0 top-[50%] hidden lg:block">
        <img src={object06} alt="" />
      </div>
      <div className="absolute left-[10%] top-[58%] hidden lg:block">
        <img src={object07} alt="" />
      </div>
    </div>
  );
};
export default BrandStory;
