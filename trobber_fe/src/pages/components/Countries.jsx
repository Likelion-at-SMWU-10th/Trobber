import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Countries.css';

function Countries() {
  return (
    <Carousel>
      
      {/* 일본 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/tokyo.png"
          alt="Tokyo"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* 파리 */}
      <Carousel.Item>
      
        <img
          className="d-block w-100"
          src="img/paris.png"
          alt="Paris"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* 뉴욕 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/newyork.png"
          alt="New York"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      
      </Carousel.Item>
       {/* 베이징 */}
       <Carousel.Item>
      
      <img
        className="d-block w-100"
        src="img/beijing.png"
        alt="Beijing"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
     {/* 런던 */}
     <Carousel.Item>
      
      <img
        className="d-block w-100"
        src="img/london.png"
        alt="London"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
  );
}

export default Countries;