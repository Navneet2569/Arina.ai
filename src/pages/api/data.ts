// pages/api/data.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { getData } from "../services/firestoreService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await getData("contacts");
  res.status(200).json(data);
}
