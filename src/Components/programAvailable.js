import './programAvailable.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import ProgressBar from 'react-bootstrap/ProgressBar'

const programAvailable = ({
    title,
    type,
    progress,
    dana,
    sisaHari,
}) => {
    return (
        <div className="vv">
            <Container className="comProgram">
                <Row className="bb">
                    <Col xs={6} className="pict">
                        <img src="Img/program1.png" />
                    </Col>
                    <Col xs={6} className="ket">
                        <div className="tittle">
                            {title}
                        </div>
                        <Badge pill className={type.toLowerCase()}>
                            {type}
                        </Badge>
                        <ProgressBar variant="warning" now={progress} />
                        <div className="minitable">
                            <Container>
                                <Row className="slim">
                                    <Col xs={7}>
                                        Terkumpul
                                    </Col>
                                    <Col xs={5}>
                                        Sisa Waktu
                                    </Col>
                                </Row>
                                <Row className="bold">
                                    <Col xs={7}>
                                        Rp.{dana}
                                    </Col>
                                    <Col xs={5}>
                                        {sisaHari} hari
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default programAvailable
