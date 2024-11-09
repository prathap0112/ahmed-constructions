import { useState } from "react";
// Css
import "./Map.css";

function Map() {
  const [show, setShow] = useState(false);

  const clickHandler = () => setShow(true);

  return (
    <div className="parent-map">
      <p>For privacy reasons Google Maps needs your permission to be loaded.</p>

      <button className="btn btn-primary" onClick={clickHandler}>
        {show ? "loading..." : "I accept"}
      </button>

      {show && (
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.178633934102!2d79.64972797570589!3d11.100060753139513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5521005355963d%3A0xd829e45cce81c215!2sAhmed%20Construction!5e0!3m2!1sen!2sin!4v1731128710433!5m2!1sen!2sin"
          title="map"
        ></iframe>
      )}
    </div>
  );
}

export default Map;
