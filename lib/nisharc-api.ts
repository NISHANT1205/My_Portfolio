const FALLBACK_API_URL = "https://nisharcstudios.vercel.app/api";

export const nishArcApiBaseUrl = (process.env.NEXT_PUBLIC_NISHARC_API_BASE_URL || FALLBACK_API_URL).replace(/\/$/, "");

export type NishArcGame = {
  _id: string;
  name: string;
  slug: string;
  shortDescription?: string;
  playStoreUrl?: string;
  status?: string;
};

export async function getNishArcGames(): Promise<NishArcGame[]> {
  const response = await fetch(`${nishArcApiBaseUrl}/games`, {
    next: { revalidate: 3600 },
    headers: { Accept: "application/json" },
  });

  if (!response.ok) throw new Error(`NishArc API responded with ${response.status}`);
  const payload: unknown = await response.json();

  if (Array.isArray(payload)) return payload as NishArcGame[];
  if (payload && typeof payload === "object" && "games" in payload && Array.isArray(payload.games)) return payload.games as NishArcGame[];
  return [];
}
