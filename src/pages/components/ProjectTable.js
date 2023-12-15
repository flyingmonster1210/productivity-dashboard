import { Space, Table, Tag } from "antd"

const columns = [
  // {
  //   title: (<div style={{ color: '#dfd50c' }}></div>),
  //   dataIndex: 'collect',
  //   key: 'collect',
  //   render: text => <div className="">{text}</div>,
  //   width: '10%',
  // },
  {
    title: 'Project Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#" style={{ color: '#0052cc' }}>{text}</a>,
    sorter: (a, b) => a.title - b.title,
    width: '30%',
  },
  {
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
    width: '15%',
  },
  {
    title: 'Owner',
    dataIndex: 'owner',
    key: 'owner',
    render: text => <div className="">{text}</div>,
    width: '15%',
  },
  {
    title: 'Creation Time',
    dataIndex: 'created',
    key: 'created',
    render: (_, record) => (
      <Space size='middle'>
        <div>{record.created}</div>
      </Space>
    )
  },
]

const data = [
  {
    key: '1',
    // collect: false,
    name: 'Testing1',
    department: 'Developer',
    owner: 'Myself',
    created: '2023-12-08',
  },
  {
    key: '2',
    // collect: false,
    name: 'Testing2',
    department: 'Developer',
    owner: 'Myself',
    created: '2023-12-08',
  }
]


const ProjectTable = () => {
  return <Table columns={columns} dataSource={data} />
}
export default ProjectTable








