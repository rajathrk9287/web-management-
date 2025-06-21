import Head from 'next/head';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Your Fintech Partner</title>
        <meta name="description" content="Read our Privacy Policy to understand how we handle your data." />
      </Head>
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center' }}>Privacy Policy</h1>
        <p>This page will contain the full text of your company's privacy policy.</p>

        <section style={{ marginTop: '30px' }}>
          <h2>1. Introduction</h2>
          <p>Placeholder for introduction to the privacy policy. Explaining its purpose and scope.</p>
        </section>

        <section style={{ marginTop: '20px' }}>
          <h2>2. Information We Collect</h2>
          <p>Placeholder for details on what data is collected (e.g., personal identification, financial information, usage data).</p>
        </section>

        <section style={{ marginTop: '20px' }}>
          <h2>3. How We Use Your Information</h2>
          <p>Placeholder for explaining the purposes for which collected data is used (e.g., providing services, personalization, communication, legal obligations).</p>
        </section>

        <section style={{ marginTop: '20px' }}>
          <h2>4. Data Sharing and Disclosure</h2>
          <p>Placeholder for information on when and with whom data might be shared (e.g., third-party service providers, regulatory bodies).</p>
        </section>

        <section style={{ marginTop: '20px' }}>
          <h2>5. Your Rights</h2>
          <p>Placeholder for information about user rights regarding their data (e.g., access, correction, deletion).</p>
        </section>

        {/* Add other relevant sections like Data Security, Cookies Policy, Changes to Policy, Contact Information */}
        <p style={{ marginTop: '30px', fontStyle: 'italic' }}>
          [This is a template. Full privacy policy text needs to be provided by legal counsel.]
        </p>
      </div>
    </>
  );
}
