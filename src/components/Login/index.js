import React from "react";
import firebase, { auth, db } from "../../firebase/config";
import { Row, Col, Button, Typography } from "antd";
import { addDocument, generateKeywords } from "../../firebase/services";
// import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const fbAuthProvider = new firebase.auth.FacebookAuthProvider();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const Login = () => {
  const loginByFacebook = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(
      fbAuthProvider
    );

    addDocument("users", {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid,
      providerId: additionalUserInfo.providerId,
      keywords: generateKeywords(user.displayName),
    });
  };

  const loginByGoogle = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(
      googleAuthProvider
    );
    addDocument("users", {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid,
      providerId: additionalUserInfo.providerId,
      keywords: generateKeywords(user.displayName),
    });
  };

  return (
    <Row justify="center" style={{ height: 800 }}>
      <Col span={8}>
        <Title style={{ textAlign: "center" }} level={3}>
          Fun Chat
        </Title>
        <Button
          style={{ width: "100%", marginBottom: 5 }}
          onClick={loginByGoogle}
        >
          Login by Google
        </Button>
        <Button style={{ width: "100%" }} onClick={loginByFacebook}>
          Login by Facebook
        </Button>
      </Col>
    </Row>
  );
};

export default Login;
