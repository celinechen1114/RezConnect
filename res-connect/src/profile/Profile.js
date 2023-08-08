import ProfileInfo from "./ProfileInfo";
import { useState } from "react";

function Profile({
  name,
  grade,
  profilePic,
  location,
  text,
  profileInfoProps,
}) {
  // state to control visibility
  const [showProfileInfo, setShowProfileInfo] = useState(false);

  // function to handle clicking outside
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowProfileInfo(false);
    }
  };

  return (
    <div
      style={{
        width: "90%",
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
        position: "relative", // make it relative to position the ProfileInfo correctly
        listStyleType: "none",
      }}
      onClick={handleOutsideClick}
    >
      <img
        style={{ width: 40, height: 40, borderRadius: 144 }}
        src={profilePic}
        alt="Profile"
      />
      <div
        onClick={() => setShowProfileInfo(true)} // toggle visibility on click
      >
        <div style={{ color: "#1B2559", textAlign: "left" }}>{name}</div>
        <div style={{ color: "rgba(27, 37, 89, 0.60)", textAlign: "left" }}>
          {grade}
        </div>
      </div>
      {location && (
        <div
          style={{
            padding: 10,
            background: "#f5f5f5",
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#000",
            textAlign: "center",
            marginLeft: "auto",
          }}
        >
          {location}
        </div>
      )}
      <div
        style={{
          width: "100%",
          marginTop: 10,
          padding: 10,
          borderRadius: 10,
          color: "#000",
          listStyleType: "none",
        }}
      >
        {text}
      </div>
      {showProfileInfo && <ProfileInfo {...profileInfoProps} />}
    </div>
  );
}

export default Profile;
