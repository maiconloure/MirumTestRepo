import React, { useState } from "react";
import "./styles.css";

const SignUp = () => {
  const [value, setValue] = useState();

  return (
    <main className="signup-container">
      <figure className="image-area">
        <p>Carregue sua foto</p>
      </figure>
      <hr className="line" />
      <form>
        <div className="field">
          <label htmlFor="name">Nome</label>
          <input
            id="form-input"
            name="name"
            type="text"
            placeholder="Primeiro nome"
          ></input>
          <input id="form-input" type="text" placeholder="Sobrenome"></input>
          <br />
        </div>

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
                console.log(evt.target.value);
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
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input
              id="default"
              name="email"
              type="text"
              placeholder="david@example.com"
            ></input>
          </div>

          <div className="field">
            <label htmlFor="telephone">Telefone</label>
            <input
              id="default"
              name="telephone"
              type="text"
              placeholder="(41) 99999-9999"
            ></input>
          </div>

          <div className="field">
            <label htmlFor="state">Estado</label>
            <select name="state" id="form-select-input">
              <option value="acre">Acre</option>
              <option value="alagoas">Alagoas</option>
              <option value="amapa">Amapá</option>
              <option value="amazonas">Amazonas</option>
              <option value="bahia">Bahia</option>
              <option value="ceara">Ceará</option>
              <option value="espirito-santo">Espírito Santo</option>
              <option value="goias">Goiás</option>
              <option value="maranhao">Maranhão</option>
              <option value="mato-grosso">Mato Grosso</option>
              <option value="mato-grosso-do-sul">Mato Grosso Do Sul</option>
              <option value="minas-gerais">Minas Gerais</option>
              <option value="para">Pará</option>
              <option value="paraiba">Paraíba</option>
              <option value="parana" selected>
                Paraná
              </option>
              <option value="pernambuco">Pernambuco</option>
              <option value="piaui">Piauí</option>
              <option value="rio de Janeiro">Rio de Janeiro</option>
              <option value="rio-grande-do-norte">Rio Grande do Norte</option>
              <option value="rio-grande-do-sul">Rio Grande do Sul</option>
              <option value="rondonia">Rondônia</option>
              <option value="roraima">Roraima</option>
              <option value="santa catarina">Santa Catarina</option>
              <option value="sao-paulo">São Paulo</option>
              <option value="sergipe">Sergipe</option>
              <option value="tocantins">Tocantins</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="country">País</label>
            <select name="country" id="form-select-input">
              <option value="brasil">Brasil</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="country">Endereço</label>
            <select name="country" id="form-select-input">
              <option value="select" disabled selected>
                Selecione
              </option>
              <option value="house">Casa</option>
              <option value="company">Empresa</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="tags">Interesses</label>
            <input id="default" name="tags" type="text" placeholder=""></input>
          </div>
        </div>
        <div id="newsletter">
          <input type="checkbox" name="newsletter" />
          <p>Desejo receber novidades por e-mail.</p>
        </div>
        <button id="save-btn">Salvar</button>
      </form>
    </main>
  );
};

export default SignUp;
