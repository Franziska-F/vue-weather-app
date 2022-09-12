<template>
  <Teleport to="body">
    <Transition name="modal-wrapper">
      <!--modal wraper ("background")-->
      <div
        v-show="modalActive"
        class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8"
      >
        <Transition name="modal-inner">
          <!-- modal content ('textbox')-->
          <div
            v-if="modalActive"
            class="p-4 bg-white self-start mt-32 max-w-screen-md"
          >
            <slot />
            <!--Text is insertet in comp SiteNavigation-->
            <button
              class="text-white mt-8 bg-blue-300 py-2 px-6"
              @click="$emit('close-modal')"
            >
              Close
            </button>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
<script setup>
defineEmits("[close-modal]"); // Is used in comp SiteNavigation to close modal
defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});
</script>
<style scoped>
/* transition of modal-wrapper */
.modal-wrapper-enter-active,
.modal-wrapper-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-wrapper-enter-from,
.modal-wrapper-leave-to {
  opacity: 0;
}
/* transition of inner-modal */
.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  transform: scale(0.8);
  opacity: 0;
}
.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
