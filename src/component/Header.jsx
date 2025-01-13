const Header = () => {
  return (
    <div className="header-div">
      <div className="logo-title-div">
        <img
          className="logo-img"
          src={require("..//assets/images/6760659-200.png")}
          alt="Task List"
        />
        <p>Task List</p>
      </div>
    </div>
  );
};

export default Header;
