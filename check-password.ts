// check-password.ts
import bcrypt from 'bcrypt';

// Reemplaza esto con el hash real que tienes en tu base de datos
const hashedPasswordFromDB = '$2b$10$JhGyC4OX9KuezLFkoVRQBubUzv6WKivgQ6FavGqk0SB1T5T3fMHlW'; // ⬅️ pon aquí tu hash

// Contraseña que quieres probar
const plainPassword = '123456';

async function run() {
  const match = await bcrypt.compare(plainPassword, hashedPasswordFromDB);
  if (match) {
    console.log('✅ La contraseña es válida');
  } else {
    console.log('❌ La contraseña NO coincide con el hash');
  }
}

run();