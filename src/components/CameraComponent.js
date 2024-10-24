import React, { useRef, useState } from "react";
import styles from "./CameraComponent.module.css";

const CameraComponent = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [imageData, setImageData] = useState(null);
  // Función para pedir permisos de la cámara y mostrar el video en pantalla
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (error) {
      console.error("Error trying to access camera", error);
    }
  };
  // Función para capturar la imagen desde el video
  const capturePhoto = () => {
    const context = canvasRef.current.getContext("2d");
    canvasRef.current.width = videoRef.current.videoWidth;
    canvasRef.current.height = videoRef.current.videoHeight;
    context.drawImage(
      videoRef.current,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height,
    );

    const image = canvasRef.current.toDataURL("image/png"); // Guardar la imagen en base64
    setImageData(image);
  };
  // Función para subir la foto capturada al backend
  const handleSubmit = async () => {
    if (imageData) {
      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: imageData }),
        });
        const result = await response.json();
        console.log("Successfuly uploaded photo", result);
      } catch (error) {
        console.error("Error trying to upload photo", error);
      }
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={startCamera}>
          Enable camera
        </button>
        <button className={styles.button} onClick={capturePhoto}>
          Take photo
        </button>
        <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
        {imageData && (
          <img
            src={imageData}
            alt="captured"
            className={styles.capturedImage}
          />
        )}
        <button className={styles.button} onClick={handleSubmit}>
          Upload photo
        </button>
      </div>
      <video ref={videoRef} className={styles.video}></video>
    </div>
  );
};
export default CameraComponent;
