import React, { FC } from "react";
import { Box, Text } from "ink";

const App: FC<{ name?: string }> = () => (
	<Box
		paddingX={4}
		paddingY={2}
		borderStyle="round"
		flexDirection="column"
		width={64}
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
	</Box>
);

module.exports = App;
export default App;
