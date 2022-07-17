import React, { useContext } from "react";
import { Modal, Form, Input } from "antd";
import { AppContext } from "../../Context/AppProvider";
import { AuthContext } from "../../Context/AuthProvider";
import { addDocument } from "../../firebase/services";

const AddRoomModal = () => {
  const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);
  const {
    user: { uid },
  } = useContext(AuthContext);
  const [form] = Form.useForm();

  const handleOk = () => {
    addDocument("rooms", { ...form.getFieldValue(), members: [uid] });
    // reset values
    form.resetFields();
    setIsAddRoomVisible(false);
  };
  const handleCancel = () => {
    // reset values
    form.resetFields();
    setIsAddRoomVisible(false);
  };
  return (
    <>
      <Modal
        title="Tạo phòng"
        visible={isAddRoomVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Tên phòng" name="name">
            <Input placeholder="nhập tên phòng" />
          </Form.Item>
          <Form.Item label="Mô tả" name="description">
            <Input.TextArea placeholder="nhập mô tả" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddRoomModal;
