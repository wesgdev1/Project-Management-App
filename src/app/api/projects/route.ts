import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  const data = await request.json();
  console.log(data);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const newProject = await prisma.project.create({
    data: {
      title: data.title,
      description: data.description,
      userId: parseInt(session.user.id),
    },
  });
  return NextResponse.json(newProject, { status: 201 });
}
