import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

function IFrame({ children, ...props }: any) {
  const [contentRef, setContentRef] = useState<any>(null);
  const mountNode = contentRef?.contentWindow?.document?.body;
  // useEffect(() => {
  //   console.log(contentRef);
  //   contentRef && (contentRef.contentWindow.document.body.style.margin = '0');
  //   if (contentRef) {
  //     // not focusing properly
  //     mountNode.style.margin = '0';
  //     contentRef?.contentWindow?.focus();

  //     // setTimeout(contentRef?.contentWindow?.focus(), 100);
  //   }
  // }, [contentRef]);
  return (
    <iframe
      {...props}
      ref={setContentRef}
      style={{
        boxSizing: 'content-box',
        background: 'transparent',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        fontSize: '26px !important',
        // padding: '10px 0 ',
        // ...style,
      }}
    >
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
}

export default IFrame;
