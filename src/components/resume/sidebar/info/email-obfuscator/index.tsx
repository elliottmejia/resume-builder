import React, { useEffect, useRef } from "react";

const EmailObfuscator = () => {
  const loaderRef = useRef(null);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const processImage = () => {
      const canvas = canvasRef.current;
      const image = imageRef.current;
      const width = (canvas.width = canvas.height = image.width);
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0);
      let binaryString = "";
      const charCode = String.fromCharCode;
      const imageData = context.getImageData(0, 0, width, width).data;
      const bits = [];
      let count = 0;

      for (let i = 0; i < imageData.length; i++) {
        count++;
        if (count === 4) {
          count = 0;
          if (imageData[i] === 0) {
            break;
          }
          continue;
        }
        bits.push(imageData[i] > 127 ? 1 : 0);
        if (bits.length >= 7) {
          binaryString += charCode(parseInt(bits.splice(0, 7).join(""), 2));
        }
      }

      try {
        for (let i = 0; i < 100; i++) {
          binaryString = atob(binaryString);
        }
      } catch (error) {
        let decodedString = "";
        for (let i = 0; i < binaryString.length; i += 3) {
          const chunk = binaryString.substr(i, 3).replace(/\./, "");
          const char = charCode(parseInt(chunk, 10));
          decodedString += char;
        }
        loaderRef.current.outerHTML = decodedString;
      }
    };

    const image = imageRef.current;
    if (image.complete && image.naturalHeight !== 0) {
      processImage();
    } else {
      image.onload = processImage;
    }
  }, []);

  return (
    <>
      <span ref={loaderRef}></span>
      <span>Loading Email...</span>
      <img
        ref={imageRef}
        src="email-obfuscator.png"
        style={{ display: "none" }}
      />
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
    </>
  );
};

export default EmailObfuscator;
