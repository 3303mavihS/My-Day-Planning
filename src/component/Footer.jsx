const Footer = ({ total, remaining, done }) => {
  return (
    <div className="footer-div">
      <div className="total-task">
        <p>Total : {total}</p>
      </div>
      <div className="completed-task">
        <p>Completed : {done}</p>
      </div>
      <div className="remaining-task">
        <p>Remaining : {remaining}</p>
      </div>
    </div>
  );
};

export default Footer;
