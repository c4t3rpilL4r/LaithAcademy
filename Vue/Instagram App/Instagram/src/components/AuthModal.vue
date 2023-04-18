<script setup lang="ts">
import { ref } from "vue";

const { isLogin } = defineProps(["isLogin"]);
const title = isLogin ? "Login" : "Signup";

const visible = ref<boolean>(false);

const showModal = () => {
	visible.value = true;
};

const handleOk = (e: MouseEvent) => {
	console.log(e);
	visible.value = false;
};

const username = ref("");
const email = ref("");
const password = ref("");
</script>

<template>
	<div>
		<a-button type="primary" @click="showModal" class="btn">{{
			title
		}}</a-button>
		<a-modal v-model:visible="visible" :title="title" @ok="handleOk">
			<a-input
				v-if="!isLogin"
				v-model:value="username"
				placeholder="Username"
				class="input"
			/>
			<a-input v-model:value="email" placeholder="Email" class="input" />
			<a-input
				v-model:value="password"
				placeholder="Password"
				class="input"
			/>
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
</style>
