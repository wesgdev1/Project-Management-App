import {
  Blockquote,
  Card,
  Container,
  Grid,
  Heading,
  Text,
} from "@radix-ui/themes";

import HeaderDashboard from "../../components/dashboard/HeaderDashboard";
import prisma from "@/libs/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import ProjectCard from "@/components/projects/ProjectCard";

async function loadProjects() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");

  const projects = await prisma.project.findMany({
    where: {
      userId: parseInt(session.user.id),
    },
  });
  return projects;
}
export default async function DashboardPage() {
  const projects = await loadProjects();
  console.log(projects);
  return (
    <Container className="mt-10">
      <HeaderDashboard />
      <Grid columns="3" gap={"4"}>
        {projects.map((project) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </Grid>
    </Container>
  );
}
