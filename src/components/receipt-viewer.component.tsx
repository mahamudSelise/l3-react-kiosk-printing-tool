import { ipAtom } from "@/store";
import { useAtom } from "jotai";
import { Button } from "./ui/button";
import { useCallback, useState } from "react";
import axios from "axios";

function ReceiptViewer() {
  const [ip, setIp] = useAtom(ipAtom);
  const [data, setData] = useState("");

  const resetServer = useCallback(() => {
    setIp("");
  }, [setIp]);

  const fetchData = useCallback(async () => {
    const { data } = await axios.get(`http://${ip}:3000/api/receipts`);

    setData(JSON.stringify(data));
  }, [ip]);

  return (
    <div className="text-center max-w-screen-md mx-auto block pt-20">
      <div className="flex justify-between">
        <p className="mb-5">Conneted to: {ip}</p>
        <div className="flex gap-5">
          <Button onClick={fetchData}>Fetch Data</Button>
          <Button onClick={resetServer}>Reset Server Connection</Button>
        </div>
      </div>

      {data && data.length ? <div className="color-[#fff]">{data}</div> : null}
    </div>
  );
}

export default ReceiptViewer;
