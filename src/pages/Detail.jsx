import { Link, useParams } from "react-router-dom";

const getLocal = () => {
	const data = localStorage.getItem("listUser");
	if (data) {
		return JSON.parse(data);
	} else {
		return [];
	}
};

const Detail = () => {
	const { id } = useParams();
	const localData = getLocal();
	const [detailData] = localData.filter(
		(data, index) => parseInt(id) === parseInt(index) && data
	);

	console.log(id);
	console.log(detailData);

	return (
		<div className="detail-container py-10">
			<Link to="/" className="btn-add mb-80 rounded-lg leading-10 py-1 px-4">
				Kembali ke Home
			</Link>
			<div class=" flex flex-col w-full">
				<div class="card w-full bg-base-100 shadow-xl">
					<div class="card-body">
						<h1 class="card-title">Data Personal</h1>
						<div className="sm:grid sm:grid-cols-2 ">
							<h3>Nama Depan :</h3>
							<span className="ml-6">{detailData.namaDepan}</span>
						</div>
						<div className="sm:grid sm:grid-cols-2 ">
							<h3>Nama Belakang :</h3>
							<span className="ml-6">{detailData.namaBelakang}</span>
						</div>
						<div className="sm:grid sm:grid-cols-2 ">
							<h3>Email :</h3>
							<span className="ml-6">{detailData.email}</span>s
						</div>
						<div className="sm:grid sm:grid-cols-2 ">
							<h3>Nomor Telepon :</h3>
							<span className="ml-6">{detailData.telepon}</span>
						</div>
						<div className="sm:grid sm:grid-cols-2 ">
							<h3>Alamat :</h3>
							<span className="ml-6">{detailData.alamat}</span>
						</div>
					</div>
				</div>
				<div class="divider"></div>
				<div class="card w-full bg-base-100 shadow-xl">
					<div class="card-body">
						<h1 class="card-title">Riwayat Pendidikan</h1>
						{detailData.pendidikan.map((data, index) => {
							console.log(data);
							return (
								<div className="sm:grid sm:grid-cols-2 ">
									<h3>Pendidikan Lainnya :</h3>
									<span className="ml-6">{data.pendidikan}</span>
								</div>
							);
						})}
					</div>
				</div>
				<div class="divider"></div>
				<div class="card w-full bg-base-100 shadow-xl">
					<div class="card-body">
						<h1 class="card-title">Pengalaman Kerja</h1>
						{detailData.pengalaman.map((data, index) => {
							console.log(data);
							return (
								<div className="sm:grid sm:grid-cols-2 ">
									<h3>Pengalaman Lainnya :</h3>
									<span className="ml-6">{data.pengalaman}</span>
								</div>
							);
						})}
					</div>
				</div>
				<div class="divider"></div>
				<div class="card w-full bg-base-100 shadow-xl">
					<div class="card-body">
						<h1 class="card-title">Keahlian Kerja</h1>

						{detailData.keahlian.map((data, index) => {
							console.log(data);
							return (
								<div className="sm:grid sm:grid-cols-2 ">
									<h3>Keahlian Lainnya :</h3>
									<span className="ml-6">{data.keahlian}</span>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Detail;
