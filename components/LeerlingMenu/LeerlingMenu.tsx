import React, { SyntheticEvent } from "react";
import classes from "./LeerlingMenu.module.scss";
import { FaInfoCircle, FaMailBulk } from "react-icons/fa";

const LeerlingMenu = (props: {
	weeknr?: number;
	
}) => {
  return (
    <div className={classes.LeerlingMenu}>
			<h2>Week</h2>
			<table>
				<tbody>
					<tr>
						<td>{props.weeknr==1 ? "1" : <a href="/voor-leerlingen/week-1">1</a>}</td>
						<td>{props.weeknr==2 ? "2" : <a href="/voor-leerlingen/week-2">2</a>}</td>
						<td>{props.weeknr==3 ? "3" : <a href="/voor-leerlingen/week-3">3</a>}</td>
						<td>{props.weeknr==4 ? "4" : <a href="/voor-leerlingen/week-4">4</a>}</td>
						<td>{props.weeknr==5 ? "5" : <a href="/voor-leerlingen/week-5">5</a>}</td>
					</tr>
				</tbody>
			</table>
		</div>
  );
};

export default LeerlingMenu;
