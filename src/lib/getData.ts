"use server";
import { RangeData } from "@/types";
export async function getRangeData(isFixed: boolean): Promise<RangeData> {
   const url = isFixed ? process.env.SECRET_API_FIXED_URL : process.env.SECRET_API_NORMAL_URL;

   if (!url) {
      throw new Error("API URL is not defined in environment variables");
   }

   try {
      const response = await fetch(url, {
         method: "GET",
         headers: {
            Accept: "application/json",
         },
      });

      if (!response.ok) {
         throw new Error(`Error HTTP! estado: ${response.status}`);
      }

      const data = await response.json();

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

      return result;
   } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
   }
}
