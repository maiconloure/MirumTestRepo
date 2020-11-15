import React, { useState } from "react";
import "./styles.css";
import { Field, Select, InputTags } from "components";
import { states } from "../../utils/data";
import getImage from "../../utils/getImage";
import { useHistory } from "react-router-dom";

const SignUp = ({ setData }) => {
  let history = useHistory();
  const [image, setImage] = useState();
  const [showAdress, setShowAdress] = useState(false);
  const [interests, setInterests] = useState([]);

  const onFinish = (evt) => {
    evt.preventDefault();
    const data = evt.target;
    const userData = {
      image: image,
      name: data[1].value + " " + data[2].value,
      age: parseInt(data[3].value),
      email: data[4].value,
      telephone: data[5].value,
      state: data[6].options[data[6].selectedIndex].text,
      country: data[7].options[data[7].selectedIndex].text,
      address: data[9].value,
      interests:
        interests.slice(0, interests.length - 1).join(", ") +
        " e " +
        interests.slice(interests.length - 1, interests.length),
      newsletter: data[10].checked,
    };
    setData(userData);
    history.push("/profile");
  };

  return (
    <main className="signup-container">
      <form onSubmit={(evt) => onFinish(evt)}>
        <div className="block1">
          <figure className="image-area">
            {image ? (
              <label htmlFor="image-upload">Foto carregada!</label>
            ) : (
              <label htmlFor="image-upload">Carregue sua foto</label>
            )}
            <input
              type="file"
              name="image-upload"
              accept="image/*"
              className="image-upload"
              onChange={(event) => {
                getImage(event, setImage);
              }}
            />
          </figure>

          <hr className="line" />
        </div>
        <div className="block2">
          <Field
            label="Nome"
            name="fname"
            id="simple"
            inputs={[
              { name: "fname", placeholder: "Primeiro nome" },
              { name: "lname", placeholder: "Sobrenome" },
            ]}
          />

          <div className="level">
            <label htmlFor="age">Idade</label>
            <div className="slider-range">
              <div className="guide-lines">
                <hr id="age-line" />
                <hr id="age-line" />
                <hr id="age-line" />
                <hr id="age-line" />
              </div>
              <input
                className="slider"
                type="range"
                min="0"
                max="3"
                list="ages"
              ></input>
              <datalist id="ages">
                <option value="0" label="13-19" />
                <option value="1" label="20-29" />
                <option value="2" label="30-45" />
                <option value="3" label="45 e acima" />
              </datalist>
            </div>
          </div>

          <div className="fields">
            <Field
              label="E-mail"
              name="email"
              inputs={[{ name: "email", placeholder: "david@example.com" }]}
            />

            <Field
              label="Telefone"
              name="telephone"
              inputs={[{ name: "telephone", placeholder: "(41) 99999-9999" }]}
            />

            <Select
              label="Estado"
              name="state"
              defaultSelect="Paraná"
              options={states}
            />

            <Select
              label="País"
              name="country"
              defaultSelect="Brasil"
              options={["Brasil"]}
            />

            <Select
              label="Endereço"
              name="address"
              defaultSelect="Selecione"
              onChange={(evt) => {
                if (evt.target.value) {
                  setShowAdress(true);
                }
              }}
              options={["Selecione", "Casa", "Empresa"]}
            />

            {showAdress && (
              <input
                id="default"
                name="street-address"
                type="text"
                placeholder="Digite aqui seu endereço"
              />
            )}

            <InputTags
              label="Interesses"
              name="tags"
              inputs={[{ name: "tags", placeholder: "" }]}
              interests={interests}
              setInterests={setInterests}
            />
          </div>

          <div id="newsletter">
            <input type="checkbox" name="newsletter" />
            <p>Desejo receber novidades por e-mail.</p>
          </div>

          <input
            // onClick={(evt) => onFinish(evt)}
            id="submit"
            type="submit"
            value="Salvar"
          />
        </div>
      </form>
    </main>
  );
};

export default SignUp;
