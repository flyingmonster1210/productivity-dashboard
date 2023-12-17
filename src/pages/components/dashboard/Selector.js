import { Select, Space, Button } from 'antd'

const handleChange = (value) => {
  console.log(`selected ${value}`)
}

const style = { width: 120, }

const options = [
  {
    value: 'jack',
    label: 'Jack',
  },
  {
    value: 'lucy',
    label: 'Lucy',
  },
  {
    value: 'Yiminghe',
    label: 'yiminghe',
  },
  {
    value: 'disabled',
    label: 'Disabled',
    disabled: true,
  },
]

const intialValue = 'lucy'

function Selector () {

  const handleClick = () => {

  }

  return (
    <div className='selector_wrap'>
      <Space wrap>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Search to Select"
          optionFilterProp="children"
          filterOption={(input, option) => (option?.label ?? '').includes(input)}
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
          }
          options={options}
        />
        <Select
          defaultValue={intialValue}
          style={style}
          onChange={handleChange}
          options={options}
          allowClear={true}
        />
        <Select
          defaultValue="lucy"
          style={style}
          onChange={handleChange}
          options={options}
        />
        <Button onClick={handleClick}>
          Clear All
        </Button>
      </Space>
    </div>
  )
}

export default Selector