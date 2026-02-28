import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function SetupAccount() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Account Setup Data:", data);
    navigate("/homepage");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Setup Account</h2>

      <div>
        <label>Profile Photo</label>
        <input type="file" {...register("profilePhoto", { required: "Profile photo is required" })} />
        {errors.profilePhoto && <p>{errors.profilePhoto.message}</p>}
      </div>

      <div>
        <label>First Name</label>
        <input
          type="text"
          {...register("firstName", { required: "First name is required" })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>

      <div>
        <label>Last Name</label>
        <input
          type="text"
          {...register("lastName", { required: "Last name is required" })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>

      <button type="submit">Complete Setup</button>
    </form>
  );
}
