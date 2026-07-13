export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0f0d0b',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 24px',
      fontFamily: 'DM Sans, sans-serif',
    }}>
      <h1 style={{
        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
        fontWeight: 600,
        color: '#e8e4df',
        marginBottom: '24px',
        lineHeight: 1.15,
      }}>
        Sound Reimagined
      </h1>
      <p style={{
        fontSize: '1.125rem',
        color: '#8a8480',
        maxWidth: '500px',
        marginBottom: '40px',
        lineHeight: 1.7,
      }}>
        Experience audio like never before. Pure, powerful, and beautifully crafted for those who demand more.
      </p>
      <a
        href="#"
        style={{
          backgroundColor: '#f27823',
          color: '#fff',
          padding: '14px 36px',
          borderRadius: '999px',
          fontSize: '1rem',
          fontWeight: 500,
          textDecoration: 'none',
        }}
      >
        Shop Now
      </a>
    </div>
  );
}