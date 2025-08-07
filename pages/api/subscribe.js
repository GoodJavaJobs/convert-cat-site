export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const MAILCHIMP_URL =
      "https://fulltimecyber.us21.list-manage.com/subscribe/post?u=ee4a9d926b3e297c6904e45ed&id=dd32f7be5b&f_id=00af41e6f0";

    const response = await fetch(MAILCHIMP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
      body: new URLSearchParams({
        EMAIL: email,
      }),
    });

    if (response.ok) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false, message: "Subscription failed" });
    }
  } catch (error) {
    console.error("Subscription error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
