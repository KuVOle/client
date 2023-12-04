import React, { useState , useEffect } from "react";
import { Container, Card, Form, Button, Row } from "bootstrap";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../../http/autorizationAPI";
import {
  MAIN_ADMIN_ROUTE,
  MAIN_MATERIAL_ACCOUNTING_ROUTE,
} from "../../routes/paths";
import jwt_decode from "jwt-decode";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


useEffect(() => {
    if()
})

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight }}
    >
      <Card className=".cardWidth p-5">
        <h2 className="m-auto">Авторизация</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-5"
            placeholder="Введите Login"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
          />
          <Form.Control
            className="mt-4"
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button variant="outline-success" className="mt-2" onClick={login}>
            Войти
          </Button>
        </Form>

        <hr />
        <Row>
          <div className="mt-1">
            Забыли пароль?
            {/* <NavLink to={FORGOT_PASSWORD}>Восстановить пароль</NavLink> */}
          </div>
        </Row>
      </Card>
    </Container>
  );
};

export default LoginPage;
