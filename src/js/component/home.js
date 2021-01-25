import React, { Fragment } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Cards } from "./card.jsx";

import { Card, Container, Row, CardDeck, Col } from "react-bootstrap";
const netflixSeries = [
	{
		Image:
			"https://static01.nyt.com/images/2020/12/13/arts/13best-tv-shows-2020-01/merlin_171692925_299dde23-5ce9-4c3d-abfc-95a74c8b3d18-jumbo.jpg?quality=90&auto=webp",
		Title: "Better Call Saul",
		Sinopsis:
			"The prequel to “Breaking Bad” is television’s most finely rendered slow-motion car crash.",
		URL: "https://www.netflix.com/es-en/title/80021955"
	},
	{
		Image:
			"https://static01.nyt.com/images/2020/12/13/arts/13best-tv-shows-2020-02/merlin_177902889_22e2b164-fa8d-4113-9ffe-4d96fd502b61-jumbo.jpg?quality=90&auto=webp",
		Title: "Better Things",
		Sinopsis:
			"I feel like I don’t watch “Better Things” so much as live in it — which is less to say that it reminds me of my life than that it replicates the experience of inhabiting someone else’s.",
		URL:
			"https://www.hulu.com/series/better-things-70d330d1-cb23-403f-b3b6-f8f392c4ce5e"
	},
	{
		Image:
			"https://static01.nyt.com/images/2020/12/13/arts/13best-tv-shows-2020-03/merlin_176497056_b55f17fd-232f-4ca9-9dc7-5e1e4cf7b8e7-superJumbo.jpg?quality=90&auto=webp",
		Title: "I May Destroy You",
		Sinopsis:
			"Michaela Coel’s revelatory series was to 2020 what Season 2 of “Fleabag” was to 2019: a seamlessly conceived masterwork that is impossible to imagine being written or performed by anyone else.",
		URL:
			"https://play.hbomax.com/series/urn:hbo:series:GXqHggg6FbLeIkwEAAAAv?camp=googleHBOMAX&action=play"
	},
	{
		Image:
			"https://static01.nyt.com/images/2020/12/13/arts/13best-tv-shows-2020-04/merlin_172004493_9a755986-f3b3-45d4-9a90-a85e8940c15f-jumbo.jpg?quality=90&auto=webp",
		Title: "Mrs. America",
		Sinopsis:
			"Dahvi Waller’s double-barreled story of the fights for and against the Equal Rights Amendment went a half-century into the past and found today.",
		URL: "https://www.hulu.com/series/96f330fe-878d-412e-949f-fd8b69b3adf2"
	}
];
//create your first component
const Buble = () => {
	return netflixSeries.map((item, index) => (
		<Cards
			key={index}
			image={item.Image}
			title={item.Title}
			description={item.Sinopsis}
			url={item.URL}
		/>
	));
};

export const Home = () => {
	return (
		<Container className="mt-5">
			<Row>
				<Col>
					<CardDeck>{Buble()}</CardDeck>
				</Col>{" "}
			</Row>
		</Container>
	);
};
