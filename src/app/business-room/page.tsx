import type { Metadata } from "next";
import RoomPage from "@/components/RoomPage";
import { pageMeta } from "@/views/meta";

export const metadata: Metadata = pageMeta("en").businessRoom;

export default function BusinessRoomPage() {
  return <RoomPage kind="business" />;
}
