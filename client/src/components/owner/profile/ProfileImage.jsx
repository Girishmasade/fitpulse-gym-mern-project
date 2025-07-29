import { Camera } from "lucide-react";
import React, { useState } from "react";

const ProfileImage = ({isEditing}) => {
  const [imagePreview, setImagePreview] = useState(null);

  const toggleImage = (e) => {
    const file = e.target.value;
    if (file) {
      const showImage = URL.createObjectURL(file);
      setImagePreview(showImage);
    }
  };

  return (
    <div className="relative w-[80px] h-[80px]">
      <label className="cursor-pointer" htmlFor="profile-image-upload">
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Profile"
            className="w-full h-full object-cover rounded-full border border-yellow-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-800 border border-yellow-500 rounded-full">
            <Camera className="text-gray-400 w-6 h-6" />
          </div>
        )}
      </label>

      <input
        type="file"
        id="profile-image-upload"
        className="hidden"
        disabled={!isEditing}
        onChange={toggleImage}
        accept="image/*"
      />
    </div>
  );
};

export default ProfileImage;
