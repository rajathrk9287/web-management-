import Head from 'next/head';

export default function PartnersPage() {
  return (
    <>
      <Head>
        <title>Our Insurer Partners - Your Fintech Partner</title>
        <meta name="description" content="Learn about the leading insurers we partner with." />
      </Head>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Our Partners / Insurers</h1>
        <p>This page will showcase the insurance companies we collaborate with, highlighting trust and variety.</p>
        {/* Placeholder for partner logos and descriptions */}
        <div style={{ margin: '30px auto', padding: '20px', border: '1px dashed #ccc', maxWidth: '800px' }}>
          <p>[List of Partner Logos and brief descriptions will go here]</p>
        </div>
      </div>
    </>
  );
}
