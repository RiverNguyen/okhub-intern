import { env } from "@/configs/env.config";
import { Tour } from "./type";

export const fetchTours = async (page: number, perPage: number) => {
  try {
    const res = await fetch(
      `${env.DB_API}/tours?_page=${page}&_limit=${perPage}`
    );

    if (!res.ok) {
      throw new Error(`Error fetching tours: ${res.status} ${res.statusText}`);
    }

    const tours: Tour[] = await res.json();
    const totalTours = parseInt(res.headers.get("X-Total-Count") || "0", 10);

    return { tours, totalTours };
  } catch (error) {
    console.error("Failed to fetch tours:", error);
    return { tours: [], totalTours: 0 };
  }
};
