import React, { useState } from "react";
import "./styles.css";
import { Field, Select, InputTags } from "components";
import { states } from "../../utils/data";

const SignUp = ({ history }) => {
  const [value, setValue] = useState(2);
  const [image, setImage] = useState();
  const [showAdress, setShowAdress] = useState(false);
  const [interests, setInterests] = useState([]);

  const getImageFile = (event) => {
    event.preventDefault();
    if (event.target.files[0] !== undefined) {
      var reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const onFinish = (event) => {
    event.preventDefault();
    console.log(event.target);
    history.push("/profile");
  };

  return (
    <main className="signup-container">
      <form onSubmit={(values) => onFinish(values)}>
        <div className="block1">
          <figure className="image-area">
            <label htmlFor="image-upload">Carregue sua foto</label>
            <input
              type="file"
              name="image-upload"
              accept="image/*"
              className="image-upload"
              onChange={(event) => {
                getImageFile(event);
              }}
            />
            {image && <img id="image-uploaded" src={image} alt="Not found" />}
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
                min="1"
                max="4"
                value={value}
                onChange={(evt) => {
                  setValue(evt.target.value);
                }}
                list="ages"
              ></input>
              <datalist id="ages">
                <option value="1" label="13-19" />
                <option value="2" label="20-29" />
                <option value="3" label="30-45" />
                <option value="4" label="45 e acima" />
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

          <input id="submit" type="submit" value="Salvar" />
        </div>
      </form>
    </main>
  );
};

export default SignUp;
