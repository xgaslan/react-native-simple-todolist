import {
	StyleSheet,
	TextInput,
	View,
	Button,
	Modal,
	Image,
} from "react-native";
import React, { useState } from "react";

export default function GoalInput(props) {
	const [enteredGoalText, setEnteredGoalText] = useState("");

	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText);
	};

	const addGoalHandler = () => {
		props.onAddGoalHandler(enteredGoalText);
		setEnteredGoalText("");
	};

	return (
		<Modal visible={props.checkModalVisible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image
					style={styles.goalImage}
					source={require("../assets/images/goal.png")}
				/>
				<TextInput
					value={enteredGoalText}
					style={styles.textInput}
					placeholder="Your course goal!"
					onChangeText={goalInputHandler}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							title="Cancel"
							onPress={props.onCancel}
							color="#882121"
						/>
					</View>
					<View style={styles.button}>
						<Button
							title="Add Goal"
							onPress={addGoalHandler}
							color="#08721f"
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		backgroundColor: "#311b6b",
	},
	buttonContainer: {
		marginTop: 16,
		flexDirection: "row",
	},
	goalImage: {
		width: 100,
		height: 100,
		margin: 16,
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		color: "#120438",
        borderRadius: 6,
		width: "100%",
		padding: 16,
	},
	button: {
		width: "30%",
		marginHorizontal: 10,
	},
});
