import bank from "../assets/bank2.jpg";
function About() {
  return (
    <>
      <div className="container-fluid" style={{placeItems:"center"}}>
        <br></br>
        <br></br>
       
        <h3>Welcome to Flatiron Bank</h3>
        <img
          src={bank}
          alt="Bank Image"
          style={{

            width: '30vw',
            height: '20vh',
            borderRadius: '2px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          
  
          }}
        />
        <article>
          At Flatiron Bank, we are committed to providing our customers with
          exceptional financial services and building strong, lasting
          relationships within our community. With a focus on integrity,
          innovation, and personalized attention, we strive to be your trusted
          financial partner.
        </article>
        <br />
        <h3>Our History</h3>
        <article>
          Flatiron Bank has been serving the community since 1995, providing a
          wide range of banking products and services to individuals,
          businesses, and organizations. Over the years, we have grown and
          adapted to meet the changing needs of our customers, while remaining
          dedicated to our core values.
        </article>
        <br />
        <h3>Our Mission</h3>
        <article>
          Our mission is to empower our customers to achieve their financial
          goals by providing reliable, convenient, and innovative banking
          solutions. We are committed to fostering financial well-being and
          prosperity within our community through responsible lending and
          investment practices.
        </article>
        <br />
        <h3>Our Team</h3>
        <article>
          Our team of experienced professionals is dedicated to delivering
          superior customer service and expert financial guidance. We take pride
          in understanding our customers' unique needs and providing tailored
          solutions to help them succeed.
        </article>
        <br />
        <h3>Community Involvement</h3>
        <article>
          Flatiron Bank is deeply rooted in the community and actively supports
          local initiatives and charitable organizations. We believe in giving
          back and making a positive impact where we live and work.
        </article>
      </div>
    </>
  );
}
export default About;
