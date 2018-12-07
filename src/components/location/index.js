import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26248.491532168533!2d135.47764045682172!3d34.678398748164504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e6553406e2e1%3A0xc55bc16ee46a2fe7!2sOsaka%2C+Osaka+Prefecture%2C+Japan!5e0!3m2!1sen!2sng!4v1544195994651"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
        title="location"
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
