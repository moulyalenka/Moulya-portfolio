import moulya from "/home/user/Moulya-portfolio/src/assets/images/moulya.png";
import "/home/user/Moulya-portfolio/src/styles/Hero.css";
function Hero({mode,setMode})  {

  return (
    <section className={`hero ${mode}`}>
      {/* LEFT SIDE */}

      <div className="hero-content">
        <p className="hero-label">
COMPUTER SCIENCE STUDENT
</p>
        <h1 className="hero-title">
          Building with
          <br />
          Data & Technology
        </h1>

        <p className="hero-tagline">
Where technology meets understanding.
</p>

        <p className="hero-soul">
I'm not chasing one job title —
I'm building a foundation that can grow
wherever data and technology lead.
</p>
        {/* TOGGLE + BUTTONS */}

<div
  style={{
    marginTop: "35px",
    display: "flex",
    alignItems: "center",
    gap: "18px",
    flexWrap: "wrap",
  }}
>

  <div className="toggle">

  <button
    className={mode==="data" ? "active" : ""}
    onClick={() => setMode("data")}
  >
    ◉ Data
  </button>

  <button
    className={mode==="tech" ? "active" : ""}
    onClick={() => setMode("tech")}
  >
    ◉ Tech
  </button>

</div>

  {/* BUTTONS */}

  <button
    style={{
      padding: "14px 24px",
      borderRadius: "999px",
      border: "none",
      background: "#1E2A44",
      color: "white",
      cursor: "pointer",
      fontSize: "15px",
    }}
  >
    View Projects
  </button>

  <button
    style={{
      padding: "14px 24px",
      borderRadius: "999px",
      background: "transparent",
      border: "1px solid rgba(30,42,68,.2)",
      cursor: "pointer",
      fontSize: "15px",
    }}
  >
    Resume
  </button>
</div>
{/* MINI CARDS */}

<div
  style={{
    display: "flex",
    gap: "16px",
    marginTop: "22px",
    flexWrap: "wrap",
  }}
>
  {/* DATA CARD */}

  <div
  className="card-hover"

    style={{
      padding: "16px",
      borderRadius: "22px",
      background: "rgba(255,255,255,.35)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,.4)",
      minWidth: "190px",
    }}
  >
    <p
      style={{
        fontWeight: "600",
        color: "#1E2A44",
        marginBottom: "8px",
      }}
    >
      📊 Data
    </p>

    <p
      style={{
        fontSize: "13px",
        color: "#666",
        lineHeight: "1.7",
      }}
    >
      Analytics • SQL • ML • Insights
    </p>
  </div>

  {/* TECH CARD */}

  <div
  className="card-hover"
    style={{
      padding: "16px",
      borderRadius: "22px",
      background: "rgba(255,255,255,.35)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,.4)",
      minWidth: "190px",
    }}
  >
    <p
      style={{
        fontWeight: "600",
        color: "#1E2A44",
        marginBottom: "8px",
      }}
    >
      💻 Tech
    </p>

    <p
      style={{
        fontSize: "13px",
        color: "#666",
        lineHeight: "1.7",
      }}
    >
      Building • Development • Problem Solving
    </p>
  </div>
</div>
      </div>

      {/* RIGHT SIDE */}

<div
  style={{
    position: "relative",
    width: "420px",
    height: "520px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  {/* BACK SHAPE 1 */}

  <div
    style={{
      position: "absolute",
      width: "320px",
      height: "320px",
      borderRadius: "50%",
      background: "rgba(107,185,240,0.20)",
      filter: "blur(25px)",
      top: "80px",
      right: "40px",
    }}
  ></div>

  {/* BACK SHAPE 2 */}

  <div
    style={{
      position: "absolute",
      width: "280px",
      height: "380px",
      borderRadius: "40px",
      background: "rgba(173,216,230,0.18)",
      backdropFilter: "blur(10px)",
      transform:"rotate(-10deg)",
boxShadow:"0 25px 60px rgba(0,0,0,.12)"
    }}
  ></div>

  {/* PHOTO */}

  <img
    src={moulya}
    alt="Moulya"
    style={{
      position: "relative",
      width: "370px",
      zIndex: "2",
      filter: "drop-shadow(0 25px 40px rgba(0,0,0,.18))",
      animation:"float 5s ease-in-out infinite",
    }}
  />
</div>
<div className="scroll-indicator">
  <span>Scroll to explore</span>
  <div className="arrow">↓</div>
</div>
    </section>
  );
}

export default Hero;