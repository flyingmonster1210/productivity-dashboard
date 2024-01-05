import { Button, Popover, Space } from 'antd'
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)
const ProjectPopover = () => (
  <Space wrap>
    <Popover content={content} title="Title" trigger="hover">
      <button className='button popover_button'>
        <span>Projects</span>
        <div className='arrow_down'></div>
      </button>
    </Popover>

    <Popover content={content} title="Title" trigger="hover">
      <button className='button popover_button'>
        <span>Members</span>
        <div className='arrow_down'></div>
      </button>
    </Popover>
  </Space>
)
export default ProjectPopover