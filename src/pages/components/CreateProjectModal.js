import React, { useState } from 'react'
import { Button, Modal, Input, Select, Form } from 'antd'

const CreateProjectModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleCreate = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const footer = [
    <Button onClick={handleCancel}>
      Cancel
    </Button>,
    <Button type='primary' onClick={handleCreate}>
      Create
    </Button>
  ]

  return (
    <>
      <Button type="primary" onClick={showModal}>
        New Project
      </Button>
      <Modal
        title="Create New Project"
        open={isModalOpen}
        onOk={handleCreate}
        onCancel={handleCancel}
        footer={footer}
      >
        <div >
          <Form labelCol={{ span: 5 }}>
            <Form.Item label='Project Name' name='name'>
              <Input />
            </Form.Item>
            <Form.Item label='Department' name='department'>
              <Input />
            </Form.Item>
            <Form.Item label='Project Owner' name='owner'>
              <Input />
            </Form.Item>
          </Form>
        </div>
      </Modal >
    </>
  )
}
export default CreateProjectModal