export default [
  {
    id: "1",
    name: "Bulbasaur",
    description:
      "Bulbasaur es un Pokémon de tipo dual Hierba/Veneno. Tiene un bulbo vegetal en la espalda que crece hasta convertirse en una gran flor a medida que evoluciona.",
    type: {
      typeName: ["Planta", "Veneno"],
      typeImage: [
        "./assets/pokemones/planta.png",
        "./assets/pokemones/veneno.png",
      ],
    },
    image: "./assets/pokemones/Bulbasaur.png",
    weaknesses: {
      weaknessesName: ["Fuego", "Volador", "Hielo", "Psiquico"],
      weaknessesImage: [
        "./assets/pokemones/fuego.png",
        "./assets/pokemones/volador.png",
        "./assets/pokemones/hielo.png",
        "./assets/pokemones/psiquico.png",
      ],
    },
    baseStats: {
      hp: "45",
      attack: "49",
      defense: "49",
      speed: "45",
    },
    height: "0.7", // en metros
    category: "Semilla",
    ability: "Espesura",
    weight: "6.9", // en kilogramos
    evolutions: {
      evolutionName: ["Bulbasaur", "Ivysaur", "Venusaur"],
      evolutionImage: [
        "./assets/pokemones/Bulbasaur.png",
        "./assets/pokemones/Ivysaur.png",
        "./assets/pokemones/Venusaur.png",
      ],
    },
  },
  {
    id: "4",
    name: "Charmander",
    description:
      "Charmander es un Pokémon de tipo Fuego. Tiene una llama en la cola que se vuelve más brillante a medida que evoluciona.",
    type: {
      typeName: ["Fuego"],
      typeImage: ["./assets/pokemones/fuego.png"],
    },
    image: "./assets/pokemones/Charmander.png",
    weaknesses: {
      weaknessesName: ["Agua", "Roca", "Tierra"],
      weaknessesImage: [
        "./assets/pokemones/agua.png",
        "./assets/pokemones/roca.png",
        "./assets/pokemones/tierra.png",
      ],
    },
    baseStats: {
      hp: "39",
      attack: "52",
      defense: "43",
      speed: "65",
    },
    height: "0.6",
    category: "Lagarto",
    ability: "Mar de Llamas",
    weight: "8.5",
    evolutions: {
      evolutionName: ["Charmander", "Charmeleon", "Charizard"],
      evolutionImage: [
        "./assets/pokemones/Charmander.png",
        "./assets/pokemones/Charmeleon.png",
        "./assets/pokemones/Charizard.png",
      ],
    },
  },
  {
    id: "5",
    name: "Charmeleon",
    description:
      "Charmeleon es un Pokémon de tipo Fuego. Tiene una llama más desarrollada en la cola y es más agresivo que Charmander.",
    type: {
      typeName: ["Fuego"],
      typeImage: ["./assets/pokemones/fuego.png"],
    },
    image: "./assets/pokemones/Charmeleon.png",
    weaknesses: {
      weaknessesName: ["Agua", "Roca", "Tierra"],
      weaknessesImage: [
        "./assets/pokemones/agua.png",
        "./assets/pokemones/roca.png",
        "./assets/pokemones/tierra.png",
      ],
    },
    baseStats: {
      attack: "64",
      defense: "58",
      speed: "80",
    },
    height: "1.1",
    category: "Llamas",
    ability: "Mar de Llamas",
    weight: "19.0",
    evolutions: {
      evolutionName: ["Charmander", "Charmeleon", "Charizard"],
      evolutionImage: [
        "./assets/pokemones/Charmander.png",
        "./assets/pokemones/Charmeleon.png",
        "./assets/pokemones/Charizard.png",
      ],
    },
  },
  {
    id: "6",
    name: "Charizard",
    description:
      "Charizard es un Pokémon de tipo Fuego/Volador. Es la evolución final de Charmander y es conocido por sus poderosos ataques de fuego.",
    type: {
      typeName: ["Fuego", "Volador"],
      typeImage: [
        "./assets/pokemones/fuego.png",
        "./assets/pokemones/volador.png",
      ],
    },
    image: "./assets/pokemones/Charizard.png",
    weaknesses: {
      weaknessesName: ["Agua", "Eléctrico", "Roca"],
      weaknessesImage: [
        "./assets/pokemones/agua.png",
        "./assets/pokemones/electrico.png",
        "./assets/pokemones/roca.png",
      ],
    },
    baseStats: {
      hp: "78",
      attack: "84",
      defense: "78",
      speed: "100",
    },
    height: "1.7",
    category: "Fuego",
    ability: "Mar de Llamas",
    weight: "90.5",
    evolutions: {
      evolutionName: ["Charmander", "Charmeleon", "Charizard"],
      evolutionImage: [
        "./assets/pokemones/Charmander.png",
        "./assets/pokemones/Charmeleon.png",
        "./assets/pokemones/Charizard.png",
      ],
    },
  },
  {
    id: "7",
    name: "Squirtle",
    description:
      "Squirtle es un Pokémon de tipo Agua. Es un Pokémon pequeño, con forma de tortuga y caparazón azul.",
    type: {
      typeName: ["Agua"],
      typeImage: ["./assets/pokemones/agua.png"],
    },
    image: "./assets/pokemones/Squirtle.png",
    weaknesses: {
      weaknessesName: ["Eléctrico", "Planta"],
      weaknessesImage: [
        "./assets/pokemones/electrico.png",
        "./assets/pokemones/planta.png",
      ],
    },
    baseStats: {
      hp: "44",
      attack: "48",
      defense: "65",
      speed: "43",
    },
    height: "0.5",
    category: "Tortuguita",
    ability: "Torrente",
    weight: "9.0",
    evolutions: {
      evolutionName: ["Squirtle", "Wartortle", "Blastoise"],
      evolutionImage: [
        "./assets/pokemones/Squirtle.png",
        "./assets/pokemones/Wartortle.png",
        "./assets/pokemones/Blastoise.png",
      ],
    },
  },
  {
    id: "8",
    name: "Wartortle",
    description:
      "Wartortle es un Pokémon de tipo Agua. Evoluciona de Squirtle y es la segunda etapa de su línea evolutiva.",
    type: {
      typeName: ["Agua"],
      typeImage: ["./assets/pokemones/agua.png"],
    },
    image: "./assets/pokemones/Wartortle.png",
    weaknesses: {
      weaknessesName: ["Eléctrico", "Planta"],
      weaknessesImage: [
        "./assets/pokemones/electrico.png",
        "./assets/pokemones/planta.png",
      ],
    },
    baseStats: {
      hp: "59",
      attack: "63",
      defense: "80",
      speed: "58",
    },
    height: "1.0",
    category: "Tortuga",
    ability: "Torrente",
    weight: "22.5",
    evolutions: {
      evolutionName: ["Squirtle", "Wartortle", "Blastoise"],
      evolutionImage: [
        "./assets/pokemones/Squirtle.png",
        "./assets/pokemones/Wartortle.png",
        "./assets/pokemones/Blastoise.png",
      ],
    },
  },
  {
    id: "10",
    name: "Caterpie",
    description:
      "Caterpie es un Pokémon de tipo Bicho. Es la primera etapa de su línea evolutiva y es conocido por su voraz apetito por las hojas.",
    type: {
      typeName: ["Bicho"],
      typeImage: ["./assets/pokemones/bicho.png"],
    },
    image: "./assets/pokemones/Caterpie.png",
    weaknesses: {
      weaknessesName: ["Volador", "Roca", "Fuego"],
      weaknessesImage: [
        "./assets/pokemones/volador.png",
        "./assets/pokemones/roca.png",
        "./assets/pokemones/fuego.png",
      ],
    },
    baseStats: {
      hp: "45",
      attack: "30",
      defense: "35",
      speed: "45",
    },
    height: "0.3",
    category: "Gusano",
    ability: "Polvo Escudo",
    weight: "2.9",
    evolutions: {
      evolutionName: ["Caterpie", "Metapod", "Butterfree"],
      evolutionImage: [
        "./assets/pokemones/Caterpie.png",
        "./assets/pokemones/Metapod.png",
        "./assets/pokemones/Butterfree.png",
      ],
    },
  },
  {
    id: "35",
    name: "Clefairy",
    description:
      "Clefairy es un Pokémon de tipo Hada. Es conocido por su aspecto adorable y su asociación con la luna.",
    type: {
      typeName: ["Hada"],
      typeImage: ["./assets/pokemones/hada.png"],
    },
    image: "./assets/pokemones/Clefairy.png",
    weaknesses: {
      weaknessesName: ["Acero", "Veneno"],
      weaknessesImage: [
        "./assets/pokemones/acero.png",
        "./assets/pokemones/veneno.png",
      ],
    },
    baseStats: {
      hp: "70",
      attack: "45",
      defense: "48",
      speed: "35",
    },
    height: "0.6",
    category: "Hada",
    ability: "Gran Encanto",
    weight: "7.5",
    evolutions: {
      evolutionName: ["Cleffa", "Clefairy", "Clefable"],
      evolutionImage: [
        "./assets/pokemones/Cleffa.png",
        "./assets/pokemones/Clefairy.png",
        "./assets/pokemones/Clefable.png",
      ],
    },
  },
  {
    id: "25",
    name: "Pikachu",
    description:
      "Pikachu es un Pokémon de tipo Eléctrico. Es la forma evolucionada de Pichu y evoluciona a Raichu cuando se expone a una Piedra Trueno.",
    type: {
      typeName: ["Eléctrico"],
      typeImage: ["./assets/pokemones/electrico.png"],
    },
    image: "./assets/pokemones/Pikachu.png",
    weaknesses: {
      weaknessesName: ["Tierra"],
      weaknessesImage: ["./assets/pokemones/tierra.png"],
    },
    baseStats: {
      hp: "35",
      attack: "55",
      defense: "40",
      speed: "90",
    },
    height: "0.4",
    category: "Ratón",
    ability: "Estática",
    weight: "6.0",
    evolutions: {
      evolutionName: ["Pichu", "Pikachu", "Raichu"],
      evolutionImage: [
        "./assets/pokemones/Pichu.png",
        "./assets/pokemones/Pikachu.png",
        "./assets/pokemones/Raichu.png",
      ],
    },
  },
  {
    id: "50",
    name: "Diglett",
    description:
      "Diglett es un Pokémon de tipo Tierra. Es conocido por su capacidad para excavar túneles subterráneos y por las tres protuberancias redondeadas que tiene en la cabeza.",
    type: {
      typeName: ["Tierra"],
      typeImage: ["./assets/pokemones/tierra.png"],
    },
    image: "./assets/pokemones/Diglett.png",
    weaknesses: {
      weaknessesName: ["Agua", "Planta", "Hielo"],
      weaknessesImage: [
        "./assets/pokemones/agua.png",
        "./assets/pokemones/planta.png",
        "./assets/pokemones/hielo.png",
      ],
    },
    baseStats: {
      hp: "10",
      attack: "55",
      defense: "25",
      speed: "95",
    },
    height: "0.2",
    category: "Topo",
    ability: "Velo Arena",
    weight: "0.8",
    evolutions: {
      evolutionName: ["Diglett", "Dugtrio"],
      evolutionImage: [
        "./assets/pokemones/Diglett.png",
        "./assets/pokemones/Dugtrio.png",
      ],
    },
  },
  {
    id: "23",
    name: "Ekans",
    description:
      "Ekans es un Pokémon de tipo Veneno. Es conocido por su habilidad para acercarse sigilosamente a su presa y por su particular sonido de cascabel.",
    type: {
      typeName: ["Veneno"],
      typeImage: ["./assets/pokemones/veneno.png"],
    },
    image: "./assets/pokemones/Ekans.png",
    weaknesses: {
      weaknessesName: ["Tierra", "Psiquico"],
      weaknessesImage: [
        "./assets/pokemones/tierra.png",
        "./assets/pokemones/psiquico.png",
      ],
    },
    baseStats: {
      hp: "35",
      attack: "60",
      defense: "44",
      speed: "55",
    },
    height: "2.0",
    category: "Serpiente",
    ability: "Intimidación",
    weight: "6.9",
    evolutions: {
      evolutionName: ["Ekans", "Arbok"],
      evolutionImage: [
        "./assets/pokemones/Ekans.png",
        "./assets/pokemones/Arbok.png",
      ],
    },
  },
  {
    id: "26",
    name: "Raichu",
    description:
      "Raichu es un Pokémon de tipo Eléctrico. Es la forma evolucionada de Pikachu y es conocido por sus poderes eléctricos mejorados.",
    type: {
      typeName: ["Eléctrico"],
      typeImage: ["./assets/pokemones/electrico.png"],
    },
    image: "./assets/pokemones/Raichu.png",
    weaknesses: {
      weaknessesName: ["Tierra"],
      weaknessesImage: ["./assets/pokemones/tierra.png"],
    },
    baseStats: {
      hp: "60",
      attack: "90",
      defense: "55",
      speed: "100",
    },
    height: "0.8",
    category: "Ratón",
    ability: "Estática",
    weight: "30.0",
    evolutions: {
      evolutionName: ["Pichu", "Pikachu", "Raichu"],
      evolutionImage: [
        "./assets/pokemones/Pichu.png",
        "./assets/pokemones/Pikachu.png",
        "./assets/pokemones/Raichu.png",
      ],
    },
  },
  {
    id: "56",
    name: "Mankey",
    description:
      "Un Pokémon simio de color blanco y marrón con una nariz rosada. Es muy ágil y tiene una personalidad traviesa.",
    type: {
      typeName: ["Lucha"],
      typeImage: ["./assets/pokemones/lucha.png"],
    },
    image: "./assets/pokemones/Mankey.png",
    weaknesses: {
      weaknessesName: ["Volador", "Psiquico", "Hada"],
      weaknessesImage: [
        "./assets/pokemones/volador.png",
        "./assets/pokemones/psiquico.png",
        "./assets/pokemones/hada.png",
      ],
    },
    baseStats: {
      hp: "40",
      attack: "80",
      defense: "35",
      speed: "70",
    },
    height: "0.5",
    category: "Mono Cerdo",
    ability: "Espíritu Vital",
    weight: "28.0",
    evolutions: {
      evolutionName: ["Mankey", "Primeape", "Annihilape"],
      evolutionImage: [
        "./assets/pokemones/Mankey.png",
        "./assets/pokemones/Primeape.png",
        "./assets/pokemones/Annihilape.png",
      ],
    },
  },
  {
    id: "62",
    name: "Poliwrath",
    description:
      "Un Pokémon anfibio con apariencia de rana grande. Tiene una piel azul y una barriga blanca. Es poderoso en combate cuerpo a cuerpo.",
    type: {
      typeName: ["Agua", "Lucha"],
      typeImage: [
        "./assets/pokemones/agua.png",
        "./assets/pokemones/lucha.png",
      ],
    },
    image: "./assets/pokemones/Poliwrath.png",
    weaknesses: {
      weaknessesName: ["Eléctrico", "Planta", "Volador", "Psiquico", "Hada"],
      weaknessesImage: [
        "./assets/pokemones/electrico.png",
        "./assets/pokemones/planta.png",
        "./assets/pokemones/volador.png",
        "./assets/pokemones/psiquico.png",
        "./assets/pokemones/hada.png",
      ],
    },
    baseStats: {
      hp: "90",
      attack: "95",
      defense: "95",
      speed: "70",
    },
    height: "1.3",
    category: "Renacuajo",
    ability: "Absorbe Agua",
    weight: "54.0",
    evolutions: {
      evolutionName: ["Poliwag", "Poliwhirl", "Poliwrath", "Politoed"],
      evolutionImage: [
        "./assets/pokemones/Poliwag.png",
        "./assets/pokemones/Poliwhirl.png",
        "./assets/pokemones/Poliwrath.png",
        "./assets/pokemones/Politoed.png",
      ],
    },
  },
  {
    id: "63",
    name: "Abra",
    description:
      "Abra es un Pokémon pequeño y amarillo con orejas puntiagudas. Tiene poderes psíquicos y puede teletransportarse.",
    type: {
      typeName: ["Psíquico"],
      typeImage: ["./assets/pokemones/psiquico.png"],
    },
    image: "./assets/pokemones/Abra.png",
    weaknesses: {
      weaknessesName: ["Bicho", "Fantasma", "Oscuro"],
      weaknessesImage: [
        "./assets/pokemones/bicho.png",
        "./assets/pokemones/fantasma.png",
        "./assets/pokemones/oscuro.png",
      ],
    },
    baseStats: {
      hp: "25",
      attack: "20",
      defense: "15",
      speed: "90",
    },
    height: "0.9",
    category: "Psi",
    ability: "Sincronía",
    weight: "19.5",
    evolutions: {
      evolutionName: ["Abra", "Kadabra", "Alakazam"],
      evolutionImage: [
        "./assets/pokemones/Abra.png",
        "./assets/pokemones/Kadabra.png",
        "./assets/pokemones/Alakazam.png",
      ],
    },
  },
  {
    id: "66",
    name: "Machop",
    description:
      "Machop es un Pokémon de tipo Lucha. Con su cuerpo musculoso, destaca por su fuerza y dedicación al entrenamiento. Es un compañero valiente y amistoso que siempre está listo para desafíos emocionantes.",
    type: {
      typeName: ["Lucha"],
      typeImage: ["./assets/pokemones/lucha.png"],
    },
    image: "./assets/pokemones/Machop.png",
    weaknesses: {
      weaknessesName: ["Volador", "Psiquico", "Hada"],
      weaknessesImage: [
        "./assets/pokemones/volador.png",
        "./assets/pokemones/psiquico.png",
        "./assets/pokemones/hada.png",
      ],
    },
    baseStats: {
      hp: "70",
      attack: "80",
      defense: "50",
      speed: "35",
    },
    height: "0.8",
    category: "Superpoder",
    ability: "Agallas",
    weight: "19.5",
    evolutions: {
      evolutionName: ["Machop", "Machoke", "Machamp"],
      evolutionImage: [
        "./assets/pokemones/Machop.png",
        "./assets/pokemones/Machoke.png",
        "./assets/pokemones/Machamp.png",
      ],
    },
  },
  {
    id: "79",
    name: "Slowpoke",
    description:
      "Slowpoke es un Pokémon de color rosa pálido con una expresión facial relajada. Es conocido por ser extremadamente lento y por su aparente falta de reacción ante situaciones peligrosas.",
    type: {
      typeName: ["Agua", "Psíquico"],
      typeImage: [
        "./assets/pokemones/agua.png",
        "./assets/pokemones/psiquico.png",
      ],
    },
    image: "./assets/pokemones/Slowpoke.png",
    weaknesses: {
      weaknessesName: ["Eléctrico", "Bicho", "Fantasma", "Oscuro"],
      weaknessesImage: [
        "./assets/pokemones/electrico.png",
        "./assets/pokemones/bicho.png",
        "./assets/pokemones/fantasma.png",
        "./assets/pokemones/oscuro.png",
      ],
    },
    baseStats: {
      hp: "90",
      attack: "65",
      defense: "65",
      speed: "15",
    },
    height: "1.2",
    category: "Atontado",
    ability: "Inadvertido",
    weight: "36.0",
    evolutions: {
      evolutionName: ["Slowpoke", "Slowbro", "Slowking"],
      evolutionImage: [
        "./assets/pokemones/Slowpoke.png",
        "./assets/pokemones/Slowbro.png",
        "./assets/pokemones/Slowking.png",
      ],
    },
  },
  {
    id: "16",
    name: "Pidgey",
    description:
      "Pidgey es un Pokémon pequeño y común de color marrón claro con un pico corto y ancho. Es conocido por ser un excelente volador, capaz de moverse rápidamente en el aire.",
    type: {
      typeName: ["Normal", "Volador"],
      typeImage: [
        "./assets/pokemones/volador.png",
        "./assets/pokemones/normal.png",
      ],
    },
    image: "./assets/pokemones/Pidgey.png",
    weaknesses: {
      weaknessesName: ["Eléctrico", "Roca"],
      weaknessesImage: [
        "./assets/pokemones/electrico.png",
        "./assets/pokemones/roca.png",
      ],
    },
    baseStats: {
      hp: "40",
      attack: "45",
      defense: "40",
      speed: "56",
    },
    height: "0.3",
    category: "Pajarito",
    ability: "Vista Lince",
    weight: "1.8",
    evolutions: {
      evolutionName: ["Pidgey", "Pidgeotto", "Pidgeot"],
      evolutionImage: [
        "./assets/pokemones/Pidgey.png",
        "./assets/pokemones/Pidgeotto.png",
        "./assets/pokemones/Pidgeot.png",
      ],
    },
  },
  {
    id: "2",
    name: "Ivysaur",
    description:
      "Ivysaur es la evolución intermedia de Bulbasaur. Tiene un cuerpo más grande y una flor en su espalda que está en proceso de crecimiento. Esta flor emite un aroma dulce y agradable.",
    type: {
      typeName: ["Planta", "Veneno"],
      typeImage: [
        "./assets/pokemones/planta.png",
        "./assets/pokemones/veneno.png",
      ],
    },
    image: "./assets/pokemones/Ivysaur.png",
    weaknesses: {
      weaknessesName: ["Fuego", "Volador", "Hielo", "Psiquico"],
      weaknessesImage: [
        "./assets/pokemones/fuego.png",
        "./assets/pokemones/volador.png",
        "./assets/pokemones/hielo.png",
        "./assets/pokemones/psiquico.png",
      ],
    },
    baseStats: {
      hp: "60",
      attack: "62",
      defense: "63",
      speed: "60",
    },
    height: "1.0",
    category: "Semilla",
    ability: "Espesura",
    weight: "13.0",
    evolutions: {
      evolutionName: ["Bulbasaur", "Ivysaur", "Venusaur"],
      evolutionImage: [
        "./assets/pokemones/Bulbasaur.png",
        "./assets/pokemones/Ivysaur.png",
        "./assets/pokemones/Venusaur.png",
      ],
    },
  },
  {
    id: "94",
    name: "Gengar",
    description:
      "Gengar es la evolución final de Gastly. Es un Pokémon de tipo Fantasma y Veneno. Se dice que Gengar se esconde en las sombras, esperando el momento adecuado para asustar a sus víctimas.",
    type: {
      typeName: ["Fantasma", "Veneno"],
      typeImage: [
        "./assets/pokemones/fantasma.png",
        "./assets/pokemones/veneno.png",
      ],
    },
    image: "./assets/pokemones/Gengar.png",
    weaknesses: {
      weaknessesName: ["Fantasma", "Oscuro", "Tierra"],
      weaknessesImage: [
        "./assets/pokemones/fantasma.png",
        "./assets/pokemones/oscuro.png",
        "./assets/pokemones/tierra.png",
      ],
    },
    baseStats: {
      hp: "60",
      attack: "65",
      defense: "60",
      speed: "110",
    },
    height: "1.5",
    category: "Sombra",
    ability: "Cuerpo Maldito",
    weight: "40.5",
    evolutions: {
      evolutionName: ["Gastly", "Haunter", "Gengar"],
      evolutionImage: [
        "./assets/pokemones/Gastly.png",
        "./assets/pokemones/Haunter.png",
        "./assets/pokemones/Gengar.png",
      ],
    },
  },
  {
    id: "92",
    name: "Gastly",
    description:
      "Gastly es un Pokémon de tipo Fantasma y Veneno. Se le conoce por su habilidad para aparecer y desaparecer a voluntad. A menudo se le ve flotando en lugares oscuros.",
    type: {
      typeName: ["Fantasma", "Veneno"],
      typeImage: [
        "./assets/pokemones/fantasma.png",
        "./assets/pokemones/veneno.png",
      ],
    },
    image: "./assets/pokemones/Gastly.png",
    weaknesses: {
      weaknessesName: ["Tierra", "Psiquico", "Fantasma", "Oscuro"],
      weaknessesImage: [
        "./assets/pokemones/tierra.png",
        "./assets/pokemones/psiquico.png",
        "./assets/pokemones/fantasma.png",
        "./assets/pokemones/oscuro.png",
      ],
    },
    baseStats: {
      hp: "30",
      attack: "35",
      defense: "30",
      speed: "80",
    },
    height: "1.3",
    category: "Gas",
    ability: "Levitación",
    weight: "0.1",
    evolutions: {
      evolutionName: ["Gastly", "Haunter", "Gengar"],
      evolutionImage: [
        "./assets/pokemones/Gastly.png",
        "./assets/pokemones/Haunter.png",
        "./assets/pokemones/Gengar.png",
      ],
    },
  },
  {
    id: "48",
    name: "Venonat",
    description:
      "Venonat es un Pokémon de tipo Bicho y Veneno. Este Pokémon tiene grandes ojos que le permiten ver en la oscuridad. Se alimenta de hojas cercanas a la luz de la luna.",
    type: {
      typeName: ["Bicho", "Veneno"],
      typeImage: [
        "./assets/pokemones/bicho.png",
        "./assets/pokemones/veneno.png",
      ],
    },
    image: "./assets/pokemones/Venonat.png",
    weaknesses: {
      weaknessesName: ["Volador", "Roca", "Fuego", "Psiquico"],
      weaknessesImage: [
        "./assets/pokemones/volador.png",
        "./assets/pokemones/roca.png",
        "./assets/pokemones/fuego.png",
        "./assets/pokemones/psiquico.png",
      ],
    },
    baseStats: {
      hp: "60",
      attack: "55",
      defense: "50",
      speed: "45",
    },
    height: "1.0",
    category: "Insecto",
    ability: "Ojo Compuesto",
    weight: "30.0",
    evolutions: {
      evolutionName: ["Venonat", "Venomoth"],
      evolutionImage: [
        "./assets/pokemones/Venonat.png",
        "./assets/pokemones/Venomoth.png",
      ],
    },
  },
  {
    id: "104",
    name: "Cubone",
    description:
      "Cubone es un Pokémon de tipo Tierra. Este Pokémon lleva siempre consigo un cráneo que una vez perteneció a su madre. Se dice que llora en solitario durante la noche por la pérdida de su progenitora.",
    type: {
      typeName: ["Tierra"],
      typeImage: ["./assets/pokemones/tierra.png"],
    },
    image: "./assets/pokemones/Cubone.png",
    weaknesses: {
      weaknessesName: ["Agua", "Planta", "Hielo"],
      weaknessesImage: [
        "./assets/pokemones/agua.png",
        "./assets/pokemones/planta.png",
        "./assets/pokemones/hielo.png",
      ],
    },
    baseStats: {
      hp: "50",
      attack: "50",
      defense: "95",
      speed: "35",
    },
    height: "0.4",
    category: "Solitario",
    ability: "Cabeza Roca",
    weight: "6.5",
    evolutions: {
      evolutionName: ["Cubone", "Marowak"],
      evolutionImage: [
        "./assets/pokemones/Cubone.png",
        "./assets/pokemones/Marowak.png",
      ],
    },
  },
  {
    id: "113",
    name: "Chansey",
    description:
      "Chansey es un Pokémon de tipo Normal. Se dice que trae felicidad a quien se encuentra con ella, ya que siempre lleva un huevo en su bolsa y comparte este con aquellos que están enfermos o heridos.",
    type: {
      typeName: ["Normal"],
      typeImage: ["./assets/pokemones/normal.png"],
    },
    image: "./assets/pokemones/Chansey.png",
    weaknesses: {
      weaknessesName: ["Lucha"],
      weaknessesImage: ["./assets/pokemones/lucha.png"],
    },
    baseStats: {
      hp: "250",
      attack: "5",
      defense: "5",
      speed: "50",
    },
    height: "1.1",
    category: "Huevo",
    ability: "Cura Natural",
    weight: "34.6",
    evolutions: {
      evolutionName: ["Happiny", "Chansey", "Blissey"],
      evolutionImage: [
        "./assets/pokemones/Happiny.png",
        "./assets/pokemones/Chansey.png",
        "./assets/pokemones/Blissey.png",
      ],
    },
  },
  {
    id: "123",
    name: "Scyther",
    description:
      "Scyther es un Pokémon de tipo Bicho/Volador. Es conocido por su velocidad y habilidades en el combate. Tiene afiladas guadañas en lugar de manos y es capaz de volar a gran velocidad para atacar a sus oponentes.",
    type: {
      typeName: ["Bicho", "Volador"],
      typeImage: [
        "./assets/pokemones/bicho.png",
        "./assets/pokemones/volador.png",
      ],
    },
    image: "./assets/pokemones/Scyther.png",
    weaknesses: {
      weaknessesName: ["Eléctrico", "Roca", "Hielo"],
      weaknessesImage: [
        "./assets/pokemones/electrico.png",
        "./assets/pokemones/roca.png",
        "./assets/pokemones/hielo.png",
      ],
    },
    baseStats: {
      hp: "70",
      attack: "110",
      defense: "80",
      speed: "105",
    },
    height: "1.5",
    category: "Mantis",
    ability: "Emjambre",
    weight: "56.0",
    evolutions: {
      evolutionName: ["Scyther", "Scizor", "Kleavor"],
      evolutionImage: [
        "./assets/pokemones/Scyther.png",
        "./assets/pokemones/Scizor.png",
        "./assets/pokemones/Kleavor.png",
      ],
    },
  },
  {
    id: "125",
    name: "Electabuzz",
    description:
      "Electabuzz es un Pokémon de tipo Eléctrico. Se caracteriza por su pelaje amarillo y el patrón de rayas negras de su cuerpo. Puede descargar potentes descargas eléctricas.",
    type: {
      typeName: ["Eléctrico"],
      typeImage: ["./assets/pokemones/electrico.png"],
    },
    image: "./assets/pokemones/Electabuzz.png",
    weaknesses: {
      weaknessesName: ["Tierra"],
      weaknessesImage: ["./assets/pokemones/tierra.png"],
    },
    baseStats: {
      hp: "65",
      attack: "83",
      defense: "57",
      speed: "105",
    },
    height: "1.1",
    category: "Eléctrico",
    ability: "Estática",
    weight: "30.0",
    evolutions: {
      evolutionName: ["Elekid", "Electabuzz", "Electivire"],
      evolutionImage: [
        "./assets/pokemones/Elekid.png",
        "./assets/pokemones/Electabuzz.png",
        "./assets/pokemones/Electivire.png",
      ],
    },
  },
  {
    id: "173",
    name: "Cleffa",
    description:
      "Cleffa es un Pokémon de tipo Hada. Tiene forma de estrella y es conocido por su ternura y suaves movimientos. Se dice que ver a Cleffa en la noche estrellada trae buena fortuna.",
    type: {
      typeName: ["Hada"],
      typeImage: ["./assets/pokemones/hada.png"],
    },
    image: "./assets/pokemones/Cleffa.png",
    weaknesses: {
      weaknessesName: ["Acero", "Veneno"],
      weaknessesImage: [
        "./assets/pokemones/acero.png",
        "./assets/pokemones/veneno.png",
      ],
    },
    baseStats: {
      hp: "50",
      attack: "25",
      defense: "28",
      speed: "15",
    },
    height: "0.3",
    category: "Estrella",
    ability: "Gran Encanto",
    weight: "3.0",
    evolutions: {
      evolutionName: ["Cleffa", "Clefairy", "Clefable"],
      evolutionImage: [
        "./assets/pokemones/Cleffa.png",
        "./assets/pokemones/Clefairy.png",
        "./assets/pokemones/Clefable.png",
      ],
    },
  },
  {
    id: "175",
    name: "Togepi",
    description:
      "Togepi es un Pokémon de tipo Hada. Tiene forma de huevo con espinas en su cáscara. Se dice que aquellos que lo abrazan con cariño serán bendecidos con felicidad y buena suerte.",
    type: {
      typeName: ["Hada"],
      typeImage: ["./assets/pokemones/hada.png"],
    },
    image: "./assets/pokemones/Togepi.png",
    weaknesses: {
      weaknessesName: ["Acero", "Veneno"],
      weaknessesImage: [
        "./assets/pokemones/acero.png",
        "./assets/pokemones/veneno.png",
      ],
    },
    baseStats: {
      hp: "35",
      attack: "20",
      defense: "65",
      speed: "20",
    },
    height: "0.3",
    category: "Bolaclavos",
    ability: "Gracia Serena",
    weight: "1.5",
    evolutions: {
      evolutionName: ["Togepi", "Togetic", "Togekiss"],
      evolutionImage: [
        "./assets/pokemones/Togepi.png",
        "./assets/pokemones/Togetic.png",
        "./assets/pokemones/Togekiss.png",
      ],
    },
  },
  {
    id: "246",
    name: "Larvitar",
    description:
      "Larvitar es un Pokémon de tipo Roca/Tierra. Tiene la piel dura y áspera y vive en montañas y cuevas. Pasa la mayor parte de su vida cavando y comiendo minerales.",
    type: {
      typeName: ["Roca", "Tierra"],
      typeImage: [
        "./assets/pokemones/roca.png",
        "./assets/pokemones/tierra.png",
      ],
    },
    image: "./assets/pokemones/Larvitar.png",
    weaknesses: {
      weaknessesName: ["Agua", "Planta", "Hielo", "Lucha", "Tierra", "Acero"],
      weaknessesImage: [
        "./assets/pokemones/agua.png",
        "./assets/pokemones/planta.png",
        "./assets/pokemones/hielo.png",
        "./assets/pokemones/lucha.png",
        "./assets/pokemones/tierra.png",
        "./assets/pokemones/acero.png",
      ],
    },
    baseStats: {
      hp: "50",
      attack: "64",
      defense: "50",
      speed: "41",
    },
    height: "0.6",
    category: "Piel Roca",
    ability: "Agallas",
    weight: "72.0",
    evolutions: {
      evolutionName: ["Larvitar", "Pupitar", "Tyanitar"],
      evolutionImage: [
        "./assets/pokemones/Larvitar.png",
        "./assets/pokemones/Pupitar.png",
        "./assets/pokemones/Tyanitar.png",
      ],
    },
  },
];
