import React, { useContext } from "react";
import FormContext from "../context/FormContext";

const PengalamanKerja = () => {
	const { prevPage, nextPage, formData, setFormData } = useContext(FormContext);

	const handleChange = (e, index) => {
		const { name, value } = e.target;
		let data = [...formData.pengalaman];
		data[index][name] = value;
		setFormData((prevState) => ({ ...prevState, data }));
	};

	const addField = () => {
		let field = {
			pengalaman: "",
		};

		setFormData((prevState) => ({
			...prevState,
			pengalaman: [...formData.pengalaman, field],
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
					<li data-content="✓" class="step step-primary">
						Riwayat pendidikan
					</li>
					<li class="step step-primary">Pengalaman Kerja</li>
					<li class="step">Keahlian</li>
				</ul>
			</div>
			<div class="max-w-md text-center md:text-left">
				<h3 class="text-2xl font-bold mt-10">Form Submission</h3>
			</div>
			<div className="grid xl:grid-cols-3 md:grid-cols-2 place-content-center mt-10 ">
				{formData.pengalaman.map((data, index) => {
					return (
						<div key={index} class="form-control w-80 max-w-xs">
							<label class="label">
								<span class="label-text">{`Pengalaman ${index + 1}`}</span>
							</label>
							<div className="flex justify-center items-center">
								<input
									onChange={(e) => handleChange(e, index)}
									id={index}
									name={Object.keys(data)}
									type="text"
									value={formData.pengalaman[index].pengalaman}
									placeholder={`Masukkan riwayat pengalaman`}
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

export default PengalamanKerja;
