import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import getImage from "../../utils/getImage";

import "./styles.css";

const Profile = ({ data }) => {
  const [image, setImage] = useState(data.image);
  let history = useHistory();

  const ages = [
    "mais de 13 anos",
    "mais de 20 anos",
    "mais de 30 anos",
    "mais de 45 anos",
  ];
  console.log(data);

  return (
    <div className="profile-box">
      <div className="user">
        <div>
          <img
            src={
              image
                ? image
                : "https://cdn0.iconfinder.com/data/icons/user-people-3/48/6-512.png"
            }
            alt=""
          />

          <label id="edit-image" htmlFor="image-upload">
            Editar foto
          </label>
          <input
            type="file"
            name="image-upload"
            accept="image/*"
            className="image-edit"
            onChange={(event) => {
              getImage(event, setImage);
            }}
          />
          <button id="edit-user" onClick={() => history.push("/signup")}>
            Editar perfil
          </button>
        </div>
        <hr />
      </div>

      <div className="details">
        <p>
          Eu sou o <b>{data.name !== " " ? data.name : "Nome Completo"}</b> e eu
          tenho
          <b> {ages[data.age]} </b> e você pode enviar e-mails para
          <b> {data.email ? data.email : "david@example.com"}</b>. Eu moro no
          estado do <b>{data.state}</b>.{" "}
          {data.interests &&
            data.interests.length > 3 &&
            `Eu gosto de ${data.interests}.`}{" "}
          {data.newsletter && "Por-favor me envie newsletters."} Para me
          contatar ligue no telefone{" "}
          {data.telephone ? data.telephone : "(41) 99999-9999"}.
        </p>
        <button type="submit" id="confirm-btn">
          Confirmar
        </button>
      </div>
    </div>
  );
};

export default Profile;
