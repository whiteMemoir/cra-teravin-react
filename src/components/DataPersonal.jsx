import React, { useContext, useState } from "react";
import FormContext from "../context/FormContext";
import dataPersonal from "../data/personal.json";

const DataPersonal = () => {
	const { formData, setFormData, nextPage } = useContext(FormContext);
	const [errorMsg, setErrorMsg] = useState({
		namaDepan: "",
		namaBelakang: "",
		email: "",
		telepon: "",
		alamat: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleClick = () => {
		if (validate()) {
			nextPage();
		}
	};

	const validate = () => {
		let isValid = true;
		if (formData.namaDepan.length < 3) {
			isValid = false;
			setErrorMsg((prevState) => ({
				...prevState,
				namaDepan: "Nama minimal 3 huruf",
			}));
		} else {
			setErrorMsg((prevState) => ({
				...prevState,
				namaDepan: "",
			}));
		}
		if (formData.namaBelakang.length < 3) {
			isValid = false;
			setErrorMsg((prevState) => ({
				...prevState,
				namaBelakang: "Nama minimal 3 huruf",
			}));
		} else {
			setErrorMsg((prevState) => ({
				...prevState,
				namaBelakang: "",
			}));
		}
		if (formData.email === "") {
			isValid = false;
			setErrorMsg((prevState) => ({
				...prevState,
				email: "Masukkan email Anda.",
			}));
		}
		if (typeof formData.email !== "undefined") {
			let pattern = new RegExp(
				/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
			);
			if (!pattern.test(formData.email)) {
				isValid = false;
				setErrorMsg((prevState) => ({
					...prevState,
					email: "Masukkan email yang valid!.",
				}));
			} else {
				setErrorMsg((prevState) => ({
					...prevState,
					email: "",
				}));
			}
		}
		if (formData.telepon.length < 10) {
			isValid = false;
			setErrorMsg((prevState) => ({
				...prevState,
				telepon: "Nomor telepon tidak valid",
			}));
		} else {
			setErrorMsg((prevState) => ({
				...prevState,
				telepon: "",
			}));
		}
		if (formData.alamat.length < 3) {
			isValid = false;
			setErrorMsg((prevState) => ({
				...prevState,
				alamat: "Masukkan alamat Anda.",
			}));
		} else {
			setErrorMsg((prevState) => ({
				...prevState,
				alamat: "",
			}));
		}
		return isValid;
	};

	return (
		<>
			<div className="py-0 md:flex md:justify-center">
				<ul class="steps">
					<li class="step step-primary">Data Personal</li>
					<li class="step">Riwayat Pendidikan</li>
					<li class="step">Pengalaman Kerja</li>
					<li class="step">Keahlian</li>
				</ul>
			</div>
			<div class="max-w-md text-center md:text-left">
				<h3 class="text-2xl font-bold mt-10">Form Submission</h3>
			</div>
			<div className="grid xl:grid-cols-3 md:grid-cols-2 place-content-center mt-10 w-full">
				{dataPersonal.map((data, index) => {
					return (
						<div key={index} class="form-control w-80 max-w-xs">
							<label class="label">
								<span class="label-text">{data.label}</span>
							</label>
							<input
								onChange={handleChange}
								id={data.attr}
								name={data.attr}
								type={data.type}
								value={formData[`${data.attr}`]}
								placeholder={`Masukkan ${data.label}`}
								class="input input-bordered w-full max-w-xs"
							/>
							<p className="text-left text-sm text-red-600 mt-1">
								{errorMsg[`${data.attr}`]}
							</p>
						</div>
					);
				})}
			</div>
			<div className="flex justify-between mt-10 px-12">
				<button className="btn btn-secondary btn-sm drop-shadow-md" disabled>
					Back
				</button>
				<button
					className="btn btn-primary btn-sm drop-shadow-md"
					onClick={handleClick}
				>
					Next
				</button>
			</div>
		</>
	);
};

export default DataPersonal;
