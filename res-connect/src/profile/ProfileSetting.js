import Profile from "./Profile";
import ProfileInfo from "./ProfileInfo";

function ProfileSetting({ profileProps, profileInfoProps }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "50%",
          margin: "0 auto",
          marginRight: "15%",
          paddingTop: "20px",
        }}
      >
        <Profile {...profileProps} />
      </div>
      <ProfileInfo {...profileInfoProps} />
    </div>
  );
}

export default ProfileSetting;
