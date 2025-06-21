import Head from 'next/head';
import styles from '@/styles/Home.module.css'; // We can reuse some styles or add new ones

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Trusted Fintech Partner - Home</title>
        <meta name="description" content="Get competitive insurance quotes and expert advice." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* We can use styles.page if it provides a good base, or define our own layout */}
      <div className={styles.page}> {/* Using existing page class for now, can be adjusted */}
        <main> {/* Removed styles.main to avoid default flex column if not desired */}
          {/* Hero Section */}
          <section style={{ textAlign: 'center', padding: '50px 20px', backgroundColor: '#f0f8ff' }}>
            <h1>Find the Right Insurance, Made Simple</h1>
            <p style={{ fontSize: '1.2em', margin: '20px 0' }}>
              Compare quotes from leading insurers and get covered in minutes.
            </p>
            <a href="/get-a-quote" style={{
              display: 'inline-block',
              padding: '15px 30px',
              fontSize: '1em',
              color: '#fff',
              backgroundColor: '#007bff',
              textDecoration: 'none',
              borderRadius: '5px'
            }}>
              Get a Quote
            </a>
          </section>

          {/* Why Choose Us Section */}
          <section style={{ padding: '40px 20px', textAlign: 'center' }}>
            <h2>Why Choose Us?</h2>
            <p style={{ maxWidth: '800px', margin: '20px auto' }}>
              We are dedicated to providing transparent, easy-to-understand insurance options.
              Our platform empowers you to make informed decisions for your financial security.
              With expert advice and a wide range of products, we are your trusted partner.
            </p>
            {/* More content can be added here, like key benefit points */}
          </section>

          {/* Partners Section */}
          <section style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
            <h2>Our Trusted Partners</h2>
            <p>We work with Australia's leading insurers to bring you the best options.</p>
            {/* Placeholder for logos */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '20px' }}>
              <span style={{ padding: '10px', border: '1px solid #ddd' }}>Partner Logo 1</span>
              <span style={{ padding: '10px', border: '1px solid #ddd' }}>Partner Logo 2</span>
              <span style={{ padding: '10px', border: '1px solid #ddd' }}>Partner Logo 3</span>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
