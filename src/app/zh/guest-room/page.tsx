import type { Metadata } from "next";
import RoomPage from "@/components/RoomPage";
import { pageMeta } from "@/views/meta";

export const metadata: Metadata = pageMeta("zh").guestRoom;

export default function ZhGuestRoomPage() {
  return <RoomPage kind="guest" />;
}
