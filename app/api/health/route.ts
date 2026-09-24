import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const services = {
    mongodb: false,
    cloudinary: Boolean(
      process.env.CLOUDINARY_CLOUD_NAME &&
      process.env.CLOUDINARY_API_KEY &&
      process.env.CLOUDINARY_API_SECRET,
    ),
    nisharcApi: Boolean(process.env.NEXT_PUBLIC_NISHARC_API_BASE_URL),
  };

  try {
    const db = await connectDB();
    services.mongodb = db.connection.readyState === 1;
  } catch {
    return NextResponse.json({ ok: false, services }, { status: 503 });
  }

  return NextResponse.json({ ok: Object.values(services).every(Boolean), services });
}
