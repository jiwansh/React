const Footer= ()=>{
  const currentYear = new Date().getFullYear();
    return (
        <div className="footer">
          <p>© {currentYear} JFoodExpress. All Rights Reserved.</p>
          <p>Developed in taste 😋 by Jiwanshu</p>
        </div>
    );
};
export default Footer;