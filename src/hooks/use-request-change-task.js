import { ref, set } from 'firebase/database'
import { db } from '../fireBase.js'

export const useRequestChangeTask = (
	TODO_DB,
	isModalOpen,
	setRefreshTasks,
	refreshTasks
) => {
	const requestChangeTask = () => {
		isModalOpen.taskValue = isModalOpen.taskValue.trim()
		if (isModalOpen.taskValue.length > 0) {
			const taskDbRef = ref(db, `posts/${isModalOpen.idTask}`)
			set(taskDbRef, {
				title: isModalOpen.taskValue
			}).then(() => setRefreshTasks(!refreshTasks))
		}
	}

	return {
		requestChangeTask
	}
}
