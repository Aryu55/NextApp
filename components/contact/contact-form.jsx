import classes from "./contact-form.module.css";
import { useState, useRef, useEffect } from "react";
import Notification from "../ui/notification";

const sendContactData = async (Contactdata) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(Contactdata),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
};

const contactform = () => {
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState()
  const enteredEmail = useRef();
  const enteredMessage = useRef();
  const enteredName = useRef();

  useEffect(()=>{
      if(requestStatus === "success" || requestStatus === "error"){
          const timer = setTimeout(()=>{
              setRequestStatus(null)
              setRequestError(null)
          },3000)
          return () => clearTimeout(timer)
      }
  },[requestStatus])

  const sendMessageHandler = async (event) => {
    event.preventDefault();

    const email = enteredEmail.current.value;
    const message = enteredMessage.current.value;
    const name = enteredName.current.value;
    setRequestStatus("pending");
    try {
      await sendContactData({ email, name, message });
      setRequestStatus("success");
      
    } catch (error) {
      setRequestStatus("error");
    }
  };
  let notification;
  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Send message...",
      message: "Your message is comming",
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Message sent..",
      message: "Your message has been sent",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Message not sent..",
      message: "Your message has not been sent",
    };
  }
  console.log(notification);
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" required ref={enteredEmail} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" required ref={enteredName} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Your Message</label>
          <textarea id="message" rows="5" ref={enteredMessage}></textarea>
        </div>
        <div className={classes.control}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />   
      )}   
    </section>
  );
};

export default contactform;
