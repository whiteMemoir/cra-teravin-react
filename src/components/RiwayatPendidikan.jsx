import React, { useContext } from "react";
import FormContext from "../context/FormContext";

const RiwayatPendidikan = () => {
	const { prevPage, nextPage, formData, setFormData } = useContext(FormContext);

	const handleChange = (e, index) => {
		const { name, value } = e.target;
		let data = [...formData.pendidikan];
		data[index][name] = value;
		setFormData((prevState) => ({ ...prevState, data }));
	};

	const addField = () => {
		let field = {
			pendidikan: "",
		};

		setFormData((prevState) => ({
			...prevState,
			pendidikan: [...formData.pendidikan, field],
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
	return (
		<>
			<div className="py-0 md:flex md:justify-center">
				<ul class="steps">
					<li data-content="✓" class="step step-primary">
						Data Personal
					</li>
					<li class="step step-primary">Riwayat Pendidikan</li>
					<li class="step">Pengalaman Kerja</li>
					<li class="step">Keahlian</li>
				</ul>
			</div>
			<div class="max-w-md text-center md:text-left">
				<h3 class="text-2xl font-bold mt-10">Form Submission</h3>
			</div>
			<div className="grid xl:grid-cols-3 md:grid-cols-2 place-content-center mt-10 ">
				{formData.pendidikan.map((data, index) => {
					let jenjang = "";
					if (index === 0) {
						jenjang = "SD";
					} else if (index === 1) {
						jenjang = "SMP";
					} else if (index === 2) {
						jenjang = "SMA";
					}
					return (
						<div key={index} class="form-control w-80 max-w-xs">
							<label class="label">
								<span class="label-text">
									{index > 2 ? `Pendidikan Lainnya` : jenjang}
								</span>
							</label>
							<div className="flex justify-center items-center">
								<input
									onChange={(e) => handleChange(e, index)}
									id={index}
									name={Object.keys(data)}
									type="text"
									value={formData.pendidikan[index].pendidikan}
									placeholder={`Masukkan riwayat pendidikan`}
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
					onClick={() => nextPage()}
				>
					Next
				</button>
			</div>
		</>
	);
};

export default RiwayatPendidikan;
