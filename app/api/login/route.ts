// app/api/login/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === "admin@demo.com" && password === "123456") {
    // Guardamos cookie de sesión
    cookies().set("token", "fake-token", {
      httpOnly: true,
      path: "/",
    });

    return NextResponse.json({ success: true });
  }

  return NextResponse.json(
    { message: "Credenciales inválidas" },
    { status: 401 }
  );
}
