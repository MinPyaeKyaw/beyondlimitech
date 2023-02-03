import React from "react";
import { clients } from "../../../utils/data";
import Btn from "../../common/Btn/Btn";

export default function Clients() {
  return (
    <div className="clients_container">
      <div className="clients_title">Our Clients</div>

      <div className="clients_contentContainer">
        {clients.map((client) => {
          return (
            <div key={client.id} className="clients_imgContainer group">
              <div className="clients_dataContainer group-hover:h-full">
                <div className="clients_name">{client.title}</div>
                <Btn title="Learn" />
              </div>
              <img
                alt={client.title}
                src={client.image}
                className="clients_img"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
