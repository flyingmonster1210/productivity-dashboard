import { Link } from 'react-router-dom'
import { Form, Button, Checkbox, Input, Divider } from 'antd'

const onFinish = (values) => {
  console.log('Success:', values)
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

function Register () {
  return (
    <div className='login_body_wrap'>
      <div className='form_icon_wrap'>
        <div className="icon"></div>
        <h2>Dashboard</h2>
      </div>
      <Form
        className='form_wrap'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <p className='form_title'>Create New Account</p>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 9,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        <Divider />
        <div style={{ margin: 'auto' }}>
          Already have an account?
          <Link to='/login'> LOGIN.</Link>
        </div>
      </Form>
    </div>
  )
}

export default Register
