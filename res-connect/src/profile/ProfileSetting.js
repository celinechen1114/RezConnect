import Profile from "./Profile";
import ProfileInfo from "./ProfileInfo";

function ProfileSetting({ profileInfoProps }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
      }}
    >
      {/* <div
        style={{
          width: "50%",
          paddingTop: "20px",
          float: "none", // reset float
        }}
      >
        <Profile {...profileProps} />
      </div> */}
      <div style={{ width: "35%", float: "none" }}>
        <ProfileInfo {...profileInfoProps} />
      </div>
    </div>
  );
}

export default ProfileSetting;
