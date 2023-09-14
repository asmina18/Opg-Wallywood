import React from 'react';
 
export const ContactPage = () => {
  return (
    <div>
      <h3>Contact Form</h3>
      <div >
        <form action="">
          <label htmlFor="fname">First Name</label>
          <input name="firstname" placeholder="Your name.." />
          <label htmlFor="email">Email</label>
          <input type name="email" placeholder="Your email..." />
          <textarea placeholder="Write something.."></textarea>
          <button>Send</button>
          
        </form>
      </div>
    </div>
  );
}


