<!-- Task.vue -->

<template>
  <div>
    <div
      class="bg-white flex mb-2 items-center justify-between px-4 py-2 space-x-2 rounded-xl shadow"
      :class="{
        'opacity-50': task.completed,
        'border-l-8 hover:text-white border-red-500 hover:bg-red-500':
          isOverdue(new Date(task.dueDate)), // Apply the class for overdue tasks
      }"
    >
      <div class="flex items-center px-3 space-x-2">
        <input
          :id="'checkbox-table-task-' + index"
          v-model="task.completed"
          @change="emitToggleCompletion"
          type="checkbox"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label :for="'checkbox-table-task-' + index" class="sr-only"
          >checkbox</label
        >
        <template v-if="editingIndex !== index || !task.completed">
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
        </template>
      </div>
      <div class="flex flex-col space-y-1">
        <!-- Display original task or input field for editing -->
        <template v-if="editingIndex !== index">
          <div
            class="flex flex-col"
            :class="{
              'line-through opacity-40': task.completed,
            }"
          >
            <span class="text-lg">
              {{ task.description }}
            </span>
            <span class="text-xs opacity-80"
              ><i>Due: {{ task.dueDate }} </i></span
            >
          </div>
        </template>

        <!-- Else display fields for edit mode -->
        <template v-else>
          <input
            v-model="editedTask.description"
            @keydown.enter="updateTask(index)"
            @keydown.escape="cancelEditing"
            id="updateTask"
            class="w-full bg-slate-50 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 p-1.5 opacity-90"
            :class="{
              'text-gray-800': isOverdue(new Date(task.dueDate)), // Apply the class for overdue tasks
            }"
          />
          <Calendar v-model="editedTask.dueDate" id="fp-calendar1" />
        </template>
      </div>
      <div class="flex items-center px-3 space-x-2">
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
          <span class="text-slate-300">|</span>
          <svg
            @click="showDeleteModal(index)"
            class="w-[20px] h-[20px] text-red-700 hover:text-gray-700"
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
        </template>
      </div>
    </div>

    <delete-task-modal
      :show="isDeleteModalOpen"
      @confirm="handleDeleteConfirmation"
      @cancel="closeDeleteModal"
      :text="'Are you sure you want to delete this task?'"
    />
  </div>
</template>

<script>
import DeleteTaskModal from "./DeleteTaskModal.vue";
import Calendar from "./Calendar.vue";
import { parse, format, isPast } from "date-fns";

export default {
  name: "Task",
  props: {
    task: Object,
    index: Number,
  },
  data() {
    return {
      editingIndex: -1,
      editedTask: {
        description: this.task.description,
        dueDate: this.task.dueDate,
      },
      isDeleteModalOpen: false,
      deleteIndex: null,
    };
  },
  components: {
    DeleteTaskModal,
    Calendar,
  },
  methods: {
    startEditing() {
      this.editingIndex = this.index;
    },
    cancelEditing() {
      this.editingIndex = -1;
    },
    updateTask() {
      if (
        this.editedTask.description.trim() !== "" &&
        this.editedTask.dueDate !== null
      ) {
        const formattedDueDate = this.formatDueDate(this.editedTask.dueDate);

        this.$store.commit("UPDATE_TASK", {
          index: this.index,
          task: {
            ...this.task,
            description: this.editedTask.description,
            dueDate: formattedDueDate,
          },
        });

        this.cancelEditing();

        this.$notify({
          type: "success",
          text: "Task updated successfully",
        });
      } else {
        this.$notify({
          type: "error",
          text: "Fields can't be blank. Please enter a valid task or Due date ", // Field can't be blank. Please enter a valid task and due date.
        });
      }
    },
    formatDueDate(dueDate) {
      const parsedDueDate = parse(dueDate, "d-M-yyyy H:mm", new Date());
      return format(parsedDueDate, "dd MMM yyyy h:mm a");
    },
    duplicateTask(index) {
      const taskToDuplicate = this.task;
      const duplicatedTask = JSON.parse(JSON.stringify(taskToDuplicate)); // Make copy of the task
      this.$store.commit("addTask", duplicatedTask); // Update the store with the new task
      this.$notify({
        type: "success",
        text: "Task duplicated",
      });
    },
    showDeleteModal(index) {
      this.isDeleteModalOpen = true;
      this.deleteIndex = index;
    },
    closeDeleteModal() {
      this.isDeleteModalOpen = false;
      this.deleteIndex = null;
    },
    handleDeleteConfirmation() {
      this.handleDeleteTask(); // Delete individual task using the provided parameter
      this.closeDeleteModal(); // Close the modal
    },
    handleDeleteTask() {
      if (this.deleteIndex !== null) {
        this.$store.commit("DELETE_TASK", this.deleteIndex);
        this.closeDeleteModal();
        this.$notify({
          type: "success",
          text: "Task deleted successfully",
        });
      }
    },
    emitToggleCompletion() {
      this.$emit("toggleCompletion");
    },
    isOverdue(dueDate) {
      return isPast(dueDate);
    },
  },
};
</script>
