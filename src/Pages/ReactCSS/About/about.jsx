export default function AboutPage() {
  return (
    <div className="base-container">
      <div className="about-heading">
        <h1 style={{ color: "white", backgroundColor: "darkgreen", textAlign: "center", padding: "10px" }}>
          About South Indian Culture
        </h1>
      </div>
      <div className="body" style={{ backgroundColor: "#f0e68c", padding: "20px", color: "#333" }}>
        <p>
          South India covers states like Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, and Telangana. [1]
        </p>
        <p>
          The cuisine includes rice, lentils, coconut, and spices. Famous foods are dosa, idli, sambar, rasam, and vada. [2]
        </p>
        <p>
          Classical music here is mainly Carnatic, and dance forms include Bharatanatyam, Kathakali, Kuchipudi, Mohiniyattam, Yakshagana, and more. [3]
        </p>
        <p>
          Major festivals are Pongal (Tamil Nadu), Onam (Kerala), and Ugadi (Andhra / Karnataka). [4]
        </p>
        <p>
          Architecturally, there are beautiful Dravidian-style temples like the Brihadeeswarar Temple, and intricate sculptures. [5]
        </p>
        <p style={{ marginTop: "1em", fontStyle: "italic" }}>
          Traditional dress includes sarees for women and lungis or dhotis for men. [6]
        </p>
      </div>
    </div>
  );
}
