import { RangeData, Cache } from "../types";

const cache: Cache = {};
const CACHE_TIME = 5 * 60 * 1000; // 5 minutos

export function getDataWithSuspense(isFixed: boolean): RangeData {
   const url = isFixed ? import.meta.env.VITE_API_FIXED_URL : import.meta.env.VITE_API_NORMAL_URL;
   const cacheKey = `getData_${url}`;

   if (cache[cacheKey] && cache[cacheKey].expiry > Date.now()) {
      if (cache[cacheKey].data instanceof Error) {
         throw cache[cacheKey].data;
      }
      return cache[cacheKey].data as RangeData;
   }

   const promise = fetch(url, {
      method: "GET",
      headers: {
         Accept: "application/json",
      },
   })
      .then((response) => {
         if (!response.ok) {
            throw new Error(`Error HTTP! estado: ${response.status}`);
         }
         return response.json();
      })
      .then((data) => {
         const result: RangeData = isFixed
            ? {
                 min: data.min,
                 max: data.max,
                 range: data.rangeValues,
                 default: data.defaultValue,
              }
            : {
                 min: data.min,
                 max: data.max,
              };

         cache[cacheKey] = {
            data: result,
            expiry: Date.now() + CACHE_TIME,
         };

         return result;
      })
      .catch((error) => {
         cache[cacheKey] = {
            data: error,
            expiry: Date.now() + CACHE_TIME,
         };
         throw error;
      });

   throw promise;
}
