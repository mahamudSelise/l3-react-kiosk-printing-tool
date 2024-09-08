import { useCallback, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useAtom } from "jotai";
import * as store from "@/store";

function IpConfig() {
  const [ip, setIp] = useState("");
  const [, setGlobalIp] = useAtom(store.ipAtom);

  const connectToServer = useCallback(
    (ip: string) => {
      setGlobalIp(ip);
    },
    [setGlobalIp],
  );

  return (
    <div className="text-center max-w-screen-md mx-auto block pt-20">
      <h1 className="mb-5 text-4xl uppercase">Connect To Server</h1>
      <Input
        className="mb-5 max-w-[500px] mx-auto block text-lg"
        type="text"
        placeholder="Server IP address : Port"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
      />
      <Button onClick={() => connectToServer(ip)}>Connect</Button>
    </div>
  );
}

export default IpConfig;
