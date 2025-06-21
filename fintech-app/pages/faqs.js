import Head from 'next/head';

export default function FAQsPage() {
  return (
    <>
      <Head>
        <title>Frequently Asked Questions - Your Fintech Partner</title>
        <meta name="description" content="Find answers to common questions about our services and insurance products." />
      </Head>
      <div style={{ padding: '20px', textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center' }}>Frequently Asked Questions (FAQs)</h1>
        <p style={{ textAlign: 'center' }}>This page will provide answers to common questions.</p>

        <div style={{ marginTop: '30px' }}>
          <h2>General Questions</h2>
          <div>
            <h3>What services do you offer?</h3>
            <p>Placeholder answer...</p>
          </div>
          <div>
            <h3>How do I get a quote?</h3>
            <p>Placeholder answer...</p>
          </div>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h2>Insurance Specific Questions</h2>
          <div>
            <h3>What is Life Insurance?</h3>
            <p>Placeholder answer...</p>
          </div>
          <div>
            <h3>How much cover do I need?</h3>
            <p>Placeholder answer...</p>
          </div>
        </div>
        {/* More FAQ categories and questions can be added here */}
      </div>
    </>
  );
}
