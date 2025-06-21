import Head from 'next/head';

export default function CompliancePage() {
  return (
    <>
      <Head>
        <title>Compliance Information - Your Fintech Partner</title>
        <meta name="description" content="Learn about our commitment to compliance and regulatory standards." />
      </Head>
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center' }}>Compliance & Regulatory Information</h1>
        <p>This page will provide details about our adherence to financial regulations, licenses, and compliance standards.</p>

        <section style={{ marginTop: '30px' }}>
          <h2>Our Regulatory Commitment</h2>
          <p>Placeholder for statement on commitment to upholding regulatory standards in the fintech and insurance industry.</p>
        </section>

        <section style={{ marginTop: '20px' }}>
          <h2>Licenses and Authorizations</h2>
          <p>Placeholder for details of any financial services licenses (e.g., AFSL number if applicable in Australia), regulatory bodies overseeing the company, etc.</p>
          <p>[Example: Your Company Pty Ltd, AFS License No. XXXXXX]</p>
        </section>

        <section style={{ marginTop: '20px' }}>
          <h2>Dispute Resolution</h2>
          <p>Placeholder for information on internal and external dispute resolution processes.</p>
        </section>

        <section style={{ marginTop: '20px' }}>
          <h2>Security Practices</h2>
          <p>Placeholder for information about data security measures in place to protect client information, aligning with compliance requirements.</p>
        </section>

        {/* Add other relevant sections as required by local regulations */}
        <p style={{ marginTop: '30px', fontStyle: 'italic' }}>
          [This is a template. Full compliance information needs to be provided and verified by legal/compliance experts.]
        </p>
      </div>
    </>
  );
}
