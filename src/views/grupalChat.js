import {
  communicateWithOpenAI
} from "../lib/openAIApi.js";
import {
  InputChat
} from "../components/InputChat.js";
import {
  BubblesChat
} from "../components/BubblesChat.js";
import data from "../data/dataset.js";
export const GrupalChat = () => {
  const main = document.createElement("main");
  main.innerHTML = `
    <section id="iconschat">
        <div class="recoilArrowG" ><i class="fa-solid fa-arrow-left"></i></div>
        <div class="titleChatG">
        <h1>Chat Pokedex</h1>
        <p>Maestros Pokemón: Conéctate, comparte y domina el mundo Pokémon en nuestro chat grupal.</p>
        </div>
    </section>
    `;
  const mainSection = document.createElement("section");
  const sectionChat = document.createElement("section");
  const divChat = document.createElement("section");
  const sectionInput = document.createElement("section");
  const aside = document.createElement("aside");
  main.setAttribute("id", "grupal-chat");
  mainSection.setAttribute("id", "main-sectionChat");
  sectionChat.setAttribute("id", "sectionChat");
  divChat.setAttribute("id", "divChat");
  sectionInput.setAttribute("id", "inputChatG");
  aside.setAttribute("class", "aside-pokemons");
  sectionInput.appendChild(InputChat());
  const inputStyle = sectionInput.querySelector(".inputChat");
  const buttonStyle = sectionInput.querySelector("#send-message");
  inputStyle.style.width = "100%";
  inputStyle.style.height = "80px";
  // inputStyle.style.margin = "0 0 20px 0";
  buttonStyle.style.right = "420px";
  buttonStyle.style.bottom = "32px";
  aside.innerHTML = ``;
  data.forEach((pokemon) => {
    const pokemonDiv = document.createElement("div");
    pokemonDiv.setAttribute("class", "conected-pokemons");
    if (pokemon.connected) {
      pokemonDiv.classList.add("connected");
    } else {
      pokemonDiv.classList.add("disconnected");
    }
    pokemonDiv.innerHTML = `
        <h3 id="pokemonName">${pokemon.name}</h3>
        <div id="pokemonImagec">
            <img src="${pokemon.image}" alt="${pokemon.name}">
        </div>
        `;
    aside.appendChild(pokemonDiv);
  });
  sectionChat.append(divChat,sectionInput);
  mainSection.append(sectionChat, aside);
  main.appendChild(mainSection);
  // main.appendChild(sectionInput);
  const recoilArrowG = main.querySelector(".recoilArrowG");
  recoilArrowG.addEventListener("click", () => {
    //navigateTo("/home", {});
    history.back();
  });
  const buttonSend = main.querySelector(".sendMessage");
  const input = main.querySelector(".inputChat");
  buttonSend.addEventListener("click", () => {
    // console.log(input.value);
    // input.value="";
    data.forEach((pokemon) => {
      if (input.value) {
        communicateWithOpenAI(pokemon.name, input.value)
          .then((res) => res.json())
          .then((data) => {
            // console.log(input.value , data.choices[0].message.content);
            divChat.appendChild(
              BubblesChat(pokemon, input.value, data.choices[0].message.content)
            );
            divChat.scrollTop = divChat.scrollHeight;
            input.value = "";
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  });
  return main;
};
