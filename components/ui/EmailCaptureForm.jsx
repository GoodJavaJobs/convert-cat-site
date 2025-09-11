import { useRef, useState } from "react";

function EmailCaptureForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const hiddenFormRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    // Set email in hidden form and submit
    const form = hiddenFormRef.current;
    if (form) {
      form.EMAIL.value = email;
      form.submit();

      // Delay success message (Mailchimp opens in new tab)
      setTimeout(() => {
        setStatus("success");
        setEmail("");
      }, 1000);
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="p-10 text-black bg-white relative">
      {/* Pencil-style background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(0,0,0,0.05),
              rgba(0,0,0,0.05) 1px,
              transparent 1px,
              transparent 4px
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(0,0,0,0.05),
              rgba(0,0,0,0.05) 1px,
              transparent 1px,
              transparent 4px
            )
          `,
        }}
      ></div>

      <div className="max-w-md mx-auto">
        <h2
          className="text-2xl font-bold  mt-0"
          style={{ marginTop: "0px ", marginBottom: "0px" }}
        >
          Unlock More Free Tools to Grow Your Shopify Store
        </h2>
        <p
          className="mb-6 mt-2"
          style={{ marginTop: "10px", marginBottom: "25px" }}
        >
          Just real tools, strategies, and tips that help you grow your Shopify
          business.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full placeholder-black px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full font-bold text-black bg-[#E1FB61] py-2 px-4 rounded-md cursor-pointer"
          >
            {status === "submitting" ? "Subscribing..." : "Subscribe Now"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-white">Thanks for subscribing!</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-white">
            Something went wrong. Please try again.
          </p>
        )}

        {/* Hidden Mailchimp Form */}
        <form
          ref={hiddenFormRef}
          action="https://fulltimecyber.us21.list-manage.com/subscribe/post?u=ee4a9d926b3e297c6904e45ed&amp;id=dd32f7be5b&amp;f_id=00af41e6f0"
          method="POST"
          target="_blank"
          noValidate
          style={{ display: "none" }}
        >
          <input type="email" name="EMAIL" />
          {/* Honeypot field */}
          <div aria-hidden="true">
            <input
              type="text"
              name="b_ee4a9d926b3e297c6904e45ed_dd32f7be5b"
              tabIndex="-1"
              defaultValue=""
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmailCaptureForm;
