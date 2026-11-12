import express from "express";

export const app = express();

const users = [
  { id: 1, name: "Ada Lovelace" },
  { id: 2, name: "Alan Turing" },
];

app.get("/users", (_req, res) => {
  res.json(users);
});

if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
}
