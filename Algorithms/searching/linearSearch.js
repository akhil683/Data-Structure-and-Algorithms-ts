var beasts = ["centeur", "Godzilla", "mosura", "Minotaur", "hydra", "nessie"];
beasts.indexOf("Godzilla");
beasts.findIndex(function (item) {
  return item === "Godzilla";
});
beasts.find(function (item) {
  return item === "Godzilla";
});
beasts.includes("Godzilla");
