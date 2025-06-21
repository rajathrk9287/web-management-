import Link from 'next/link';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#333',
    padding: '1rem 0',
    color: 'white',
  };
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  };
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1rem',
  };

  return (
    <header style={headerStyle}>
      <nav>
        <ul style={navStyle}>
          <li><Link href="/" style={linkStyle}>Home</Link></li>
          <li><Link href="/get-a-quote" style={linkStyle}>Get a Quote</Link></li>
          <li>
            {/* Placeholder for dropdown or multiple links */}
            <span style={linkStyle}>Products</span>
            {/* Sub-links can be added later:
            <ul style={{listStyleType: 'none', paddingLeft: '10px'}}>
              <li><Link href="/products/life" style={linkStyle}>Life</Link></li>
              <li><Link href="/products/income" style={linkStyle}>Income Protection</Link></li>
              <li><Link href="/products/tpd" style={linkStyle}>TPD</Link></li>
              <li><Link href="/products/trauma" style={linkStyle}>Trauma</Link></li>
            </ul>
            */}
          </li>
          <li><Link href="/why-choose-us" style={linkStyle}>Why Choose Us</Link></li>
          <li><Link href="/partners" style={linkStyle}>Partners</Link></li>
          <li><Link href="/faqs" style={linkStyle}>FAQs</Link></li>
          <li><Link href="/blog" style={linkStyle}>Blog</Link></li>
          <li><Link href="/contact" style={linkStyle}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
