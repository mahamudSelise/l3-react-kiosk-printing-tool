import IpConfig from "./components/ip-config.component";
import { useAtom } from "jotai";
import { ipAtom } from "./store";
import { useEffect } from "react";
import ReceiptViewer from "./components/receipt-viewer.component";

function App() {
  const [ip] = useAtom(ipAtom);

  useEffect(() => {
    console.log(ip);
  }, [ip]);

  if (!ip) return <IpConfig />;

  return <ReceiptViewer />;
}

export default App;
