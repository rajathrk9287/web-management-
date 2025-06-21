import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - Your Fintech Partner</title>
        <meta name="description" content="Get in touch with our support team for any inquiries." />
      </Head>
      <div style={{ padding: '20px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h1>Contact Us</h1>
        <p>We're here to help. Reach out to us through any of the methods below.</p>

        <form style={{ marginTop: '30px', textAlign: 'left' }}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Full Name:</label>
            <input type="text" id="name" name="name" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email Address:</label>
            <input type="email" id="email" name="email" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}/>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
            <textarea id="message" name="message" rows="5" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}></textarea>
          </div>
          <button type="submit" style={{
            display: 'inline-block',
            padding: '10px 20px',
            color: '#fff',
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Send Message
          </button>
        </form>

        <div style={{ marginTop: '40px' }}>
          <h2>Other Ways to Reach Us</h2>
          <p><strong>Phone:</strong> [Your Phone Number]</p>
          <p><strong>Email:</strong> [Your Support Email]</p>
          <p><strong>Address:</strong> [Your Physical Address, if applicable]</p>
        </div>
      </div>
    </>
  );
}
