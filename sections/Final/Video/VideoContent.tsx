import { VideoWidget as Video } from "apps/admin/widgets.ts";
import VideoComponent from "../../../components/ui/Video/index.tsx";

export interface Props {
  video: Video;
}

export default function Section({
  video = "",
}: Props) {
  return (
      <div>
          <VideoComponent video={video} />
      </div>
  );
}