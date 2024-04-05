import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#282c34",
        color: "#ffffff",
        textAlign: "center",
        padding: "20px 0",
        marginTop: "auto",
      }}
    >
      <p style={{ margin: "0", padding: "0", fontSize: "14px" }}>
        © 2024 Kod Editörü Uygulaması. Tüm hakları saklıdır.
      </p>
      <p style={{ margin: "0", padding: "0", fontSize: "14px" }}>
        Daha fazla bilgi için{" "}
        <a
          href="https://example.com"
          style={{ color: "#61dafb", textDecoration: "none" }}
          className="hover:underline"
        >
          burayı ziyaret edin
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
