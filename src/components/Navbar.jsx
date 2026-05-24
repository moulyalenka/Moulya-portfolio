function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        maxWidth: "1200px",
        padding: "16px 24px",
        borderRadius: "999px",
        background: "rgba(255,255,255,.35)",
        backdropFilter: "blur(14px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: "999",
        border: "1px solid rgba(255,255,255,.3)",
      }}
    >
      {/* Logo */}

      <h3
        style={{
          color: "#1E2A44",
          fontWeight: "700",
        }}
      >
        Moulya Lenka
      </h3>

      {/* Links */}

      <div
        style={{
          display: "flex",
          gap: "30px",
          color: "#555",
          fontSize: "15px",
        }}
      >
        <span>About</span>
        <span>Projects</span>
        <span>Skills</span>
        <span>Certificates</span>
        <span>Contact</span>
      </div>

      {/* Right */}

      <div
        style={{
          background: "#1E2A44",
          color: "white",
          padding: "8px 16px",
          borderRadius: "999px",
          fontSize: "14px",
        }}
      >
        Data | Tech
      </div>
    </nav>
  );
}

export default Navbar;