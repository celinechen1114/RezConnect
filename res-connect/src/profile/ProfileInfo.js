function ProfileInfo({
  name,
  major,
  year,
  interests,
  clubs,
  pronouns,
  contact,
}) {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        padding: 20,
        background: "white",
        borderRadius: 20,
        border: "0.50px #E0E5F2 solid",
        boxShadow: "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 16,
      }}
    >
      {/* Display the information */}
      <h2 style={{ color: "#000" }}>{name}</h2>
      <p style={{ color: "#000" }}>Major: {major}</p>
      <p style={{ color: "#000" }}>Year: {year}</p>
      <p style={{ color: "#000" }}>Interests: {interests.join(", ")}</p>
      <p style={{ color: "#000" }}>Clubs: {clubs.join(", ")}</p>
      <p style={{ color: "#000" }}>Pronouns: {pronouns}</p>
      <p style={{ color: "#000" }}>Contact: {contact}</p>
    </div>
  );
}

export default ProfileInfo;
