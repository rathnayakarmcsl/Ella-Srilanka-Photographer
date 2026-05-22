export default function Home() {
  return (
    <div style={{
      backgroundColor: "black",
      color: "white",
      fontFamily: "Arial",
      minHeight: "100vh"
    }}>

      <section style={{
        height: "100vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}>
        <div style={{
          background: "rgba(0,0,0,0.5)",
          padding: "40px",
          borderRadius: "20px"
        }}>
          <h1 style={{
            fontSize: "70px",
            marginBottom: "20px"
          }}>
            Ella Sri Lanka Photographer
          </h1>

          <p style={{
            fontSize: "22px",
            maxWidth: "700px"
          }}>
            Luxury proposal, couple and destination photography in Ella Sri Lanka.
          </p>

          <a
            href="https://wa.me/94700000000"
            style={{
              display: "inline-block",
              marginTop: "30px",
              padding: "15px 35px",
              background: "white",
              color: "black",
              textDecoration: "none",
              borderRadius: "50px",
              fontWeight: "bold"
            }}
          >
            Book Now
          </a>
        </div>
      </section>

    </div>
  )
}
