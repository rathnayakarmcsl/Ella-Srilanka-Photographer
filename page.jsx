export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "Arial",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <section
        style={{
          height: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.6)",
            padding: "40px",
            borderRadius: "20px",
          }}
        >
          <h1 style={{ fontSize: "70px" }}>
            Ella Sri Lanka Photographer
          </h1>

          <p style={{ fontSize: "24px", maxWidth: "700px" }}>
            Luxury proposal, couple and travel photography in Ella Sri Lanka.
          </p>

          <a
            href="https://wa.me/94700000000"
            style={{
              background: "#25D366",
              color: "white",
              padding: "15px 30px",
              borderRadius: "10px",
              textDecoration: "none",
              fontSize: "20px",
              display: "inline-block",
              marginTop: "20px",
            }}
          >
            WhatsApp Now
          </a>
        </div>
      </section>
    </div>
  );
}
