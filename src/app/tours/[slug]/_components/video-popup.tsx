import {
  Dialog,
  DialogContentCustom,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CirclePlay } from "lucide-react";

const VideoPopup = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full h-full cursor-pointer absolute top-0 left-0 duration-200 transition-all group-hover:bg-black bg-transparent group-hover:bg-opacity-30 z-50">
          <CirclePlay
            strokeWidth={0.75}
            className="relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform text-white size-[3.125rem]"
          />
        </div>
      </DialogTrigger>
      <DialogContentCustom className="p-0 min-w-[70rem] focus-visible:ring-0 focus-visible:outline-0 rounded-3xl bg-transparent border-none">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <video
            src="https://cms.honghaotravel.com/wp-content/uploads/Y2meta.app-HA-GIANG-THE-HEALING-LAND-_-Cinematic-Vlog-Shot-on-Fujifilm-X-T4-1080p.mp4"
            autoPlay
            loop
            controls
            className="transition-transform duration-1000 ease-out w-[82rem] rounded-3xl"
          ></video>
        </DialogHeader>
      </DialogContentCustom>
    </Dialog>
  );
};

export default VideoPopup;
