import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/*
        This div acts as a flex container to make the footer sticky.
        It needs min-height: 100vh and display: flex, flex-direction: column.
        The main content area (another div wrapping Component) will have flex-grow: 1.
        These styles can be added to globals.css or kept inline for now.
      */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        <Header />
        {/* This div will grow to push the footer down */}
        <main style={{ flexGrow: 1 }}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
