import React from "react";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_content">
        <div>
          <div className="footer_title">Let's Develop</div>
          <div className="footer_slogan">Ask us anything or just say hi</div>
        </div>

        <div>
          <div>Phone: 09340530495</div>
          <div>Email: example@gmail.com</div>
        </div>
      </div>

      <div className="footer_form">
        <Input label={"Name"} placeholder={"Name"} />
        <br />

        <Input label={"Email"} placeholder={"Email"} />
        <br />

        <TextArea label={"Message"} placeholder={"Message"} />

        <div className="footer_btn">Submit</div>
      </div>
    </div>
  );
}
