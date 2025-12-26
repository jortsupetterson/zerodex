import { Bytes } from "bytecodec";
import { CipherAgent, generateKeyset } from "zeyra";
export class Artifact {
  /**
   * @param {{ id: string } & Record<string, unknown>} resource
   */
  static async fromResource(resource) {
    // artifact meta?
    this.cipherAgent = new CipherAgent();
    this.key = resource.id;
    const bytes = Bytes.fromJSON(resource);
    const hash = crypto.subtle.digest("SHA-256", bytes);
    this.digest = Bytes.toBase64UrlString(hash);
    const compressed = await Bytes.toCompressed(bytes);
  }
  static async toResource(artifact) {}
}
