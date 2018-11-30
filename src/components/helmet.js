import React from "react";
import { Helmet } from "react-helmet";

const HelmetHead = props => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <script type="text/javascript">
        window.$crisp=[];window.CRISP_WEBSITE_ID="59674e9a-5024-498c-806c-ff38fc41243b";(function()&#123;d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);&#125;)();
      </script>{" "}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-74434504-4"
      />
      <script>
        window.dataLayer = window.dataLayer || []; function
        gtag()&#123;dataLayer.push(arguments);&#125; gtag('js', new Date());
        gtag('config', 'UA-74434504-2');
      </script>
    </Helmet>
  );
};

export default HelmetHead;
