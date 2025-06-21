import Link from 'next/link';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '2rem 0',
    textAlign: 'center',
    marginTop: 'auto', // Pushes footer to the bottom if main content is short
  };
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    listStyleType: 'none',
    margin: '0 0 1rem 0',
    padding: 0,
  };
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };
  const copyrightStyle = {
    fontSize: '0.9rem',
    color: '#aaa', // Lighter color for copyright
  };

  return (
    <footer style={footerStyle}>
      <nav>
        <ul style={navStyle}>
          <li><Link href="/privacy" style={linkStyle}>Privacy Policy</Link></li>
          <li><Link href="/compliance" style={linkStyle}>Compliance</Link></li>
          {/* Add other footer links as needed, e.g., Terms of Service */}
        </ul>
      </nav>
      <p style={copyrightStyle}>
        &copy; {new Date().getFullYear()} Your Fintech Company. All rights reserved.
      </p>
      {/* Placeholder for IR license or other trust signals */}
      <p style={{fontSize: '0.8em', color: '#ccc', marginTop: '10px'}}>
        [Financial Services License Information Placeholder]
      </p>
    </footer>
  );
};

export default Footer;
