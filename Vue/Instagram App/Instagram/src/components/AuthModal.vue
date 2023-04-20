<script setup lang="ts">
import { reactive, ref } from "vue";
import { storeToRefs } from "pinia";

import { useUserStore } from "@/stores/users";
import type { ICredentials } from "@/interfaces/ICredentials";

const userStore = useUserStore();
const { errorMessage, loading } = storeToRefs(userStore);

const { isLogin } = defineProps(["isLogin"]);
const title = isLogin ? "Login" : "Signup";

const visible = ref<boolean>(false);
const userCredentials = reactive<ICredentials>({
	username: "",
	email: "",
	password: "",
});

const showModal = () => {
	visible.value = true;
};

const handleOk = (e: MouseEvent) => {
	userStore.handleSignup(userCredentials);
};

const handleCancel = () => {
	userStore.clearErrorMessage();
	visible.value = false;
};
</script>

<template>
	<div>
		<a-button type="primary" @click="showModal" class="btn">
			{{ title }}
		</a-button>
		<a-modal v-model:visible="visible" :title="title" @ok="handleOk">
			<template #footer>
				<a-button key="back" @click="handleCancel">Cancel</a-button>
				<a-button
					:disabled="loading"
					key="submit"
					type="primary"
					:loading="loading"
					@click="handleOk"
				>
					Submit
				</a-button>
			</template>

			<div v-if="!loading" class="input-container">
				<a-input
					v-if="!isLogin"
					v-model:value="userCredentials.username"
					placeholder="Username"
					class="input"
				/>
				<a-input
					v-model:value="userCredentials.email"
					placeholder="Email"
					class="input"
				/>
				<a-input
					v-model:value="userCredentials.password"
					placeholder="Password"
					class="input"
					type="password"
				/>
			</div>
			<div v-else class="spinner">
				<a-spin />
			</div>

			<a-typography-text v-if="errorMessage" type="danger">
				{{ errorMessage }}
			</a-typography-text>
		</a-modal>
	</div>
</template>

<style scoped>
.btn {
	margin-left: 10px;
}

.input {
	margin-top: 5px;
}

.input-container {
	height: 120px;
}

.spinner {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 120px;
}
</style>
