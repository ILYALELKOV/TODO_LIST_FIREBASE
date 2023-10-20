import { ref, remove } from 'firebase/database'
import { db } from '../fireBase.js'

export const useRequestDeleteTask = (
	TODO_DB,
	setRefreshTasks,
	refreshTasks
) => {
	const requestDeleteTask = (idTask) => {
		const taskDbRef = ref(db, `posts/${idTask}`)
		remove(taskDbRef)
		// fetch(`${TODO_DB}/${idTask}`, {
		// 	method: 'DELETE'
		// }).then(() => setRefreshTasks(!refreshTasks))
	}

	return {
		requestDeleteTask
	}
}
