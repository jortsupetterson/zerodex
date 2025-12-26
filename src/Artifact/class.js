import { Bytes } from "bytecodec";
import { generateKeyset } from "zeyra";
export class Artifact {
  /**
   * @param {{ id: string } & Record<string, unknown>} resource
   */
  constructor(resource) {
    this.id = resource.id;
    const bytes = Bytes.fromJSON(resource);
    const hash = crypto.subtle.digest("SHA-256", bytes);
    this.digest = Bytes.toBase64UrlString(hash);

    this.ciphertext = Bytes.toCompressed(bytes).then((compressed) => {});
  }
  static toResource(Artifact) {}
}
