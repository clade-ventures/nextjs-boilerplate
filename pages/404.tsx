import * as React from "react";
import { NextPage } from "next";

import { IErrorPage } from "@Interfaces";

const Custom404: NextPage<IErrorPage.IProps> = () => {
  return <div>Page Not Found</div>;
};

export default Custom404;
