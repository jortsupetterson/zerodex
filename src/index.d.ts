export type accountResources = Array<{}>;

type CollectionName = string;
type DocumentMetas = {
  id: Base64URLString;
  privateKey: JsonWebKey;
  symmetricKey: JsonWebKey;
  publicKey: JsonWebKey;
}[];

export type ArtifactMeta = Record<CollectionName, DocumentMetas>;
export type Artifact = {};
