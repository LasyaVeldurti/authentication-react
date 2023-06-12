// Write your JS code here
import './index.css'

const Header = () => (
  <>
    <div className="header-container">
      <img
        className="logo-img"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
        alt="website logo"
      />
      <div>
        <ul className="ul-container">
          <li>Home</li>
          <li>Products</li>
          <li>Cart</li>
          <li>
            <button className="logout-btn" type="button">
              {' '}
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </>
)

export default Header
