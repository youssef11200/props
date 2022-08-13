import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

function Profile(props) {
  return (
    <Card style={{ width: "18rem" }}>
      {props.children}
      <Card.Body>
        <Card.Title>{props.Fullname}</Card.Title>
        <Card.Text>
          {props.Bio}
          {props.profession}
        </Card.Text>
        <Button onClick={() => props.Alert(props.Fullname)} variant="primary">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}
Profile.propTypes = {
  Fullname: PropTypes.string,
  Bio: PropTypes.string,
  Profession: PropTypes.string,
  Alert: PropTypes.func,
};
export default Profile;
