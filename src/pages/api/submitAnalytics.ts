import { getIpAddressFromHeadersDict } from "@/src/agnostic/utils/ipUtils";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const hopefullyIp = getIpAddressFromHeadersDict(req.headers);
    const data = {
        events: [
            {
                ip: hopefullyIp,
                event: req.body.event,
                data: req.body.data,
            },
        ],
    };
    // console.log("data: " + JSON.stringify(data));
    res.status(200).json("ok");
    const endpoint = "http://24.199.102.59:8080/api/submitAnalytics";

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
    const r = await fetch(endpoint, options);
    console.log("submit analytics status = " + r.status);
    if (r.status != 200) {
        const msg = await r.text();
        console.log(msg);
    }
}
