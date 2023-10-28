import type { NextRequest } from "next/server";

export const handler = async (req: NextRequest) => {
  const { searchParams } = new URL(req.nextUrl);

  const query = searchParams.get("query");

  const where = encodeURIComponent(JSON.stringify({
    "name": {
      "$exists": true,
      "$regex": query,
    },
    "state": {
      "$exists": true,
    }
  }));

  const res = await fetch(`https://parseapi.back4app.com/classes/University?limit=10&include=state&keys=name,state,state.name&where=${where}`,
    {
      headers: {
        "X-Parse-Application-Id": process.env.BACK4APP_APP_ID ?? "",
        "X-Parse-Master-Key": process.env.BACK4APP_MASTER_KEY ?? "",
      },
    });

  return Response.json(await res.json());
};

export { handler as GET, handler as POST };
