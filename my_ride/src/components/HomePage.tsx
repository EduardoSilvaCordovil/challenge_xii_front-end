import Form from "./Form";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <header className="header_navigation">
        <nav>
          <p className="p-home">
            <Link to="/my_ride/src/components/Error.tsx">Home</Link>
          </p>
          <p>
            <Link to="/my_ride/src/components/Error.tsx">Getting a Taxi</Link>
          </p>
          <p>
            <Link to="/my_ride/src/components/Error.tsx">Mobile App</Link>
          </p>
          <p>
            <Link to="/my_ride/src/components/Error.tsx">Contact Us</Link>
          </p>
        </nav>
      </header>

      <div className="container_ride">
        <div id="item">
          <h2>NEED A RIDE?</h2>
          <p>Book with myRIDE now!</p>
        </div>
        <div id="item" className="ride_browser">
          <p className="p_input">Find a ride now</p>
          <input className="input_area" type="text" placeholder="Your Pickup" />
          <input
            className="input_area"
            type="text"
            placeholder="You Destination"
          />
          <button className="browser_button">FIND A DRIVER</button>
        </div>
      </div>
      <Form />
      <footer>
        <div className="social_media">
          <p>MyRide Inc., 2nd Floor, New York, NY 10016</p>
        </div>
        <div className="link">
          <div>
            <p>
              <Link to="/my_ride/src/components/Error.tsx">Company</Link>
            </p>
            <p>
              <Link to="/my_ride/src/components/Error.tsx">About Us</Link>
            </p>
            <p>
              <Link to="/my_ride/src/components/Error.tsx">News</Link>
            </p>
            <p>
              <Link to="/my_ride/src/components/Error.tsx">Careers</Link>
            </p>
            <p>
              <Link to="/my_ride/src/components/Error.tsx">How we work</Link>
            </p>
          </div>

          <div>
            <p>
              <Link to="/my_ride/src/components/Error.tsx">Support</Link>
            </p>
            <p>
              <Link to="/my_ride/src/components/Error.tsx">FAQ</Link>
            </p>
            <p>
              <Link to="/my_ride/src/components/Error.tsx">US Office</Link>
            </p>
            <p>
              <Link to="/my_ride/src/components/Error.tsx">Asia Office</Link>
            </p>
            <p>
              <Link to="/my_ride/src/components/Error.tsx">Help Center</Link>
            </p>
          </div>

          <div>
            <p>
              <Link to="/my_ride/src/components/Error.tsx">More</Link>
            </p>
            <p>
              <Link to="/my_ride/src/components/Error.tsx">
                Become a partner
              </Link>
            </p>
            <p>
              <Link to="/my_ride/src/components/Error.tsx">
                Partner Support
              </Link>
            </p>
            <p>
              <Link to="/my_ride/src/components/Error.tsx">
                Mobile app links
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;