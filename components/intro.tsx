
import "./intro.css";
import Link from "next/link";
import { useState } from "react";
import { toast, Bounce, Id } from "react-toastify";


export default function Intro() {
  const [active_toasts,set_active_toasts]=useState<Id[]>([]);

  function on_no() {
    const id=toast.warn("Please say yes! :(", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

    active_toasts.push(id);
    set_active_toasts(active_toasts);
  }

  function on_yes() {
    for(const id of active_toasts) {
      toast.dismiss(id);
    }

    set_active_toasts([]);
  }

  return (
    <div className="modal-card">
      <h2 className="modal-title">Will you hangout with me?</h2>
        <p id="snippet" className="modal-text"></p>
        <div className="modal-btns">
          <button type="submit" className="btn-no" onClick={on_no}>No</button>
          <Link href="/when">
            <button type="submit" className="btn-yes" onClick={on_yes}>Yes!</button>
          </Link>
        </div>
    </div>
  );
}





