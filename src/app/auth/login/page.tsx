import { BookmarkIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

export default function LoginPage() {
  return (
    <div>
      <h1>Hello Page Login</h1>
      <Button>
        <BookmarkIcon width="16" height="16" /> Bookmark
      </Button>
    </div>
  );
}
