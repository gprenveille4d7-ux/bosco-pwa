const DATABASE_NAME = "bosco-v24";
const DATABASE_VERSION = 1;
const NETWORK_STORE = "network-cache";
const CARNET_STORE = "carnet";

function openDatabase(): Promise<IDBDatabase | null> {
  if (typeof indexedDB === "undefined") return Promise.resolve(null);
  return new Promise((resolve) => {
    const request = indexedDB.open(DATABASE_NAME, DATABASE_VERSION);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(NETWORK_STORE)) database.createObjectStore(NETWORK_STORE);
      if (!database.objectStoreNames.contains(CARNET_STORE)) database.createObjectStore(CARNET_STORE);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => resolve(null);
  });
}

export async function readLocalRecord<T>(storeName: "network-cache" | "carnet", key: string): Promise<T | null> {
  const database = await openDatabase();
  if (!database) return null;
  return new Promise((resolve) => {
    const transaction = database.transaction(storeName, "readonly");
    const request = transaction.objectStore(storeName).get(key);
    request.onsuccess = () => resolve((request.result as T | undefined) ?? null);
    request.onerror = () => resolve(null);
    transaction.oncomplete = () => database.close();
  });
}

export async function writeLocalRecord<T>(storeName: "network-cache" | "carnet", key: string, value: T): Promise<boolean> {
  const database = await openDatabase();
  if (!database) return false;
  return new Promise((resolve) => {
    const transaction = database.transaction(storeName, "readwrite");
    transaction.objectStore(storeName).put(value, key);
    transaction.oncomplete = () => {
      database.close();
      resolve(true);
    };
    transaction.onerror = () => {
      database.close();
      resolve(false);
    };
  });
}

export async function removeLocalRecord(storeName: "network-cache" | "carnet", key: string): Promise<void> {
  const database = await openDatabase();
  if (!database) return;
  await new Promise<void>((resolve) => {
    const transaction = database.transaction(storeName, "readwrite");
    transaction.objectStore(storeName).delete(key);
    transaction.oncomplete = () => {
      database.close();
      resolve();
    };
    transaction.onerror = () => {
      database.close();
      resolve();
    };
  });
}

export const V24_STORES = { NETWORK_STORE, CARNET_STORE } as const;
