"use client";
import { Project } from "@prisma/client";
import { Blockquote, Card, Heading, Text } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

interface Props {
  project: Project;
}
export default function ProjectCard({ project }: Props) {
  const router = useRouter();
  return (
    <Card
      key={project.id}
      className="hover:opacity-75 hover:cursor-pointer"
      onClick={() => {
        router.push(`/dashboard/tasks/${project.id}`);
      }}
    >
      <Heading>{project.title}</Heading>
      <Text className="text-slate-500">{project.description}</Text>
      <Blockquote>{project.description}</Blockquote>
    </Card>
  );
}
