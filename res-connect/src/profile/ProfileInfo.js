import Profile from "./Profile";

function ProfileInfo({
  name,
  major,
  role,
  year,
  interests,
  clubs,
  pronouns,
  contact,
  intro,
  profilePic,
  initialLocation,
}) {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "60%",
        transform: "translate(-50%, -50%)",
        width: "60%",
        padding: 20,
        background: "white",
        borderRadius: 20,
        border: "0.50px #E0E5F2 solid",
        boxShadow: "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch",
        gap: 16,
      }}
    >
      <Profile
        name={name}
        grade={role}
        profilePic={profilePic}
        initialLocation={initialLocation}
      />
      {/* <Profile {...profileProps} /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 16,
          width: "100%", // to ensure it spans the entire width
        }}
      >
        <div
          style={{
            width: "45%",
            padding: 10,
            background: "#f5f5f5",
            borderRadius: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "start",
            gap: 10,
          }}
        >
          <h2 style={{ color: "#000", textAlign: "left" }}>Basic Details</h2>
          <p style={{ color: "#000", textAlign: "left" }}>Name: {name}</p>
          <p style={{ color: "#000", textAlign: "left" }}>Major: {major}</p>
          <p style={{ color: "#000", textAlign: "left" }}>Year: {year}</p>
          <p style={{ color: "#000", textAlign: "left" }}>
            Interests: {interests.join(", ")}
          </p>
          <p style={{ color: "#000", textAlign: "left" }}>
            Clubs: {clubs.join(", ")}
          </p>
          <p style={{ color: "#000", textAlign: "left" }}>
            Pronouns: {pronouns}
          </p>
          <p style={{ color: "#000", textAlign: "left" }}>Contact: {contact}</p>
        </div>
        <div
          style={{
            width: "45%",
            padding: 10,
            background: "#f5f5f5",
            borderRadius: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "start",
            textAlign: "left",
            gap: 10,
          }}
        >
          <h2 style={{ color: "#000" }}>About me</h2>
          <p style={{ color: "#000" }}>{intro}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
