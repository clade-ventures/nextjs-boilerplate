import * as React from "react";
import { NextPage } from "next";

import { withTranslation } from "@Server/i18n";

import { IErrorPage } from "@Interfaces";


const Error: NextPage<IErrorPage.IProps, IErrorPage.InitialProps> = ({
    t,
    statusCode,
}) => {
    return (
        <div>
            {t("common:Error")}
            {statusCode}
        </div>
    );
};

Error.getInitialProps = async ({ res, err }) => {
    let statusCode;

    if (res) {
        ({ statusCode } = res);
    } else if (err) {
        ({ statusCode } = err);
    }

    return {
        namespacesRequired: ["common"],
        statusCode,
    };
};

export default withTranslation("common")(Error);
