# RAISE UP

### Details Page — Deadline Check & Donate

- This page displays campaign details and handles donations.
  If the campaign deadline has passed, the Donate button is disabled or shows a toast error.

\*\*\* ✅ Key Features

\*\*\* Display campaign info (title, type, date, thumbnail, description, amount)

\*\*\* Check deadline before donation

\*\*\* Show toast or SweetAlert modal for success or error

### React Implementation (Details.jsx)

import { CiBadgeDollar, CiCalendarDate } from "react-icons/ci";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


  const data = useLoaderData();
  const { thumbnail, title, campaignType, description, count, date, _id } = data;

  const handleClick = () => {
    const now = new Date();
    const deadline = new Date(date);

    // ✅ Check if deadline is over
    if (deadline.getTime() < now.getTime()) {
      toast.error("Sorry! This campaign's deadline is over.");
      return;
    }

    // Donate API call
    fetch(`http://localhost:5000/donate/${_id}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        const result = await res.json();
        if (!res.ok) {
          toast.error(result.message || "Donation failed!");
        } else {
          Swal.fire({
            title: "Donation successful!",
            icon: "success",
          });
        }
      })
      .catch(() => toast.error("Something went wrong!"));
  };

## Notes for Deadline Check

1. Always parse the campaign date as a Date object:

  const deadline = new Date(date);

2. Compare with current time:

if (deadline.getTime() < new Date().getTime()) {
  // Deadline over
}



