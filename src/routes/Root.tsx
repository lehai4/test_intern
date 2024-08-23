import { Footer, Header, Wrapper } from "@/components";
import { FloatButton } from "antd";
import { Outlet } from "react-router-dom";

const RootDefault = () => (
  <Wrapper className="layer layer-web">
    <Header />
    <main className="layer layer-swapper">
      <Outlet />
    </main>
    <Footer />
    <FloatButton.BackTop style={{ marginRight: "15px" }} />
  </Wrapper>
);

export default RootDefault;
