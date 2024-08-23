import { Title } from "@/components";

const Introduction = () => {
  return (
    <div className="h-full">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 -mx-[9px]">
          <div className="flex flex-col items-center justify-center">
            <div className="py-[100px] md:py-[120px] lg:py-[150px]">
              <Title
                title="what happened"
                subTitle="How to create mobile-optimized videos in minutes. Not a designer, 
every team makes a lot of videos Can be trimmed. Take the first 
step to your brand's success. How to create                                        
mobile-optimized videos in minutes."
                className="uppercase text-white text-[28px] md:text-[40px] lg:text-[50px] font-bold text-center md:text-center lg:text-left leading-[60px] tracking-[5px] "
                subClassName="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-white text-center md:text-center lg:text-left font-normal leading-7 block m-auto mt-[15px] md:mt-[30px] lg:mt-[35px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
