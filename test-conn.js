const { MongoClient } = require('mongodb');
const dns = require('dns');

// Create a promise-based resolver using Google DNS
const resolver = new dns.promises.Resolver();
resolver.setServers(['8.8.8.8', '8.8.4.4']);

// Save original resolve
const originalResolve = dns.promises.resolve;

// Patch ONLY dns.promises.resolve (used for SRV and TXT records)
dns.promises.resolve = async function (hostname, rrtype) {
  console.log(`[INTERCEPTED resolve] hostname: ${hostname}, rrtype: ${rrtype}`);
  try {
    if (rrtype === 'SRV') {
      return await resolver.resolveSrv(hostname);
    }
    if (rrtype === 'TXT') {
      return await resolver.resolveTxt(hostname);
    }
    return await resolver.resolve(hostname, rrtype);
  } catch (err) {
    console.error(`[INTERCEPTED resolve FAILED, falling back]`, err);
    return originalResolve(hostname, rrtype);
  }
};

const srvUri = "mongodb+srv://ozcluin_db_user:j1TohysQswLhn9Yh@cluster0.ur6nwa3.mongodb.net/ozclu?retryWrites=true&w=majority&appName=Cluster0";

async function test() {
  console.log("Testing connection with srv connection string + targeted DNS resolve patch...");
  const client = new MongoClient(srvUri);
  try {
    await client.connect();
    console.log("SUCCESS! Connected to Atlas via SRV successfully.");
    const db = client.db('ozclu');
    const count = await db.collection('submissions').countDocuments();
    console.log("Submissions count:", count);
  } catch (err) {
    console.error("Connection failed:", err);
  } finally {
    await client.close();
  }
}

test();
