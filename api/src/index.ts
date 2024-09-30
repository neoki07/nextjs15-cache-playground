import { Hono } from "hono";

const app = new Hono();

app.get("/now", (c) => {
  return c.json({
    now: new Date().toISOString(),
  });
});

const server = {
  port: 8000,
  fetch: app.fetch,
};

export default server;
