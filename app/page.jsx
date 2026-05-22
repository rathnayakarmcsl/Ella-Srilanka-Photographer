export default function Home() {
  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        fontFamily: "serif",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          height: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1974&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.5)",
            padding: "40px",
            borderRadius: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "70px",
              marginBottom: "20px",
            }}
          >
            Ella Sri Lanka Photographer
          </h1>

          <p
            style={{
              fontSize: "22px",
              maxWidth: "700px",
            }}
          >
            Luxury proposal, couple and destination photography in Ella,
            Sri Lanka.
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
              borderRadius: "10px",
              fontWeight: "bold",
            }}
          >
            Book Your Shoot
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "50px",
            marginBottom: "20px",
          }}
        >
          About Me
        </h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "auto",
            fontSize: "20px",
            lineHeight: "1.8",
            color: "#ccc",
          }}
        >
          I capture emotional and cinematic moments for couples visiting Ella
          and beautiful destinations around Sri Lanka.
        </p>
      </section>

      {/* GALLERY */}
      <section
        style={{
          padding: "80px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "50px",
            marginBottom: "50px",
          }}
        >
          Gallery
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "20px",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
            style={{ width: "100%", borderRadius: "20px" }}
          />

          <img
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop"
            style={{ width: "100%", borderRadius: "20px" }}
          />

          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </div>
      </section>

      {/* SERVICES */}
      <section
        style={{
          padding: "100px 20px",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "50px",
            marginBottom: "50px",
          }}
        >
          Services
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <div
            style={{
              background: "#1a1a1a",
              padding: "30px",
              borderRadius: "20px",
              width: "300px",
            }}
          >
            <h3>Proposal Shoots</h3>
            <p>Luxury surprise proposal photography in Ella.</p>
          </div>

          <div
            style={{
              background: "#1a1a1a",
              padding: "30px",
              borderRadius: "20px",
              width: "300px",
            }}
          >
            <h3>Couple Sessions</h3>
            <p>Cinematic romantic sessions for couples.</p>
          </div>

          <div
            style={{
              background: "#1a1a1a",
              padding: "30px",
              borderRadius: "20px",
              width: "300px",
            }}
          >
            <h3>Destination Photography</h3>
            <p>Travel and destination shoots around Sri Lanka.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "50px",
            marginBottom: "20px",
          }}
        >
          Contact
        </h2>

        <p
          style={{
            fontSize: "20px",
            color: "#ccc",
          }}
        >
          WhatsApp: +94 70 000 0000
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#ccc",
          }}
        >
          Instagram: @ellasrilankaphotographer
        </p>
      </section>
    </div>
  );
}
