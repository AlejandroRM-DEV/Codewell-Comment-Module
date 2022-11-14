import Image from "next/image";
import Link from "next/link";

function Comment({ item }) {
	return (
		<div className="comment">
			<div className="flex flex-col items-center">
				<Image
					className="object-contain"
					alt={item.user}
					src={`/assets/${item.user}.png`}
					width="60"
					height="60"
				/>
				<div className="mt-4 border-l border-gray-300 flex-grow"></div>
			</div>
			<div className="comment__body">
				<div className="flex">
					<p className="font-semibold mr-2">{item.user}</p>
					<p className="text-gray-400">{item.time}</p>
				</div>
				<p className="my-2">{item.comment}</p>
				<div className="comment__actions">
					<Image alt="" src="/assets/Up.svg" height={10} width={10} />
					<p className="font-semibold">{item.votes}</p>
					<Image alt="" src="/assets/Down.svg" height={10} width={10} />
					<Link href="/">Reply</Link>
					<Link href="/">Report</Link>
				</div>
				{item.replies.length > 0 && <ListComments list={item.replies} />}
			</div>
		</div>
	);
}

function ListComments({ list }) {
	return (
		<>
			{list.map((item) => (
				<Comment item={item} key={item.id} />
			))}
		</>
	);
}

async function getData() {
	const res = await fetch("http://localhost:3000/api/comments");
	return res.json();
}

export default async function Home() {
	const comments = await getData();
	return (
		<div className="border rounded-lg p-12 bg-white drop-shadow">
			<ListComments list={comments} />
		</div>
	);
}
