import nock from "nock";
import dotenv from "dotenv";
import "@testing-library/jest-dom";

dotenv.config({ path: ".env.test" });

const BaseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

nock(BaseUrl, {
    reqheaders: {
        "content-type": "application/json",
    },
})
    .post(
        "/login",
        JSON.stringify({
            email: "eve.holt@reqres.in",
            password: "cityslicka",
        })
    )
    .reply(200, {
        token: "12345678910",
    });
