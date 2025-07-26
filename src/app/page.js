export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#fdecef", // blush rose
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          border: "2px solid #5e002f",
          borderRadius: "1rem",
          padding: "1rem",
          backgroundColor: "white",
          boxShadow: "0 4px 16px rgba(94, 0, 47, 0.1)",
          marginBottom: "2rem",
        }}
      >
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            width: "120px",
            height: "auto",
            borderRadius: "0.75rem",
          }}
        />
      </div>
      <h1
        style={{
          fontSize: "1.6rem",
          color: "#5e002f",
          maxWidth: "300px",
        }}
      >
        Hier komt binnenkort iets spannend…
      </h1>
    </main>
  );
}
