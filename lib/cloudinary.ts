import "server-only";
import { v2 as cloudinary } from "cloudinary";
import { cloudinaryEnv } from "./env";

let configured = false;

export function getCloudinary() {
  if (!configured) {
    cloudinary.config({ ...cloudinaryEnv(), secure: true });
    configured = true;
  }
  return cloudinary;
}

export async function uploadPortfolioImage(file: Buffer, filename: string) {
  const client = getCloudinary();

  return new Promise<{ secureUrl: string; publicId: string; width: number; height: number }>((resolve, reject) => {
    const stream = client.uploader.upload_stream(
      {
        folder: "portfolio/projects",
        resource_type: "image",
        public_id: filename,
        overwrite: false,
        transformation: [{ quality: "auto", fetch_format: "auto" }],
      },
      (error, result) => {
        if (error || !result) return reject(error ?? new Error("Cloudinary returned no upload result"));
        resolve({ secureUrl: result.secure_url, publicId: result.public_id, width: result.width, height: result.height });
      },
    );

    stream.end(file);
  });
}
