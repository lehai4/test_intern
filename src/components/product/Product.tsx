import { products } from "@/MockAPI";

const Product = () => {
  return (
    <div className="mt-[80px] mb-[80px] md:mb-[100px] lg:mb-[120px]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 -mx-[9px]">
          {products.map((product, i) => (
            <div
              className="px-[9px] mt-[15px] md:mt-[30px] lg:mt-[40px]"
              key={i}
            >
              <div className="h-full w-full">
                <div className="img-product">
                  <img src={product.img} alt="" className="w-full" />
                </div>
                <div className="product-content py-[16px]">
                  <h4 className="font-[700] text-[15px] mb-[18px]">
                    {product.title}
                  </h4>
                  <div className="flex flex-row items-center justify-between">
                    <span>{product.price}</span>
                    <div className="flex flex-row items-center gap-2">
                      {product.icon}
                      <span>{product.numberHeart}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-[30px] md:mt-[40px] lg:mt-[60px]">
          <button className="uppercase rounded text-[16px] md:text-[18px] lg:text-[22px] border-black border-[2px] font-[800] px-[34px] py-[12px]">
            see more
          </button>
        </div>
      </div>
    </div>
  );
};
export default Product;
