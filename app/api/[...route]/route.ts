import { graphqlServer } from "@hono/graphql-server";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { schema } from "@/app/scheme";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.use(
  "/graphql",
  graphqlServer({
    schema,
    graphiql: true,
  })
);

export const GET = handle(app);
export const POST = handle(app);
