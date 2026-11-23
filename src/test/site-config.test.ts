import { describe, expect, it } from "vitest";
import { SITE, hours, nav } from "@/lib/site-config";

describe("Lovs Pet Shop config", () => {
  it("usa os links oficiais de WhatsApp e Instagram", () => {
    expect(SITE.whatsapp).toBe("https://wa.me/5531993001010");
    expect(SITE.instagram).toBe("https://www.instagram.com/lovspetshop/");
  });
  it("não inventa endereço: só bairro e cidade", () => {
    expect(SITE.location).toBe("Centro, Contagem - MG");
  });
  it("tem 7 dias de horário e navegação para as 7 seções", () => {
    expect(hours).toHaveLength(7);
    expect(nav).toHaveLength(7);
  });
});
