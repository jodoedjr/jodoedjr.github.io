import React from "react";
import { Row, Col, Card } from "react-bootstrap"
// import "style.css";


export function LeftCard(props) {
    return (
        <Card key={props.index}>
            <Row className="no-gutters">
                <Col>
                    <Card.Img src={props.proj.image} />
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Title>{props.proj.name}</Card.Title>
                        <Card.Text>{props.proj.description}</Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}
export function RightCard(props) {
    return (
        <Card key={props.index}>
            <Row className="no-gutters">
                <Col>
                    <Card.Body>
                        <Card.Title>{props.proj.name}</Card.Title>
                        <Card.Text>{props.proj.description}</Card.Text>
                    </Card.Body>
                </Col>
                <Col>
                    <Card.Img src={props.proj.image} />
                </Col>
            </Row>
        </Card>
    )
}
export function BackgroundCard(props) {
    return <h1>Background</h1>
}

