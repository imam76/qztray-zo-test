import { useEffect } from "react";
import "./styles.css";
import qz from "qz-tray";

export default function App() {
  // qz tray start here
  const connectWithPrinter = () => {
    qz.security.setCertificatePromise((resolve, reject) => {
      resolve(
        "-----BEGIN CERTIFICATE-----\n" +
          "place your own cert here\n" +
          "place your own cert here\n" +
          "place your own cert here\n" +
          "place your own cert here\n" +
          "place your own cert here\n" +
          "place your own cert here\n" +
          "place your own cert here\n" +
          "place your own cert here\n" +
          "place your own cert here\n" +
          "place your own cert here\n" +
          "place your own cert here\n" +
          "place your own cert here\n" +
          "place your own cert here\n" +
          "place your own cert here\n" +
          "place your own cert here\n" +
          "place your own cert here\n" +
          "place your own cert here\n" +
          "place your own cert here\n" +
          "place your own cert here\n" +
          "place your own cert here\n" +
          "place your own cert here\n" +
          "place your own cert here\n" +
          "-----END CERTIFICATE-----\n"
      );
    });

    if (!qz.websocket.isActive()) {
      console.log("THRU HERE");
      qz.websocket
        .connect({
          host: ["backend.harum.io"],
          port: {
            secure: [8181],
            insecure: [8182]
          },
          usingSecure: true,
          retries: 0,
          keepAlive: 60,
          delay: 0
        })
        .then(() => {
          qz.printers
            .find()
            .then((found) => console.log("FOUND PRINTER", found));
        })
        .catch((error) => console.log(error));
    } else {
      console.log("websocket connection", qz.websocket.getConnectionInfo());
    }
  };

  useEffect(() => {
    console.log("INI PRINT");
    connectWithPrinter();
  }, []);

  return (
    <div className="App">
      <h1>Before you start</h1>
      <h2>You need to create your own certificate</h2>

      <p>
        Tutorial{" "}
        <a href="https://www.youtube.com/watch?v=X72y6ZZTWzE&t=454s">here</a>{" "}
        how to get certificate
      </p>
    </div>
  );
}
