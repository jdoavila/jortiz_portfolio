export default function Layout({ children }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Saltar al contenido principal
      </a>
      <main id="main-content" className="relative" role="main">
        {children}
      </main>
    </>
  );
}
