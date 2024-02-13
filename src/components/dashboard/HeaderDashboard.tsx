"use client";
import { Button, Heading } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

export default function HeaderDashboard() {
  const router = useRouter();
  return (
    <div className="flex justify-between p-6">
      <Heading>Tasks</Heading>
      <Button
        onClick={() => {
          router.push("/dashboard/tasks/new");
        }}
      >
        Add Task
      </Button>
    </div>
  );
}
