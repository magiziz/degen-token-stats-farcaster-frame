import { Big } from "big.js";
import { z } from "zod";
import memoryCache from "memory-cache";

const tokenPriceResponseSchema = z.object({
  "degen-base": z.object({
    usd: z.number().nonnegative(),
    usd_24h_vol: z.number().nonnegative(),
    last_updated_at: z.number().nonnegative(),
  }),
});

interface StatsResponse {
  tokenPriceUsd: number;
  volumeUsd: number;
  lastUpdatedAt: number;
}

export class Degen {
  private static roundNumber = (number: number) => {
    return Big(number).round(5).toNumber();
  };

  static getStats = async (): Promise<StatsResponse> => {
    const degenStats = memoryCache.get("degen-stats");

    if (degenStats) {
      return degenStats as StatsResponse;
    }

    const url = `https://api.coingecko.com/api/v3/simple/price?ids=degen-base&vs_currencies=usd&include_24hr_vol=true&include_last_updated_at=true`;

    const response = await fetch(url);

    const data = await response.json().then(tokenPriceResponseSchema.parse);

    const { usd, usd_24h_vol, last_updated_at } = data["degen-base"];

    const formattedData = {
      tokenPriceUsd: Degen.roundNumber(usd),
      volumeUsd: Degen.roundNumber(usd_24h_vol),
      lastUpdatedAt: last_updated_at,
    };

    memoryCache.put("degen-stats", formattedData, 300000);

    return formattedData;
  };
}
