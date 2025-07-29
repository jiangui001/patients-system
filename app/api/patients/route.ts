import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "data/patients.json");
  const data = fs.readFileSync(filePath, "utf-8");
  const patients = JSON.parse(data);
  return NextResponse.json(patients);
}
