import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormContext from "../context/FormContext";

const getLocal = () => {
	const data = localStorage.getItem("listUser");
	if (data) {
		return JSON.parse(data);
	} else {
		return [];
	}
};

const Keahlian = () => {
	const navigate = useNavigate();
	const { prevPage, formData, setFormData } = useContext(FormContext);
	const [localData, setLocalData] = useState(getLocal());

	const handleChange = (e, index) => {
		const { name, value } = e.target;
		let data = [...formData.keahlian];
		data[index][name] = value;
		setFormData((prevState) => ({ ...prevState, data }));
	};

	const handleClick = () => {
		let inputLocal = [];
		if (localData.length === 0) {
			inputLocal = [{ ...formData }];
		} else {
			inputLocal = [...localData, { ...formData }];
		}
		localStorage.setItem("listUser", JSON.stringify(inputLocal));
		setFormData({
			namaDepan: "",
			namaBelakang: "",
			email: "",
			telepon: "",
			alamat: "",
			pendidikan: [{ pendidikan: "" }, { pendidikan: "" }, { pendidikan: "" }],
			pengalaman: [{ pengalaman: "" }],
			keahlian: [{ keahlian: "" }],
		});
		navigate("/");
		navigate(0);
	};

	const addField = () => {
		let field = {
			keahlian: "",
		};

		setFormData((prevState) => ({
			...prevState,
			keahlian: [...formData.keahlian, field],
		}));
	};
	const removeField = (index) => {
		let data = [...formData.pendidikan];
		data.splice(index, 1);
		setFormData((prevState) => ({
			...prevState,
			pendidikan: data,
		}));
	};

	console.log(formData);
	console.log(localData);
	return (
		<>
			<div className="py-0 md:flex md:justify-center">
				<ul class="steps">
					<li data-content="✓" class="step step-primary">
						Data Personal
					</li>
					<li data-content="✓" class="step step-primary">
						Riwayat pendidikan
					</li>
					<li data-content="✓" class="step step-primary">
						Pengalaman Kerja
					</li>
					<li class="step step-primary">Keahlian</li>
				</ul>
			</div>
			<div class="max-w-md text-center md:text-left">
				<h3 class="text-2xl font-bold mt-10">Form Submission</h3>
			</div>
			<div className="grid xl:grid-cols-3 md:grid-cols-2 place-content-center mt-10 ">
				{formData.keahlian.map((data, index) => {
					return (
						<div key={index} class="form-control w-80 max-w-xs">
							<label class="label">
								<span class="label-text">{`Keahlian ${index + 1}`}</span>
							</label>
							<div className="flex justify-center items-center">
								<input
									onChange={(e) => handleChange(e, index)}
									id={index}
									name={Object.keys(data)}
									type="text"
									value={formData.keahlian[index].keahlian}
									placeholder={`Masukkan riwayat keahlian`}
									class="input input-bordered w-full max-w-xs"
									required
								/>
								<button
									className="btn btn-secondary btn-sm drop-shadow-md rounded-full ml-3"
									onClick={() => removeField(index)}
								>
									x
								</button>
							</div>
						</div>
					);
				})}
			</div>
			<div className="flex justify-between mt-10 px-12">
				<button
					className="btn btn-secondary btn-sm drop-shadow-md"
					onClick={() => prevPage()}
				>
					Back
				</button>
				<button
					className="btn btn-secondary btn-sm drop-shadow-md"
					onClick={addField}
				>
					+ Tambah input
				</button>
				<button
					className="btn btn-primary btn-sm drop-shadow-md"
					onClick={() => handleClick()}
				>
					Submit
				</button>
			</div>
		</>
	);
};

export default Keahlian;
