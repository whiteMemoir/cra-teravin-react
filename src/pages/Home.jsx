import { useState } from "react";
import { Link } from "react-router-dom";
import { FaInfo } from "react-icons/fa";

const getLocal = () => {
	const data = localStorage.getItem("listUser");
	if (data) {
		return JSON.parse(data);
	} else {
		return [];
	}
};

const Home = () => {
	const [localData, setLocalData] = useState(getLocal());
	return (
		<div className="container">
			<h1 className="text-center font-medium text-2xl mb-10 pt-20">
				Teravin test React JS
			</h1>
			<div className="flex justify-center md:justify-start">
				<Link
					to="/add-data"
					className="btn-add text-white py-2 px-4 w-40 pl-9 rounded-lg mb-20 md:mb-10"
				>
					+ Add data
				</Link>
			</div>
			{/* # Table */}
			<div class="overflow-x-auto">
				<table class="table w-full">
					{/* <!-- head --> */}
					<thead>
						<tr>
							<th>No</th>
							<th>Nama</th>
							<th>Alamat</th>
							<th>Aksi</th>
						</tr>
					</thead>
					<tbody>
						{localData.map((data, index) => {
							return (
								<tr>
									<th>{index + 1}</th>
									<td>{data.namaDepan + " " + data.namaBelakang}</td>
									<td>{data.alamat}</td>
									<td>
										{
											<Link to={`/detail/${index}`}>
												<div className="w-6 h-6 rounded-full bg-green-500 flex justify-center items-center hover:bg-black hover:text-white">
													<FaInfo />
												</div>
											</Link>
										}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Home;
