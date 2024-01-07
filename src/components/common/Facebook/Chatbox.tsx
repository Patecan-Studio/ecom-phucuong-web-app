// @ts-nocheck
"use client";
import { useEffect, useRef } from "react";

const ChatBot = () => {
  const MessengerRef = useRef();

  useEffect(() => {
    async function loadMessengerScript() {
      try {
        const fbSDK = await import('https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js');
        window.fbAsyncInit = function () {
          window.FB.init({
            xfbml: true,
            version: "v18.0",
          });
        };

        fbSDK.default(document, "script", "facebook-jssdk");
        MessengerRef.current.setAttribute("page_id", "105032941775735");
        MessengerRef.current.setAttribute("attribution", "biz_inbox");
      } catch (error) {
        console.error("Error loading Facebook Messenger SDK", error);
      }
    }

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
