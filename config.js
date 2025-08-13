import dotenv from 'dotenv';
dotenv.config();

export const TOKEN_SECRET = process.env.TOKEN_SECRET;
export const MONGODB_URI = process.env.MONGODB_URI;
export const PORT = process.env.PORT || 3000;

if (!TOKEN_SECRET) {
  throw new Error("TOKEN_SECRET no está definido en .env");
}

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI no está definido en .env");
}