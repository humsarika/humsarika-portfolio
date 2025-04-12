import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()}  Sarika Kushwaha. All rights reserved.</p>
        {/* <div className="footer-links">
          <a href="https://github.com/sarikakushwaha" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/sarikakushwaha" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#contact">Contact</a>
        </div> */}
        <div class="footer__social">
          <a href="https://www.linkedin.com/in/sarika-kushwaha22/" target="_blank" rel="noopener noreferrer">Linkedin</a>
          <a href="https://www.twitter.com/humsarika22" target="_blank" rel="noopener noreferrer">X (twitter) </a>
          <a href="https://www.github.com/humsarika" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://leetcode.com/u/humsarika/ " target="_blank" rel="noopener noreferrer">Leetcode</a>
          <a href="https://www.codechef.com/users/humsarika" target="_blank" rel="noopener noreferrer">Codechef</a>
            
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
