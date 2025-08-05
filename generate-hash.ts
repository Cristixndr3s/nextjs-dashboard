import bcrypt from 'bcrypt';

async function run() {
  const hash = await bcrypt.hash('123456', 10);
  console.log('Hash generado:', hash);
}

run();