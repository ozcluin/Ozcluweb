const fs = require('fs');
const path = require('path');
const dns = require('dns');
const { MongoClient } = require('mongodb');

dns.setDefaultResultOrder('ipv4first');
try {
  dns.setServers(['8.8.8.8', '8.8.4.4']);
} catch (e) {
  console.warn("Could not set DNS servers:", e);
}



// Connection URI
const MONGODB_URI = "mongodb+srv://ozcluin_db_user:j1TohysQswLhn9Yh@cluster0.ur6nwa3.mongodb.net/ozclu?retryWrites=true&w=majority&appName=Cluster0";
const DB_NAME = "ozclu";
const SHARED_DB_DIR = path.join(__dirname, '..', 'shared-db');

async function migrate() {
  console.log("Starting data migration to MongoDB...");
  console.log("Connecting to MongoDB...");
  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log("Connected successfully to MongoDB.");
    const db = client.db(DB_NAME);

    // 1. Migrate Submissions
    const submissionsPath = path.join(SHARED_DB_DIR, 'submissions.json');
    if (fs.existsSync(submissionsPath)) {
      const submissions = JSON.parse(fs.readFileSync(submissionsPath, 'utf8'));
      console.log(`Found ${submissions.length} submissions in JSON. Migrating...`);
      const collection = db.collection('submissions');
      for (const sub of submissions) {
        await collection.updateOne(
          { id: sub.id },
          { $set: sub },
          { upsert: true }
        );
      }
      console.log("Submissions migration completed.");
    } else {
      console.log("No submissions.json found to migrate.");
    }

    // 2. Migrate Accounts
    const accountsPath = path.join(SHARED_DB_DIR, 'accounts.json');
    if (fs.existsSync(accountsPath)) {
      const accounts = JSON.parse(fs.readFileSync(accountsPath, 'utf8'));
      console.log(`Found ${accounts.length} accounts in JSON. Migrating...`);
      const collection = db.collection('accounts');
      for (const acc of accounts) {
        await collection.updateOne(
          { id: acc.id },
          { $set: acc },
          { upsert: true }
        );
      }
      console.log("Accounts migration completed.");
    } else {
      console.log("No accounts.json found to migrate.");
    }

    // 3. Migrate Verifications
    const verificationsPath = path.join(SHARED_DB_DIR, 'verifications.json');
    if (fs.existsSync(verificationsPath)) {
      const verifications = JSON.parse(fs.readFileSync(verificationsPath, 'utf8'));
      console.log(`Found ${verifications.length} verifications in JSON. Migrating...`);
      const collection = db.collection('verifications');
      for (const ver of verifications) {
        await collection.updateOne(
          { id: ver.id },
          { $set: ver },
          { upsert: true }
        );
      }
      console.log("Verifications migration completed.");
    } else {
      console.log("No verifications.json found to migrate.");
    }

    console.log("\nMigration completed successfully! All existing data is now in MongoDB.");
  } catch (error) {
    console.error("Migration failed with error:", error);
  } finally {
    await client.close();
    console.log("Database connection closed.");
  }
}

migrate();
