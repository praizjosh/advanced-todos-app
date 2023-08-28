<!-- TaskList.vue -->
<template>
  <div class="bg-white pb-8">
    <div class="">
      <div class="relative px-8 overflow-x-auto">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <!-- <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-red-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only"
                    >checkbox</label
                  > -->
                </div>
              </th>
              <th scope="col" class="px-8 py-3">Pending Tasks</th>
              <!-- <th scope="col" class="px-6 py-3"></th> -->
              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(task, index) in tasks"
              :key="index"
              :class="{
                'completed-task': task.completed,
                'bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-600': true,
              }"
            >
              <td class="w-4 p-4">
                <div class="flex items-center space-x-3">
                  <input
                    :id="'checkbox-table-task-' + index"
                    type="checkbox"
                    v-model="task.completed"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label :for="'checkbox-table-task-' + index" class="sr-only"
                    >checkbox</label
                  >
                  <svg
                    @click="duplicateTask(index)"
                    class="w-[20px] h-[20px] text-gray-400 hover:text-gray-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.3"
                      d="M2 5a1 1 0 0 0-1 1v12a.969.969 0 0 0 .933 1h8.1a1 1 0 0 0 1-1.033M10 1v4a1 1 0 0 1-1 1H5m10-4v12a.97.97 0 0 1-.933 1H5.933A.97.97 0 0 1 5 14V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 9.828 1h4.239A.97.97 0 0 1 15 2Z"
                    />
                  </svg>
                </div>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <!-- Display original task or input field for editing -->
                <template v-if="editingIndex !== index">
                  <div class="flex flex-col">
                    <span
                      class="text-xl"
                      :class="{ 'line-through': task.completed }"
                    >
                      {{ task.description }}
                    </span>
                    <span class="text-sm opacity-80"
                      >Due: {{ task.dueDate }}</span
                    >
                  </div>
                </template>
                <template v-else>
                  <input
                    v-model="editedTask.description"
                    @keyup.enter="updateTask(index)"
                    @keydown.escape="cancelEditing"
                    class="w-full bg-slate-50 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 p-1.5 opacity-90"
                  />
                  <Calendar v-model="editedTask.dueDate" />

                  <!-- Use your Calendar component here -->
                </template>
              </td>

              <td class="flex justify-end items-center px-6 py-4 space-x-3">
                <template v-if="editingIndex === index">
                  <svg
                    @click="updateTask(index)"
                    class="w-[20px] h-[20px] text-green-600 hover:text-green-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.6"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>

                  <svg
                    @click="cancelEditing"
                    class="w-[22px] h-[22px] text-pink-600 hover:text-gray-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.7"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </template>
                <template v-else>
                  <svg
                    @click="startEditing(index)"
                    class="w-[20px] h-[20px] text-green-600 hover:text-gray-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.7"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </template>
                <span class="text-slate-300">|</span>
                <svg
                  @click="showDeleteModal(index)"
                  class="w-[20px] h-[20px] text-red-600 hover:text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.4"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Use the modal component -->
        <delete-task-modal
          :show="isDeleteModalOpen"
          @delete="handleDeleteTask"
          @cancel="closeDeleteModal"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DeleteTaskModal from "@/components/DeleteTaskModal.vue";
import Calendar from "./Calendar.vue";
import { parse, format } from "date-fns"; // Import Date formatter function

export default {
  data() {
    return {
      editingIndex: -1,
      editedTask: "",
      isDeleteModalOpen: false,
      deleteIndex: null,
    };
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
  components: {
    DeleteTaskModal,
    Calendar,
  },
  methods: {
    startEditing(index) {
      this.editingIndex = index;
      this.editedTask = {
        description: this.tasks[index].description,
        dueDate: this.tasks[index].dueDate,
      };
    },
    cancelEditing() {
      this.editingIndex = -1;
      this.editedTask = "";
    },
    updateTask(index) {
      if (this.editedTask.description.trim() !== "") {
        this.$store.commit("UPDATE_TASK", {
          index,
          task: {
            ...this.tasks[index],
            description: this.editedTask.description,
            dueDate: this.editedTask.dueDate, // Assign the formatted due date here
            completed: this.tasks[index].completed, // Preserve completion status
          },
        });

        // Format the due date consistently with the parse format
        const parsedDueDate = parse(
          this.editedTask.dueDate,
          "dd-M-yyyy HH:mm",
          new Date()
        );
        this.tasks[index].dueDate = format(
          parsedDueDate,
          "dd MMM yyyy, HH:mm a"
        );

        this.cancelEditing();
      } else {
        alert("Field can't be blank. Please enter a valid task or due date.");
      }
    },
    duplicateTask(index) {
      const taskToDuplicate = this.tasks[index].description;
      const duplicatedTask = JSON.parse(JSON.stringify(taskToDuplicate)); // Make copy of the task
      this.$store.commit("addTask", duplicatedTask); // Update the store with the new task
    },
    showDeleteModal(index) {
      this.isDeleteModalOpen = true;
      this.deleteIndex = index;
    },
    closeDeleteModal() {
      this.isDeleteModalOpen = false;
      this.deleteIndex = null;
    },
    handleDeleteTask() {
      if (this.deleteIndex !== null) {
        this.$store.commit("DELETE_TASK", this.deleteIndex);
        this.closeDeleteModal();
      }
    },
  },
};
</script>

<style scoped>
.completed-task span {
  text-decoration: line-through;
  opacity: 0.6;
}
</style>
