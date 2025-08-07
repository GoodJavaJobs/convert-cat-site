import { useState } from "react";

function EmailCaptureForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      console.log(data);

      if (data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-md my-[40px] mx-auto p-6  text-white rounded-lg shadow-md bg-[#c8553d]">
      <h2
        style={{ color: "white", marginTop: "0px" }}
        className="text-2xl  font-bold "
      >
        Unlock More Free Tools to Grow Your Shopify Store
      </h2>
      <p className="mb-6" style={{ marginTop: "10px" }}>
        Just real tools, strategies, and tips that help you grow your Shopify
        business.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full placeholder-white px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white "
          />
        </div>

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
    </div>
  );
}

export default EmailCaptureForm;
