import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">RoomDire</span>
        <div className="navItem">
          <button className="navButton">Rigster</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
