import React, { useRef, useState } from "react";
import IframeResizer from "@iframe-resizer/react";

import MessageData from "./message-data";

export default ({ src }) => {
  const iframeRef = useRef(null);
  const [messageData, setMessageData] = useState();

  const onResized = (data) => setMessageData(data);

  const onMessage = (data) => {
    setMessageData(data);
    iframeRef.current.sendMessage("Hello back from the parent page");
  };

  console.log('src', src)

  return (
    <>
      <IframeResizer
        forwardRef={iframeRef}
        inPageLinks
        license="GPL-V3"
        onMessage={onMessage}
        onResized={onResized}
        src={src}
        style={{ width: '100%', height: '100vh'}}
      />
      <MessageData data={messageData} />
    </>
  );
};
