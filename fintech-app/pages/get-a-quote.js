import Head from 'next/head';

export default function GetAQuotePage() {
  return (
    <>
      <Head>
        <title>Get a Quote - Your Fintech Partner</title>
        <meta name="description" content="Get personalized insurance quotes quickly and easily." />
      </Head>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Get a Quote</h1>
        <p>This is where the Omni Life calculator or custom quote flow will be integrated.</p>
        {/* Placeholder for calculator */}
        <div style={{ margin: '30px auto', padding: '20px', border: '1px dashed #ccc', maxWidth: '600px' }}>
          <p>[Omni Life Calculator / Custom Quote Form Placeholder]</p>
        </div>
      </div>
    </>
  );
}
