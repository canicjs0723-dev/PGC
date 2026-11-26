import type { Metadata } from "next";
import RoomPage from "@/components/RoomPage";
import { pageMeta } from "@/views/meta";

export const metadata: Metadata = pageMeta("zh").businessRoom;

export default function ZhBusinessRoomPage() {
  return <RoomPage kind="business" />;
}
