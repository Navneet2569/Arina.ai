import { NextApiRequest, NextApiResponse } from "next";
import { doc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { sendEmail } from "@/utils/emailService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: "Missing enquiry ID" });
    }

    try {
      const enquiryRef = doc(db, "contacts", id);
      const enquiryDoc = await getDoc(enquiryRef);

      if (!enquiryDoc.exists()) {
        return res.status(404).json({ error: "Enquiry not found" });
      }

      const enquiryData = enquiryDoc.data();
      await deleteDoc(enquiryRef);

      // Send email notification
      const emailText = `Dear ${enquiryData.name},\n\nYour enquiry with the subject "${enquiryData.subject}" has been resolved and deleted from our system.\n\nThank you for contacting us.`;
      await sendEmail(
        enquiryData.email,
        "Your enquiry has been resolved",
        emailText
      );

      res.status(200).json({ message: "Enquiry deleted successfully" });
    } catch (error) {
      console.error("Error deleting enquiry:", error);
      res.status(500).json({ error: "Error deleting enquiry" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
