import Head from 'next/head';

export default function WhyChooseUsPage() {
  return (
    <>
      <Head>
        <title>Why Choose Us - Your Fintech Partner</title>
        <meta name="description" content="Discover the benefits of choosing us for your insurance needs." />
      </Head>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Why Choose Us / How It Works</h1>
        <p>This page will detail our company's advantages, mission, and the process of getting insured with us.</p>
        <section style={{ margin: '30px 0' }}>
          <h2>Our Commitment</h2>
          <p>Placeholder for content about commitment to customers, transparency, etc.</p>
        </section>
        <section style={{ margin: '30px 0' }}>
          <h2>How It Works</h2>
          <p>Placeholder for a step-by-step guide on using our services.</p>
        </section>
      </div>
    </>
  );
}
