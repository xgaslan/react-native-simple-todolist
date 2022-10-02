import { useState } from "react";
import {
	StyleSheet,
	View,
	Platform,
	StatusBar,
	FlatList,
	Button,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [courseGoals, setCourseGoals] = useState([]);

	const startAddGoalHandler = () => {
		setModalIsVisible(true);
	};

	const endAddGoalHandler = () => {
		setModalIsVisible(false);
	};
	const addGoalHandler = (enteredGoalText) => {
		if (enteredGoalText.length > 0) {
			setCourseGoals((currentCourseGoals) => [
				...currentCourseGoals,
				{ text: enteredGoalText, id: Math.random().toString() },
			]);
			endAddGoalHandler();
		} else {
			alert("Please enter a valid goal");
		}
	};

	const deleteGoalHandler = (goalId) => {
		setCourseGoals((currentCourseGoals) => {
			return currentCourseGoals.filter((goal) => goal.id !== goalId);
		});
	};

	return (
		<>
			<StatusBar style="auto" />
			<View style={styles.appContainer}>
				<Button
					title="Add New Goal"
					color="#1e085a"
					onPress={startAddGoalHandler}
				/>
				<GoalInput
					onAddGoalHandler={addGoalHandler}
					checkModalVisible={modalIsVisible}
					onCancel={endAddGoalHandler}
				/>
				<View style={styles.goalsContainer}>
					<FlatList
						data={courseGoals}
						renderItem={(itemData) => {
							return (
								<GoalItem
									value={itemData.item.text}
									goalId={itemData.item.id}
									onDeleteItem={deleteGoalHandler}
								/>
							);
						}}
						keyExtractor={(item) => {
							return item.id;
						}}
					/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		paddingHorizontal: 16,
		marginTop: 16,
	},

	goalsContainer: {
		flex: 8,
	},
});
