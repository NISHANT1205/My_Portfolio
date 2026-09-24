import "server-only";

function requireServerEnv(name: "MONGODB_URI" | "CLOUDINARY_CLOUD_NAME" | "CLOUDINARY_API_KEY" | "CLOUDINARY_API_SECRET") {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`${name} is not configured`);
  return value;
}

export function mongoUri() {
  return requireServerEnv("MONGODB_URI");
}

export function cloudinaryEnv() {
  return {
    cloud_name: requireServerEnv("CLOUDINARY_CLOUD_NAME"),
    api_key: requireServerEnv("CLOUDINARY_API_KEY"),
    api_secret: requireServerEnv("CLOUDINARY_API_SECRET"),
  };
}
