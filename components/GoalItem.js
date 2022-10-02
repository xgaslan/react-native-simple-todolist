import { View, Text, StyleSheet, Pressable } from "react-native";

export default function GoalItem(props) {
	return (
		<View style={styles.goalItem}>
			<Pressable
				style={({ pressed }) => pressed && styles.pressedItem}
				onPress={props.onDeleteItem.bind(this, props.goalId)}
			>
				<Text style={styles.goalText}>{props.value}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	goalItem: {
		borderWidth: 1,
		borderColor: "#cccccc",
		borderStyle: "solid",

		margin: 8,
		borderRadius: 6,
		backgroundColor: "#4c76b4",
	},
	pressedItem: {
		backgroundColor: "#163d6d",
		opacity: 0.5,
	},
	goalText: {
		color: "#ffffff",
		fontSize: 16,
		fontWeight: "bold",
		padding: 8,
	},
});
