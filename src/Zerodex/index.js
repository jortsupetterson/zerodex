import { storage } from "offdex";
import { generateKeyset, CipherAgent } from "zeyra";

export class Zerodex {
  /**
   * @param {`credential:${Base64URLString}`} credentialId WebAuthn assertion credential id
   * @param {Uint8Array} prfExtensionResult WebAuthn assertion prf extension result
   */
  static async signIn(credentialId, prfExtensionResult) {
    const rawKey = await crypto.subtle.importKey(
      "raw",
      prfExtensionResult,
      { name: "AES-GCM" },
      true,
      ["encrypt", "decrypt"]
    );

    const symmetricJwk = await crypto.subtle.exportKey("jwk", rawKey);
    const credentialCipherAgent = new CipherAgent(symmetricJwk);

    const credentialArtifact = await storage.get(credentialId);
    const credentialMetaBytes = await credentialCipherAgent.decrypt();
  }

  static async signUp(credentialId, symmetricKeyBytes) {}
}
