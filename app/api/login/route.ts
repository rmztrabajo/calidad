// app/api/login/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // 🔒 Simulación de login (puedes reemplazar con Supabase si quieres)
  const validUser = email === "admin@demo.com" && password === "123456";

  if (!validUser) {
    return NextResponse.json(
      { message: "Credenciales inválidas" },
      { status: 401 }
    );
  }

  // ✅ Guardar cookie (simulación de token)
  cookies().set("token", "fake-token", {
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  return NextResponse.json({ success: true });
}
