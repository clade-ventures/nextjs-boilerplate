import * as React from "react";
import { NextPage } from "next";


import { withTranslation } from "@Server/i18n";

import { IErrorPage } from "@Interfaces";

const Custom404: NextPage<IErrorPage.IProps> = ({ t }) => {
    return (
        <div>
            Page Not Found
        </div>
    );
};

export default withTranslation("common")(Custom404);
