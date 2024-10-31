import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  Button,
  Row,
  Col,
  Container,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../asset/Example.css';

function Example() {
  const [collapsed, setCollapsed] = useState(true);
  const [cardData, setCardData] = useState([]);

  const toggleNavbar = () => setCollapsed(!collapsed);

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/anime')
      .then((response) => response.json())
      .then((data) => setCardData(data.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Navbar color="dark" dark expand="md" className="navbar-custom">
        <NavbarBrand href="/" className="me-auto text-uppercase text-light">
          Anime Jambi Punya
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/" className="text-light">Instagram</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" className="text-light">
                GitHub Gue
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Container className="mt-4">
        <Row>
          {cardData.length > 0 ? (
            cardData.map((item) => (
              <Col lg="3" md="4" sm="6" xs="12" key={item.mal_id} className="mb-4">
                <Card className="anime-card">
                  <CardImg
                    alt={item.title}
                    src={item.images?.jpg?.image_url || 'https://picsum.photos/100/100'}
                    top
                    className="anime-card-img"
                  />
                  <CardBody className="anime-card-body">
                    <CardTitle tag="h6" className="anime-card-title">
                      {item.title}
                    </CardTitle>
                    <CardSubtitle className="mb-1 text-muted anime-card-subtitle" tag="h6">
                      {item.rating}
                    </CardSubtitle>
                    <CardText className="anime-card-text">
                      Score: {item.score || 'N/A'}
                    </CardText>
                    <Link to={`/detail/${item.mal_id}`}>
                      <Button size="sm" color="primary" className="anime-card-button">
                        More Info
                      </Button>
                    </Link>
                  </CardBody>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center text-light">Loading...</p>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Example;
