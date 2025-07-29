import React from "react";
import ProfileData from "../../components/owner/profile/ProfileData";
import UserManagementHeader from "../../components/owner/users/UserManagementHeader";

const Profile = () => {
  return (
    <div>
      <UserManagementHeader
        title={"Admin Profile"}
        subtitle={"Manage your administrator account and view system activity"}
      />

      <ProfileData />
    </div>
  );
};

export default Profile;
