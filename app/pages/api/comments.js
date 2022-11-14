// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const comments = [
	{
		id: 1,
		user: "adamsdavid",
		comment:
			"I genuinely think that Codewell's community is AMAZING. It's just starting out but the templates on there are amazing.",
		votes: 2,
		time: "20 hours ago",
		replies: [
			{
				id: 3,
				user: "saramay",
				comment:
					"I agree. I've been coding really well (pun intended) ever since I started practicing on their templates hehe.",
				votes: 5,
				time: "16 hours ago",
				replies: [
					{
						id: 4,
						user: "jessica21",
						comment: "Okay, this comment wins.",
						votes: 5,
						time: "14 hours ago",
						replies: [],
					},
				],
			},
		],
	},
	{
		id: 2,
		user: "andrew231",
		comment: "Thanks for making this, super helpful",
		votes: 2,
		time: "20 hours ago",
		replies: [],
	},
];

export default function handler(req, res) {
	res.status(200).json(comments);
}
