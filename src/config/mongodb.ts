import { connect } from "mongoose";

const connectDb = async () => {
  try {
    const uri = process.env.URI_DB;

    if (!uri) {
      console.log("❌ Error: URI_DB no definida en las variables de entorno");
      return;
    }

    await connect(uri);
    console.log("✅ Conectado con éxito a Mongodb");
  } catch (error) {
    const err = error as Error;
    console.log("❌ No se pudo conectar con la base de datos:", err.message);
  }
};

export { connectDb };