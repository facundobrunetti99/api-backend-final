import app from "../src/app.js";
import { conectDB } from "../src/db.js";
// Conectar a la base de datos
conectDB();

// Exportar la app para Vercel (sin app.listen)
export default app;