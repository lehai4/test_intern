import { IconLogin } from "@/MockAPI";
import {
  Button,
  Divider,
  Form,
  Input,
  Space,
  Typography,
  type FormProps,
} from "antd";
import { Link } from "react-router-dom";

type FieldType = {
  email?: string;
  password?: string;
};

const Login = () => {
  const [form] = Form.useForm();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    //signin
    console.log(values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="w-full sm:w-3/5 md:w-3/5 lg:w-[36%] flex flex-col justify-center items-center">
        <h1 className={`text-[35px] font-[800] pt-8 mb-[30px] text-[#0565bb]`}>
          WelCome!
        </h1>
        <Divider style={{ background: "#222", border: "1px solid" }} />
        <Form
          form={form}
          name="basic"
          layout="vertical"
          labelCol={{ span: 8 }}
          style={{ width: "100%", margin: "12px 0 20px" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            name="email"
            rules={[
              { required: true },
              {
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Email format is incorrect",
              },
              { message: "Please input your email!" },
            ]}
          >
            <Input size="large" className="rounded-none" placeholder="Email" />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[
              { required: true },
              {
                pattern: /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/,
                message:
                  "Password has at least one number, one letter and one special character",
              },
              {
                message: "Please input your password",
              },
            ]}
          >
            <Input.Password
              size="large"
              className="rounded-none"
              id="basic-password"
              aria-current
              aria-required
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item className="w-full mt-8">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full rounded-none bg-[#0565bb] font-[500]"
            >
              Log In
            </Button>
          </Form.Item>
          <div className="flex flex-row mt-[60px] justify-center">
            <Typography.Text strong className="font-[600]">
              SNS 계정으로 로그인
            </Typography.Text>
          </div>

          <div className="my-[45px]">
            <div className="flex flex-row justify-between items-center ">
              {IconLogin.map((_) => (
                <img
                  key={_.id}
                  src={_.icon}
                  alt={`${_.id}`}
                  className="cursor-pointer"
                />
              ))}
            </div>
          </div>

          <Form.Item className="w-full">
            <Button size="large" className="w-full rounded-none font-[600]">
              계정이 없으신가요? 간편가입하기
            </Button>
          </Form.Item>

          <Space className="flex flex-row mb-[30px] gap-10 justify-center">
            <Link to="/login" className="text-[#0565bb]">
              Forget password?
            </Link>
            <Link
              to="/register"
              className="text-[#0565bb] underline hover:underline italic"
            >
              Don't have an account?
            </Link>
          </Space>
        </Form>
      </div>
    </div>
  );
};

export default Login;
