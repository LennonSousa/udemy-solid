import { Collection, MongoClient } from "mongodb";

export const MongoHelper = {
  mongoClient: null as unknown as MongoClient,

  async connect(uri: string): Promise<void> {
    this.mongoClient = await MongoClient.connect(uri);
  },

  async disconnect(): Promise<void> {
    this.mongoClient.close();
  },

  getCollection(name: string): Collection {
    return this.mongoClient.db().collection(name);
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  map(collection: any): any {
    const { _id, ...collectionWithoutId } = collection;

    return { ...collectionWithoutId, id: _id };
  },
};
