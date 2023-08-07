function Profile({ name, grade, profilePic }) {
  return (
    <div
      style={{
        width: "90%",
        height: 40,
        padding: 20,
        background: "white",
        boxShadow: "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
        borderRadius: 20,
        overflow: "hidden",
        border: "0.50px #E0E5F2 solid",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 16,
      }}
    >
      <img
        style={{ width: 40, height: 40, borderRadius: 144 }}
        src={profilePic}
        alt="Profile"
      />
      <div>
        <div style={{ color: "#1B2559", textAlign: "left" }}>{name}</div>
        <div style={{ color: "rgba(27, 37, 89, 0.60)", textAlign: "left" }}>
          {grade}
        </div>
      </div>
    </div>
  );
}

export default Profile;
