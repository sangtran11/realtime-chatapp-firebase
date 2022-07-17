import React, { useContext, useMemo } from "react";
import styled from "styled-components";
import { Avatar, Button, Form, Tooltip, Input, Alert } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import Message from "./Message";
import { AppContext } from "../../Context/AppProvider";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);

  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__title {
      margin: 0;
      font-weight: bold;
    }
    &__description {
      font-size: 12px;
    }
  }
`;

const ButtonStyledGroup = styled.div`
  display: flex;
  align-items: center;
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

const WrapperStyled = styled.div`
  height: 100vh;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 2px;

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;

const ChatWindow = () => {
  const { selectedRoom, members, setIsInviteMemberVisible } = useContext(
    AppContext
  );

  return (
    <WrapperStyled>
      {selectedRoom.id ? (
        <>
          {" "}
          <HeaderStyled>
            <div className="header__info">
              <p className="header__title">
                {selectedRoom && selectedRoom.name}
              </p>
              <span className="header__description">b</span>
            </div>
            <ButtonStyledGroup>
              <Button
                icon={<UserAddOutlined />}
                type="text"
                onClick={() => setIsInviteMemberVisible(true)}
              >
                Mời
              </Button>
              <Avatar.Group size="small" maxCount={2}>
                {members.map((member) => (
                  <Tooltip title={member.displayName} key={member.id}>
                    <Avatar src={member.photoURL}>
                      {member.photoURL
                        ? ""
                        : member.displayName.charAt(0).toUpperCase()}
                    </Avatar>
                  </Tooltip>
                ))}
              </Avatar.Group>
            </ButtonStyledGroup>
          </HeaderStyled>
          <ContentStyled>
            <MessageListStyled>
              <Message
                text="test"
                photoUrl={null}
                displayName="sang"
                createdAt={123}
              ></Message>
              <Message
                text="test"
                photoUrl={null}
                displayName="sang"
                createdAt={123}
              ></Message>
              <Message
                text="test"
                photoUrl={null}
                displayName="sang"
                createdAt={123}
              ></Message>
            </MessageListStyled>
            <FormStyled>
              <Form.Item>
                <Input
                  placeholder="Nhập tin nhắn"
                  bordered={false}
                  autoComplete="off"
                />
              </Form.Item>
              <Button>Gửi</Button>
            </FormStyled>
          </ContentStyled>
        </>
      ) : (
        <Alert
          message="hãy chọn phòng"
          type="info"
          showIcon
          style={{ margin: 5 }}
        />
      )}
    </WrapperStyled>
  );
};
export default ChatWindow;
