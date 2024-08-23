import { topProduct } from "@/MockAPI";
import { Title } from "@/components";
const TopProduct = () => {
  return (
    <div className="w-full">
      <div className="container">
        <Title
          title="best product"
          subTitle="How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos Can be trimmed. Take the first"
          className="uppercase text-[#f96400] text-[28px] md:text-[40px] lg:text-[50px] font-bold text-center leading-[60px] tracking-[5px] pt-[60px] md:pt-[100px] lg:pt-[150px]"
          subClassName="text-[16px] lg:text-[20px] text-[#f96400] w-full md:w-[660px] lg:w-[668px] font-normal leading-[32px] block m-auto mt-[15px] md:mt-[30px] lg:mt-[50px] text-center"
        />
        <div className="mt-[74px] pb-[120px] lg:pb-[150px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-[95px]">
          {topProduct.map((product) => (
            <div className="w-full relative" key={product.id}>
              <img
                src={product.img}
                alt="product1"
                className="relative w-full"
              />
              <img
                src={product.markImg}
                alt="markProduct1"
                className="absolute left-0 top-0 -translate-y-[50%]"
              />
              <div className="top-product-content absolute bottom-0 left-[50%] translate-y-[50%] -translate-x-[50%] w-[280px]">
                <div className="h-full bg-white rounded-sm border-[2px] border-black py-[5px] px-[14px]">
                  <div className="flex flex-row items-center justify-between gap-5 h-full">
                    <span className="text-[#222] font-[900] text-[14px] ml-[5px]">
                      {product.title}
                    </span>
                    <img src={product.iconNumberProduct} alt="goIcon" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TopProduct;
