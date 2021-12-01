const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
];

function contarOvejas(ovejas) {
  return ovejas.filter((oveja) => {
      const lowerName = oveja.name.toLowerCase();
    if (oveja.color === "rojo" && lowerName.includes("n") && lowerName.includes("a")) {
      return oveja;
    }
  });
}

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);
