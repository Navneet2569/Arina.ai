import type { NextApiRequest, NextApiResponse } from "next";
import { getData } from "../../_services/firestoreService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await getData("contacts");
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
