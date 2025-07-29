import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data/patients.json");

export async function PUT(request: Request) {
  const body = await request.json();
  const { id, ...update } = body;
  const data = fs.readFileSync(filePath, "utf-8");
  let patients = JSON.parse(data);
  patients = patients.map((p: Patient) =>
    p.id === id ? { ...p, ...update } : p
  );
  fs.writeFileSync(filePath, JSON.stringify(patients, null, 2));
  return NextResponse.json({ success: true, patients });
}
