import React from "react";
import "./Timeline.css";

const Timeline = () => {
  const customStyle = {
    "--accent-color": "#41516c",
  };
  return (
    <div className="timeline">
      <h1>UL timeline cards</h1>
      <ul>
        <li style={customStyle}>
          <div className="date">2002</div>
          <div className="title">Title 1</div>
          <div className="descr">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque hic quibusdam fugiat est numquam harum, accusamus suscipit consequatur laboriosam!</div>
        </li>
        <li style={customStyle}>
          <div className="date">2007</div>
          <div className="title">Title 2</div>
          <div className="descr">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero nihil veniam.</div>
        </li>
        <li style={customStyle}>
          <div className="date">2012</div>
          <div className="title">Title 3</div>
          <div className="descr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima consequuntur soluta placeat iure totam commodi repellendus ea delectus, libero fugit quod reprehenderit, sequi quo, et dolorum saepe nulla hic.
          </div>
        </li>
        <li style={customStyle}>
          <div className="date">2017</div>
          <div className="title">Title 4</div>
          <div className="descr">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque.</div>
        </li>
        <li style={customStyle}>
          <div className="date">2022</div>
          <div className="title">Title 5</div>
          <div className="descr">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At tempore aperiam, aliquid, libero veritatis illo ullam a dignissimos nam itaque rem sapiente nesciunt quae facilis hic in quam, excepturi soluta! lor
          </div>
        </li>
        <li style={customStyle}>
          <div className="date">2022</div>
          <div className="title">Title 5</div>
          <div className="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.</div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
