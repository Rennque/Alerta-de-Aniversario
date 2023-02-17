const birthDay = "2023-03-05";
let today = parseFloat(Date.now());
const diffInDays =
  (parseFloat(Date.parse(birthDay)) - today) / (1000 * 60 * 60 * 24);

if (diffInDays < 0 && diffInDays > -1) {
  console.log("Feliz aniversário!");
} else if (diffInDays < -1) {
  console.log("Seu aniversário já passou. Agora só em 2022!");
} else {
  console.log(
    "Faltam " + Math.ceil(diffInDays) + " dias para o seu aniversário"
  );
}

setInterval(() => {
  const party = "2023-02-17";
  const diffInDays =
    (parseFloat(Date.parse(party)) - today) / (1000 * 60 * 60 * 24);
  if (diffInDays < 0 && diffInDays > -1) {
    console.log("Feliz aniversário!");
  } else if (diffInDays < -1) {
    console.log("Seu aniversário já passou. Agora só em 2022!");
  } else {
    console.log(
      "Faltam " + Math.ceil(diffInDays) + " dias para o seu aniversário"
    );
  }
}, 2000 * 5);
