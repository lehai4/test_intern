import Wrapper from "@/components/Wrapper";
import { useLocation } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

type AuthType = "login" | "register" | string;

const AuthView: Record<AuthType, JSX.Element> = {
  login: <Login />,
  register: <Register />,
};
const Authentication = () => {
  const path = useLocation();

  return (
    <Wrapper className="authentication h-full">
      <Wrapper className={`authenform mt-[100px]`}>
        <Wrapper className="container">
          {AuthView[`${path.pathname.slice(1)}`]}
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default Authentication;
