import { createContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
	const [page, setPage] = useState(1);

	const [formData, setFormData] = useState({
		namaDepan: "",
		namaBelakang: "",
		email: "",
		telepon: "",
		alamat: "",
		pendidikan: [{ pendidikan: "" }, { pendidikan: "" }, { pendidikan: "" }],
		pengalaman: [{ pengalaman: "" }],
		keahlian: [{ keahlian: "" }],
	});

	const nextPage = () => {
		setPage((prev) => (prev += 1));
	};
	const prevPage = () => {
		setPage((prev) => (prev -= 1));
	};

	return (
		<FormContext.Provider
			value={{
				page,
				formData,
				setFormData,
				nextPage,
				prevPage,
			}}
		>
			{children}
		</FormContext.Provider>
	);
};
export default FormContext;
