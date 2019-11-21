require('dotenv').config();

const { Photon } = require('@generated/photon');
const photon = new Photon();

async function main() {
  const allUsers = await photon.users.findMany({
    include: { blogs: true, comments: true },
  });
  console.log(`Retrieved all published users: `, allUsers);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect();
  });
