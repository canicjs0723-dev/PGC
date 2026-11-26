import type { Metadata } from "next";
import RoomPage from "@/components/RoomPage";
import { pageMeta } from "@/views/meta";

export const metadata: Metadata = pageMeta("en").guestRoom;

export default function GuestRoomPage() {
  return <RoomPage kind="guest" />;
}
