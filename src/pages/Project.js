import React from 'react'
import ProjectTable from './components/ProjectTable'
import { Select, Input } from 'antd'

const handleChange = (value) => {
  console.log(`selected ${value}`)
}

const memberOptions = [
  {
    label: 'Manager',
    options: [
      {
        label: 'Jack',
        value: 'jack',
      },
      {
        label: 'Lucy',
        value: 'lucy',
      },
    ],
  },
  {
    label: 'Engineer',
    options: [
      {
        label: 'yiminghe',
        value: 'Yiminghe',
      },
    ],
  },
]

function Project () {
  return (
    <div className='project_body_wrap'>
      <div className='project_header_wrap'>
        <h1>Project List</h1>
        <button className='button'>New Project</button>
      </div>
      <div className='project_selector_wrap'>
        <Input className='max_width_30' placeholder="Basic usage" />
        <Select
          defaultValue="lucy"
          style={{
            width: 200,
          }}
          onChange={handleChange}
          options={memberOptions}
        />
      </div>
      <ProjectTable />
    </div>
  )
}

export default Project
