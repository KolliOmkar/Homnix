export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #f3e8ff, #ffffff)",
        fontFamily: "Arial",
        padding: "0",
        margin: "0"
      }}
    >

      {/* Navbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 30px",
          borderBottom: "1px solid #eee",
          background: "white"
        }}
      >
        <h1
          style={{
            color: "#7c3aed",
            fontSize: "32px",
            fontWeight: "bold"
          }}
        >
          Homnix
        </h1>

        <button
          style={{
            background: "#7c3aed",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "14px",
            fontSize: "16px"
          }}
        >
          Book Now
        </button>
      </div>

      {/* Hero */}
      <div
        style={{
          textAlign: "center",
          padding: "80px 20px"
        }}
      >

        <h1
          style={{
            fontSize: "55px",
            fontWeight: "bold",
            color: "#111"
          }}
        >
          All Services.
          <br />
          One Trusted Platform.
        </h1>

        <p
          style={{
            marginTop: "20px",
            fontSize: "22px",
            color: "#666"
          }}
        >
          Professional Home Services in Padmarao Nagar
        </p>

        <button
          style={{
            marginTop: "35px",
            background: "#7c3aed",
            color: "white",
            border: "none",
            padding: "18px 35px",
            borderRadius: "18px",
            fontSize: "18px"
          }}
        >
          Get Started
        </button>

      </div>

      {/* Services */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          padding: "20px",
          maxWidth: "900px",
          margin: "auto"
        }}
      >

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "25px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.05)"
          }}
        >
          <h2>Cleaning</h2>
          <p>Fast professional cleaning services.</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "25px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.05)"
          }}
        >
          <h2>Plumbing</h2>
          <p>Trusted plumbing experts.</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "25px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.05)"
          }}
        >
          <h2>Electrician</h2>
          <p>Safe electrical repairs.</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "25px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.05)"
          }}
        >
          <h2>Painting</h2>
          <p>Interior and exterior painting.</p>
        </div>

      </div>

      {/* Booking */}
      <div
        style={{
          maxWidth: "700px",
          margin: "60px auto",
          background: "white",
          padding: "35px",
          borderRadius: "30px",
          boxShadow: "0 5px 25px rgba(0,0,0,0.05)"
        }}
      >

        <h2
          style={{
            marginBottom: "25px"
          }}
        >
          Book a Service
        </h2>

        <input
          placeholder="Your Name"
          style={{
            width: "100%",
            padding: "16px",
            marginBottom: "16px",
            borderRadius: "14px",
            border: "1px solid #ddd"
          }}
        />

        <input
          placeholder="Phone Number"
          style={{
            width: "100%",
            padding: "16px",
            marginBottom: "16px",
            borderRadius: "14px",
            border: "1px solid #ddd"
          }}
        />

        <select
          style={{
            width: "100%",
            padding: "16px",
            marginBottom: "16px",
            borderRadius: "14px",
            border: "1px solid #ddd"
          }}
        >
          <option>Select Service</option>
          <option>Cleaning</option>
          <option>Plumbing</option>
          <option>Electrician</option>
          <option>Painting</option>
        </select>

        <div
          style={{
            background: "#f3e8ff",
            padding: "18px",
            borderRadius: "18px",
            marginBottom: "20px"
          }}
        >
          <h3
            style={{
              color: "#7c3aed"
            }}
          >
            Pay via UPI
          </h3>

          <p>homnix@upi</p>
        </div>

        <button
          style={{
            width: "100%",
            background: "#7c3aed",
            color: "white",
            border: "none",
            padding: "18px",
            borderRadius: "18px",
            fontSize: "18px"
          }}
        >
          Confirm Booking
        </button>

      </div>

    </main>
  );
}
