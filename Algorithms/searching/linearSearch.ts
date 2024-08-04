let beasts: string[] = [
  "centeur",
  "Godzilla",
  "mosura",
  "Minotaur",
  "hydra",
  "nessie",
];

beasts.indexOf("Godzilla");

beasts.findIndex(function (item): boolean {
  return item === "Godzilla";
});

beasts.find(function (item): boolean {
  return item === "Godzilla";
});

beasts.includes("Godzilla");
