export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          height: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.6)",
            padding: "40px",
            borderRadius: "20px",
            maxWidth: "800px",
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
              fontSize: "24px",
              lineHeight: "1.6",
              color: "#ddd",
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
              background: "#fff",
              color: "#000",
              textDecoration: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "18px",
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
            fontSize: "22px",
            lineHeight: "1.8",
            color: "#ccc",
          }}
        >
          I capture emotional and cinematic memories for couples travelling to
          Ella and beautiful destinations around Sri Lanka.
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
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop"
            style={{
              width: "100%",
              borderRadius: "20px",
            }}
          />

          <img
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop"
            style={{
              width: "100%",
              borderRadius: "20px",
            }}
          />

          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
            style={{
              width: "100%",
              borderRadius: "20px",
            }}
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
            <h3>Destination Shoots</h3>
            <p>Professional destination photography around Sri Lanka.</p>
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
            fontSize: "22px",
            color: "#ccc",
          }}
        >
          WhatsApp: +94 70 000 0000
        </p>

        <p
          style={{
            fontSize: "22px",
            color: "#ccc",
          }}
        >
          Instagram: @ellasrilankaphotographer
        </p>
      </section>
    </main>
  );
}
