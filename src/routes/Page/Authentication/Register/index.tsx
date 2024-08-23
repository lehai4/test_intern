import {
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  Space,
  Typography,
  type FormProps,
} from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

type FieldType = {
  email: string;
  password: string;
  name: string;
  address: string;
};

const Register = () => {
  const [form] = Form.useForm();
  const [checkedRobot, setCheckedRobot] = useState<boolean>(false);
  const [checkedTerm, setCheckedTerm] = useState<boolean>(false);

  const handleChangeRobot = () => {
    setCheckedRobot(!checkedRobot);
  };
  const handleChangeTerm = () => {
    setCheckedTerm(!checkedTerm);
  };
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    if (!checkedTerm || !checkedRobot) {
      toast.error("Please accept into checkbox before registering!");
    } else {
      // run
      console.log(values);
      form.resetFields();
    }
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
          JOIN US
        </h1>
        <Divider style={{ background: "#222", border: "1px solid" }} />

        <Form
          form={form}
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
            label="Email"
            rules={[
              { required: true },
              {
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Email format is incorrect",
              },
              { message: "Please input your email!" },
            ]}
          >
            <Input
              size="large"
              className="rounded-none"
              placeholder="example@email.com"
            />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            label="Password"
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
              placeholder="abc-1234"
            />
          </Form.Item>
          <Form.Item<FieldType>
            name="name"
            label="Name"
            rules={[
              { required: true },

              {
                message: "Please input your name",
              },
            ]}
          >
            <Input
              size="large"
              className="rounded-none"
              placeholder="Name..."
            />
          </Form.Item>
          <Form.Item<FieldType>
            label="Address"
            name="address"
            rules={[
              { required: true },

              {
                message: "Please input your address",
              },
            ]}
          >
            <Input
              size="large"
              className="rounded-none"
              placeholder="Address..."
            />
          </Form.Item>

          <Divider
            style={{
              background: "#222",
              border: "1px solid",
              margin: "35px 0",
            }}
          />

          <div className="flex flex-col justify-end items-end gap-y-2">
            <Space>
              <Checkbox
                indeterminate={checkedRobot}
                onChange={handleChangeRobot}
              />
              <Typography.Text>You are definitely not a robot?</Typography.Text>
            </Space>
            <Space>
              <Checkbox
                indeterminate={checkedTerm}
                onChange={handleChangeTerm}
              />
              <Typography.Text>
                Accept terms of use to register?
              </Typography.Text>
            </Space>
          </div>
          <Form.Item className="w-full mt-8">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full rounded-none bg-[#0565bb] font-[500]"
            >
              Register
            </Button>
          </Form.Item>
          <Space className="flex flex-row mb-[30px] gap-10 justify-center">
            <Link
              to="/login"
              className="text-[#0565bb] underline hover:underline italic"
            >
              You already have an account? Login
            </Link>
          </Space>
        </Form>
      </div>
    </div>
  );
};

export default Register;
