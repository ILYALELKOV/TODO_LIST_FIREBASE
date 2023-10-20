import { ref, push } from 'firebase/database'
import { db } from '../fireBase.js'

export const useRequestAddTask = (
	TODO_DB,
	setRefreshTasks,
	refreshTasks,
	setInputValue
) => {
	const requestAddTask = (task) => {
		event.preventDefault()
		task = task.trim()

		if (task.length > 0) {
			const tasksDbRef = ref(db, 'posts')
			push(tasksDbRef, { title: task }).then(() => setInputValue(''))
		}
	}

	return {
		requestAddTask
	}
}
