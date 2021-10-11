import React, { FC } from "react";
import { Box, Text } from "ink";
import useSWR from "swr";
import got from "got";
import { formatDistance } from "date-fns";
import Spinner from "ink-spinner";

const LatestTweet = () => {
	const { data, isValidating } = useSWR<{
		url: string;
		text: string;
		ts: string;
	}>("latest-tweet-url", async (endpoint: string) => {
		return await got(`https://mathdro.id/api/${endpoint}`).json();
	});

	return (
		<Box marginTop={1} flexDirection="column">
			{isValidating && (
				<Text>
					<Spinner type="dots" /> Fetching latest Tweet
				</Text>
			)}
			{data && (
				<>
					<Box>
						<Text>
							Last seen on Twitter{" "}
							{formatDistance(new Date(data.ts), new Date(), {
								addSuffix: true,
							})}
							:
						</Text>
					</Box>
					<Box>
						<Text wrap="truncate-middle">"{data.text}"</Text>
					</Box>
					<Box>
						<Text dimColor>{data.url}</Text>
					</Box>
				</>
			)}
		</Box>
	);
};

const App: FC<{ name?: string }> = () => (
	<Box
		paddingX={4}
		paddingY={2}
		borderStyle="round"
		flexDirection="column"
		width={70}
	>
		<Text bold>mathdroid</Text>
		<Box>
			<Text dimColor>{">"}</Text>
			<Box marginLeft={1}>
				<Text>Senior Software Engineer </Text>
				<Text dimColor>@</Text>
				<Text> On Deck</Text>
			</Box>
		</Box>
		<Box flexDirection="row" marginTop={1}>
			<Box>
				<Text>🧑</Text>
			</Box>
			<Box marginLeft={4} flexGrow={1}>
				<Text>Odi </Text>
				<Text dimColor>-</Text>
				<Text> Muhammad Mustadi</Text>
			</Box>
		</Box>
		<Box flexDirection="row">
			<Box>
				<Text>🌐</Text>
			</Box>
			<Box marginLeft={4} flexGrow={1}>
				<Text underline dimColor>
					https://
				</Text>
				<Text underline>mathdro.id</Text>
			</Box>
		</Box>
		<Box flexDirection="row">
			<Box>
				<Text>📬</Text>
			</Box>
			<Box marginLeft={4} flexGrow={1}>
				<Text dimColor>mailto:</Text>
				<Text>muhammad.mustadi@gmail.com</Text>
			</Box>
		</Box>
		<Box flexDirection="row">
			<Box>
				<Text>📱</Text>
			</Box>
			<Box marginLeft={4} flexGrow={1}>
				<Text dimColor>tel:</Text>
				<Text>+6281312021571</Text>
			</Box>
		</Box>
		<LatestTweet />
	</Box>
);

module.exports = App;
export default App;
