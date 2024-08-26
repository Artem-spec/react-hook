import { useId } from "react"
import { Container } from "react-bootstrap"
import Form from 'react-bootstrap/Form';

import Menu from "../Menu"

export const UseId = () => {
    const id1 = useId()
    const id2 = useId()
    return (
        <div>
            <Menu />
            <Container>
                <Form>
                    <h3 className="mt-3">useId</h3>
                    <p>Хук предназначен для генерации уникальных идентификаторов.</p>
                    <p>Пример:</p>
                   
                    <Form.Group className="mt-3">
                        <Form.Control type="text" aria-describedby={id1} placeholder="Имя" />
                        <p id={id1}>Ваше имя без фамилии и отчества.</p>
                        <p>ID1{"->"} {id1}</p>
                        <p>ID2{"->"} {id2}</p>
                    </Form.Group>
                </Form>
            </Container>

        </div>
    )
}