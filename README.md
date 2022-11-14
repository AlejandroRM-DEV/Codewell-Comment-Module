# Codewell-Comment-Module
A comment box with nested replies. Perfect for practicing positioning. Intermediate level.

## Stack
- NextJS 13 Experimental 
- Tailwind

## Data
```
[
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
]
```

## Demo
![Image](/demo/desktop.png "Desktop")
