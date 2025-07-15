// app/api/logout/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  // Elimina la cookie de sesión
  cookies().delete("token");

  return NextResponse.json({ success: true });
}
