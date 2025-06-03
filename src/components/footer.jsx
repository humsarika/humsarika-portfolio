import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()}  Sarika Kushwaha. All rights reserved.</p>
        <div className="footer__social">
          <a href="https://www.linkedin.com/in/sarika-kushwaha22/" target="_blank" rel="noopener noreferrer">Linkedin</a>
          <a href="https://www.twitter.com/humsarika22" target="_blank" rel="noopener noreferrer">X(twitter) </a>
          <a href="https://www.github.com/humsarika" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://leetcode.com/u/sarika-kushwaha/ " target="_blank" rel="noopener noreferrer">Leetcode</a>
          <a href="https://www.codechef.com/users/humsarika" target="_blank" rel="noopener noreferrer">Codechef</a>
            
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
