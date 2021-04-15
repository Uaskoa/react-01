
import PropTypes from 'prop-types'
const Painting = ({ url, title, profileUrl, tag, price, quantity }) => (
  <div>
    <img src={url} alt={title} width="500" />
    <h2>{title}</h2>
    <p>
      Author: <a href={profileUrl}>{tag}</a>
    </p>
    <p>Price: {price} credits </p>
    <p>Availability: {quantity < 10 ? "limited stock" : "available"}</p>
    <button type="button">Add to cart</button>
  </div>
);

Painting.defaultProps = {
  url:
    "https://cdn.pixabay.com/photo/2021/02/20/03/01/animals-6032121_960_720.jpg",
};

Painting.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    profileUrl: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
                
             
        
}
    export default Painting;




