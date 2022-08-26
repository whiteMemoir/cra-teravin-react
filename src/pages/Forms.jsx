import React, { useContext } from "react";
import DataPersonal from "../components/DataPersonal";
import Keahlian from "../components/Keahlian";
import PengalamanKerja from "../components/PengalamanKerja";
import RiwayatPendidikan from "../components/RiwayatPendidikan";
import FormContext from "../context/FormContext";

const Forms = () => {
	const { page } = useContext(FormContext);

	const displayForm = () => {
		// eslint-disable-next-line default-case
		switch (page) {
			case 1:
				return <DataPersonal />;
			case 2:
				return <RiwayatPendidikan />;
			case 3:
				return <PengalamanKerja />;
			case 4:
				return <Keahlian />;
			default:
				return <DataPersonal />;
		}
	};
	return (
		<div className="container">
			<div className=" mt-5">{displayForm()}</div>
		</div>
	);
};

export default Forms;
