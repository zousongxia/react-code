import React from "react";
import styles from "./app.module.less";
import { HashRouter, useRoutes } from "react-router-dom";
import { router } from "./router";

type Props = {};

const Routes = () => useRoutes(router);

export default function App({}: Props) {
	return (
		<HashRouter>
			<Routes />
		</HashRouter>
	);
}
