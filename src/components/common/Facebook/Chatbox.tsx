// @ts-nocheck
"use client";
import { useEffect, useRef } from "react";

const ChatBot = () => {
  const MessengerRef = useRef();

  useEffect(() => {
    const loadMessengerScript = () => {
      const script = document.createElement("script");
      script.defer = true;
      script.src = "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
      script.setAttribute("crossorigin", "anonymous");
      script.onload = () => {
        window.fbAsyncInit = function () {
          window.FB.init({
            xfbml: true,
            version: "v18.0",
          });
        };
        MessengerRef.current.setAttribute("page_id", "105032941775735");
        MessengerRef.current.setAttribute("attribution", "biz_inbox");
      };
      document.body.appendChild(script);
    };

    loadMessengerScript();
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      <div ref={MessengerRef} id="fb-customer-chat" className="fb-customerchat"></div>
    </>
  );
};

export default ChatBot;

// <!-- Messenger Plugin chat Code -->
// <div id="fb-root"></div>

// <!-- Your Plugin chat code -->
// <div id="fb-customer-chat" class="fb-customerchat">
// </div>

// <script>
//   var chatbox = document.getElementById('fb-customer-chat');
//   chatbox.setAttribute("page_id", "105032941775735");
//   chatbox.setAttribute("attribution", "biz_inbox");
// </script>

// <!-- Your SDK code -->
// <script>
//   window.fbAsyncInit = function() {
//     FB.init({
//       xfbml            : true,
//       version          : 'v18.0'
//     });
//   };

//   (function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return;
//     js = d.createElement(s); js.id = id;
//     js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
//     fjs.parentNode.insertBefore(js, fjs);
//   }(document, 'script', 'facebook-jssdk'));
// </script>
