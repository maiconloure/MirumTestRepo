import React from "react";
import "./styles.css";

const Profile = () => (
  <div className="profile-box">
    <div className="user">
      <img
        src={
          "https://cdn0.iconfinder.com/data/icons/user-people-3/48/6-512.png"
        }
        alt=""
      />
      <hr />
    </div>

    <div className="details">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia
        reprehenderit molestiae necessitatibus magnam ab explicabo molestias.
        Officiis explicabo temporibus ullam enim reiciendis recusandae
        voluptatum inventore? Incidunt obcaecati fugiat suscipit!
      </p>
    </div>
  </div>
);

export default Profile;
