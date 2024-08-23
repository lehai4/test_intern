import video from "@/assets/image/video.png";
import video04 from "@/assets/image/video-object-04.png";
import video08 from "@/assets/image/video-object-08.png";
import video09 from "@/assets/image/video-object-09.png";
import { Title } from "@/components";
const News = () => {
  return (
    <div className="h-full relative">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <div className="py-[70px] md:py-[90px] lg:py-[120px] text-center">
            <Title
              title="what happened"
              subTitle="How to create mobile-optimized videos in minutes. Not a designer, 
every team makes a lot of videos Can be trimmed. Take the first"
              className="uppercase text-[#110e03] text-[24px] md:text-[35px] lg:text-[45px] font-bold text-center leading-[60px] tracking-[5px]"
              subClassName="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] text-[#110e03] font-normal leading-7 block mx-0 md:mx-[100px] lg:mx-[250px] mt-[15px] md:mt-[30px] lg:mt-[35px]"
            />
            <button className="uppercase text-[8px] md:text-[12px] lg:text-[16px] border-black border-[2px] font-[800] px-[25px] lg:px-[30px] py-[8px] lg:py-[10px mt-[15px] md:mt-[15px] lg:mt-[30px]">
              see more
            </button>
          </div>
        </div>
        <div className="pb-[90px] md:pb-[120px] lg:pb-[140px]">
          <div className="flex justify-center items-center">
            <img src={video} alt="" className="block z-50" />
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-[20%] -translate-x-[50%] hidden lg:block">
        <img src={video04} alt="" />
      </div>
      <div className="absolute right-0 top-[65%] translate-x-[30%] hidden lg:block z-10">
        <img src={video08} alt="" />
      </div>
      <div className="absolute right-0 top-[45%] translate-x-[50%] hidden lg:block">
        <img src={video09} alt="" />
      </div>
    </div>
  );
};

export default News;
