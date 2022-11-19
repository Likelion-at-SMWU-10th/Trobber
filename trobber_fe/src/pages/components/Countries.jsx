import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Countries.css";

function Countries() {
  return (
    <Carousel indicators={false} interval={null}>
      {/* 일본 */}
      <Carousel.Item>
        <img className="resizing" src="img/tokyo.png" alt="Tokyo" />
      </Carousel.Item>
      {/* 파리 */}
      <Carousel.Item>
        <img className="resizing" src="img/paris.png" alt="Paris" />
      </Carousel.Item>
      {/* 뉴욕 */}
      <Carousel.Item>
        <img className="resizing" src="img/newyork.png" alt="New York" />
      </Carousel.Item>
      {/* 베이징 */}
      <Carousel.Item>
        <img className="resizing" src="img/beijing.png" alt="Beijing" />
      </Carousel.Item>
      {/* 런던 */}
      <Carousel.Item>
        <img className="resizing" src="img/london.png" alt="London" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Countries;
