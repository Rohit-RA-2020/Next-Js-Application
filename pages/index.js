import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
const axios = require("axios").default;

const index = () => {
  return (
    <div className="container">
      <h1 className="display-2">Superhero Identity Manager</h1>
      <div>
        <MDBCard className="border border-2" style={{ maxWidth: "22rem" }}>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
            <MDBBtn>Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
};

index.getInitialProps = async () => {
  const res = await axios('http://localhost:3000/api/hero')
  console.log(res.data);
  return {}
}

export default index;
