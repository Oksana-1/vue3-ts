import type Emoji from "@/types/Emoji";

export default interface Entry {
  id: number;
  body: string;
  emoji: Emoji | null;
  createdAt: Date;
  userId: number;
}
