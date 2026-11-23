import { describe, expect, it } from "vitest";
import { SITE, hours, nav } from "@/lib/site-config";

describe("Lovs Pet Shop config", () => {
  it("usa o link oficial de WhatsApp", () => {
    expect(SITE.whatsapp).toBe("https://wa.me/5531993001010");
  });
  it("usa o endereço confirmado", () => {
    expect(SITE.address).toBe("R. Cel. Augusto Camargos, 702A - Centro, Contagem - MG, 32015-740");
  });
  it("tem os 3 blocos de horário e navegação para as 7 seções", () => {
    expect(hours).toHaveLength(3);
    expect(nav).toHaveLength(7);
  });
});
