import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Nanthawat Sirisuksumran",
    studentId: "660612149",
  });
};
