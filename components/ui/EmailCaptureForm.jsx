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
    <div className="max-w-md my-[40px] mx-auto p-6 text-white rounded-lg shadow-md bg-[#c8553d]">
      <h2 className="text-2xl font-bold text-white mt-0">
        Unlock More Free Tools to Grow Your Shopify Store
      </h2>
      <p className="mb-6 mt-2">
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
          className="w-full placeholder-white px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full font-bold text-[#c8553d] bg-white py-2 px-4 rounded-md cursor-pointer"
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
  );
}

export default EmailCaptureForm;
