import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import React from "react";

export function ImageModal({
  title,
  src,
  altText,
}: {
  title: string;
  src: string;
  altText: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <img className="aspect-[1/0.8] img_zoom" alt={altText} src={src} />
        </button>
      </DialogTrigger>
      <p className="mt-3 text-center">{title}</p>
      <DialogContent className="bg-white max-w-[720px] w-vw[80%] sm:w-50">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            <img className="aspect-[1]" alt={altText} src={src} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
